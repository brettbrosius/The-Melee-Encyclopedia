from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username= db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    progress = db.relationship('Progress', backref='user', lazy=True)


    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
        }

class Progress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    lag_cancel = db.Column(db.Integer, default=0, nullable=False)
    short_hop = db.Column(db.Integer, default=0, nullable=False)
    fast_fall = db.Column(db.Integer, default=0, nullable=False)
    wavedash = db.Column(db.Integer, default=0, nullable=False)
    dash_dance = db.Column(db.Integer, default=0, nullable=False)
    teching = db.Column(db.Integer, default=0, nullable=False)

    def __repr__(self):
        return '<Progress %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "lag_cancel": self.lag_cancel,
            "short_hop": self.short_hop,
            "fast_fall": self.fast_fall,
            "wavedash": self.wavedash,
            "dash_dance": self.dash_dance,
            "teching": self.teching,
        }