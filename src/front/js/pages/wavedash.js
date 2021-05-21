import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const Wavedash = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Wavedash</h1>
				<img className="my-2" src="https://ssb.wiki.gallery/images/c/c6/Wavedashbig.gif" />
				<p className="text-white">
					Wavedashing is a technique that allows your character to slide on the ground by air dodging
					(pressing a shield input + a direction on the control stick in the air) directly into the ground.
					The distance a character travels is dependent on their traction value. In the example above, Luigi
					wavedashes much further than peach, as they are the upper and lower bound of traction values in
					Melee. Despite this discrepancy, wavedashing is a pivotal technique for all characters, allowing for
					quick adjustments in spacing, and extending the range of grounded moves. Wavedashing is so effective
					because after a short initial animation, you are completely actionable during the slide, allowing
					you to mix up your movement and perform any grounded action you like.
				</p>
				<p className="text-white">
					To perform a wavedash, simply jump and air dodge in a diagonal down angle. At first your character
					will come off the ground a significant amount, but as you speed up the input more and more, you will
					begin to be able to input the air dodge as soon as you leave your jump squat, giving you those
					crispy smooth wavedashes. It is a simple technique to learn but mastering it through the use of
					grounded moves and approaches can be difficult. There are also extensions to this technique, like
					wavelanding (air dodging into a platform while airborne), or ledgedashing (wavelanding onto the
					stage from hanging on the ledge), which are fundamental to good movement in Melee.{" "}
				</p>
				<p className="text-white">
					Characters with low traction, and therefore long slippery wavedashes, are the easiest and most
					satisfying characters to learn to wavedash on. Luigi is the prime example of this, as even at the
					top level his gameplay is mainly reliant on his insanely long wavedash. Other characters with long
					wavedashes include Ice Climbers, Mewtwo, Marth, and Samus.{" "}
				</p>
				<br />
				<br />
				<br />
				<DiscreteSlider tech="wavedash" />
				<p className="text-white">My progress: {store.user.progress.wavedash}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Wavedash</h1>
				<img className="my-2" src="https://ssb.wiki.gallery/images/c/c6/Wavedashbig.gif" />
				<p className="text-white">
					Wavedashing is a technique that allows your character to slide on the ground by air dodging
					(pressing a shield input + a direction on the control stick in the air) directly into the ground.
					The distance a character travels is dependent on their traction value. In the example above, Luigi
					wavedashes much further than peach, as they are the upper and lower bound of traction values in
					Melee. Despite this discrepancy, wavedashing is a pivotal technique for all characters, allowing for
					quick adjustments in spacing, and extending the range of grounded moves. Wavedashing is so effective
					because after a short initial animation, you are completely actionable during the slide, allowing
					you to mix up your movement and perform any grounded action you like.
				</p>
				<p className="text-white">
					To perform a wavedash, simply jump and air dodge in a diagonal down angle. At first your character
					will come off the ground a significant amount, but as you speed up the input more and more, you will
					begin to be able to input the air dodge as soon as you leave your jump squat, giving you those
					crispy smooth wavedashes. It is a simple technique to learn but mastering it through the use of
					grounded moves and approaches can be difficult. There are also extensions to this technique, like
					wavelanding (air dodging into a platform while airborne), or ledgedashing (wavelanding onto the
					stage from hanging on the ledge), which are fundamental to good movement in Melee.{" "}
				</p>
				<p className="text-white">
					Characters with low traction, and therefore long slippery wavedashes, are the easiest and most
					satisfying characters to learn to wavedash on. Luigi is the prime example of this, as even at the
					top level his gameplay is mainly reliant on his insanely long wavedash. Other characters with long
					wavedashes include Ice Climbers, Mewtwo, Marth, and Samus.{" "}
				</p>
				<br />
				<br />
				<br />
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
