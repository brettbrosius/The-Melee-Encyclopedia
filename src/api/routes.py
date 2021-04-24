"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Progress
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route("/signup", methods=["POST"])
def signup():
    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    

    username = body['username']
    username_exists = User.query.filter_by(username=username).first()
    if username_exists is not None:
        raise APIException("This username already exists", status_code=400)

    new_user = User(username=body['username'], password=body['password'], is_active=1)
    db.session.add(new_user)
    db.session.commit()
    user_id = new_user.id
    access_token = create_access_token(identity=user_id)
    return jsonify(access_token=access_token)

@api.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(username=username, password=password).first()
    
    if user is None:
        raise APIException("Bad username or password", status_code=401)

    user_id = user.id
    access_token = create_access_token(identity=user_id)
    return jsonify(access_token=access_token)

@api.route("/user/", methods=["GET"])
@jwt_required()
def get_user():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    progress = Progress.query.filter_by(user_id=user_id).first()
    return jsonify(user.serialize(), progress.serialize()), 200

# @api.route("/progress/<int:id>", methods=["GET"])
# @jwt_required()
# def get_progress(id):
#     user_id = get_jwt_identity()
#     progress_query = Progress.query.filter_by(user_id=user_id).first()
#     # progress = list(map(lambda progress: progress.serialize(), progress_query))
#     return jsonify(progress_query.serialize()), 200
#### IDK IF I NEED THIS I CAN JUST DO IT IN THE /USER/ METHOD ABOVE BUT IM GONNA KEEP IT JSUT IN CASE HEHE ####


@api.route("/progress/<int:id>/", methods=["POST"])
@jwt_required()
def add_progress(id):
    user_id = get_jwt_identity()
    body = request.get_json()
    record = Progress.query.filter_by(user_id=user_id).first()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)

    lag_cancel = 0
    short_hop = 0
    fast_fall = 0
    wavedash = 0
    dash_dance = 0
    teching = 0

    attribute_to_update = ""
    tech_array = ["lag_cancel", "short_hop", "fast_fall", "wavedash", "dash_dance", "teching"]

    for x in tech_array:
       if x in body:
           if x == "lag_cancel":
               lag_cancel = body["lag_cancel"]
               attribute_to_update = "lag_cancel"
           elif x == "short_hop":
               short_hop = body["short_hop"]
               attribute_to_update = "short_hop"
           elif x == "fast_fall":
               fast_fall = body["fast_fall"]
               attribute_to_update = "fast_fall"
           elif x == "wavedash":
               wavedash = body["wavedash"]
               attribute_to_update = "wavedash"
           elif x == "dash_dance":
               dash_dance = body["dash_dance"]
               attribute_to_update = "dash_dance"
           elif x == "teching":
               teching = body["teching"]
               attribute_to_update = "teching"


    if record is None:
        new_progress = Progress(user_id=user_id, lag_cancel=lag_cancel, short_hop=short_hop, fast_fall=fast_fall, wavedash=wavedash, dash_dance=dash_dance, teching=teching)
        db.session.add(new_progress)
        db.session.commit()
    else:
        # record.attribute_to_update = body[attribute_to_update]
        if attribute_to_update == "lag_cancel":
            record.lag_cancel = body["lag_cancel"]
        elif attribute_to_update == "short_hop":
            record.short_hop = body["short_hop"]
        elif attribute_to_update == "fast_fall":
            record.fast_fall = body["fast_fall"]
        elif attribute_to_update == "wavedash":
            record.wavedash = body["wavedash"]
        elif attribute_to_update == "dash_dance":
            record.dash_dance = body["dash_dance"]
        elif attribute_to_update == "teching":
            record.teching = body["teching"]
        db.session.add(record)
        db.session.commit()

    return jsonify("Progress updated."), 200