import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { DiscreteSlider } from "../component/slider.js";

export const FastFall = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Fast Fall</h1>
				<img
					className="my-2"
					src="https://ssb.wiki.gallery/images/7/7b/Ff.gif"
					style={{ height: "250px", width: "300px" }}
				/>
				<p className="text-white">
					Fast falling (as the name implies) is a technique that makes your character fall faster in the air.
					Fast falling is one of the simplest advanced techniques in Melee, and it is probably one you’ve
					performed unintentionally a ton of times. Its main application is to speed up a character’s
					gameplay, and it allows your character to return to the ground quicker in order to perform another
					movement input. Every character has both a gravity value, and a fast fall value. When fast falling
					your character’s gravity is ignored, and your character’s fast fall speed is used instead. Certain
					characters like Fox, Falco, and Captain Falcon are known as “fast-fallers” because of their very
					high gravity and fast fall values, allowing them to string moves together much quicker, but also be
					much more susceptible to being comboed by opponents.
				</p>
				<p className="text-white">
					To perform a fast fall, simply tap down on the control stick at any time during your character’s
					fall. A fast fall input will do nothing while your character is still travelling upward from a jump,
					so practice inputting down on the control stick at the apex of your jump. This will come in handy
					when putting all of these techniques together in the future. Be sure to have a good understanding of
					the apex of your jump and when to input the fast fall, and you will be good to go.
				</p>
				<p className="text-white">
					Practicing fast falling is pretty simple, as all you need to do is be airborne and input down on the
					control stick. All characters require the same inputs to fast fall, but it might be easier to see
					the difference on high full hop characters, like Falco or Luigi.{" "}
				</p>
				<br />
				<br />
				<br />
				<DiscreteSlider tech="fast_fall" />
				<p className="text-white">My progress: {store.user.progress.fast_fall}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Fast Fall</h1>
				<img
					className="my-2"
					src="https://ssb.wiki.gallery/images/7/7b/Ff.gif"
					style={{ height: "250px", width: "300px" }}
				/>
				<p className="text-white">
					Fast falling (as the name implies) is a technique that makes your character fall faster in the air.
					Fast falling is one of the simplest advanced techniques in Melee, and it is probably one you’ve
					performed unintentionally a ton of times. Its main application is to speed up a character’s
					gameplay, and it allows your character to return to the ground quicker in order to perform another
					movement input. Every character has both a gravity value, and a fast fall value. When fast falling
					your character’s gravity is ignored, and your character’s fast fall speed is used instead. Certain
					characters like Fox, Falco, and Captain Falcon are known as “fast-fallers” because of their very
					high gravity and fast fall values, allowing them to string moves together much quicker, but also be
					much more susceptible to being comboed by opponents.
				</p>
				<p className="text-white">
					To perform a fast fall, simply tap down on the control stick at any time during your character’s
					fall. A fast fall input will do nothing while your character is still travelling upward from a jump,
					so practice inputting down on the control stick at the apex of your jump. This will come in handy
					when putting all of these techniques together in the future. Be sure to have a good understanding of
					the apex of your jump and when to input the fast fall, and you will be good to go.
				</p>
				<p className="text-white">
					Practicing fast falling is pretty simple, as all you need to do is be airborne and input down on the
					control stick. All characters require the same inputs to fast fall, but it might be easier to see
					the difference on high full hop characters, like Falco or Luigi.{" "}
				</p>
				<br />
				<br />
				<br />
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
