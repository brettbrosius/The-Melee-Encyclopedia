import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DiscreteSlider } from "../component/slider.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const ShortHop = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="tutorial container-fluid my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Short hop</h1>
				<img className="my-2" style={{ height: "300px" }} src="https://s3.gifyu.com/images/aaaa-shorthop.gif" />
				<p className="text-white">
					Short hopping is a jump that is significantly lower than a character’s normal jump, also called a
					full hop. Being able to short hop consistently is key to performing low to the ground aerials, which
					are a fundamental part of many characters’ offense. When combined with two other techniques, fast
					falling and lag-cancelling, you can perform a Short Hop <Link to="/fast_fall">Fast Fall</Link>{" "}
					Aerial <Link to="/lag_cancel">L-cancel</Link>, or a SHFFL. This technique eliminates the need to
					jump high in the air to use aerial attacks, which are often safer and faster than grounded attacks.
				</p>
				<p className="text-white">
					Performing a short hop is quite simple, but can be tricky at first, and is character dependent. To
					perform a short hop, input the jump button (X, Y or Tap Jump), and let go of the button before your
					character’s jump squat ends. A jump squat is a small animation that plays after inputting a jump,
					but before your character is airborne. Each character’s jump squat is a specific number of frames,
					ranging from 3 frames all the way up to 8. This makes short hopping a bit more difficult on
					characters like Fox and Pikachu (3 frame jump squat), but easier on a character like Bowser (8 frame
					jump squat). Make sure you can consistently input a short or full hop on command, this will give you
					great control over your aerial movement.{" "}
				</p>
				<p className="text-white">
					The simplest way to practice short hopping is to just jump over and over, while trying to let go of
					the jump input during your jump squat. I recommend using characters with high full hops, like Falco
					or Luigi so you can easily see the difference between a full and short hop.
				</p>
				<br />
				<br />
				<br />
				<DiscreteSlider tech="short_hop" />
				<p className="text-white">My current progress: {store.user.progress.short_hop}%</p>
			</div>
		);
	else
		return (
			<div className="tutorial container-fluid my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Short hop</h1>
				<img
					className="my-2"
					style={{ height: "300px" }}
					src="https://im7.ezgif.com/tmp/ezgif-7-69ba28e4d359.gif"
				/>
				<p className="text-white">
					Short hopping is a jump that is significantly lower than a character’s normal jump, also called a
					full hop. Being able to short hop consistently is key to performing low to the ground aerials, which
					are a fundamental part of many characters’ offense. When combined with two other techniques, fast
					falling and lag-cancelling, you can perform a Short Hop <Link to="/fast_fall">Fast Fall</Link>{" "}
					Aerial <Link to="/lag_cancel">L-cancel</Link>, or a SHFFL. This technique eliminates the need to
					jump high in the air to use aerial attacks, which are often safer and faster than grounded attacks.
				</p>
				<p className="text-white">
					Performing a short hop is quite simple, but can be tricky at first, and is character dependent. To
					perform a short hop, input the jump button (X, Y or Tap Jump), and let go of the button before your
					character’s jump squat ends. A jump squat is a small animation that plays after inputting a jump,
					but before your character is airborne. Each character’s jump squat is a specific number of frames,
					ranging from 3 frames all the way up to 8. This makes short hopping a bit more difficult on
					characters like Fox and Pikachu (3 frame jump squat), but easier on a character like Bowser (8 frame
					jump squat). Make sure you can consistently input a short or full hop on command, this will give you
					great control over your aerial movement.{" "}
				</p>
				<p className="text-white">
					The simplest way to practice short hopping is to just jump over and over, while trying to let go of
					the jump input during your jump squat. I recommend using characters with high full hops, like Falco
					or Luigi so you can easily see the difference between a full and short hop.
				</p>
				<br />
				<br />
				<br />
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
