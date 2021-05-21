import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const LagCancel = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Lag Cancel</h1>
				<img
					className="my-2"
					src="https://ssb.wiki.gallery/images/9/94/Lcancelink.gif"
					style={{ height: "200px", width: "200px" }}
				/>
				<p className="text-white">
					Lag cancelling, commonly referred to as L-cancelling, is a technique that allows your character to
					cut the lag from landing with an aerial in half, rounded down. Every time a character in Melee lands
					while in the middle of an aerial attack, they play an animation that is completely unactionable
					(meaning you are unbale to perform any other input). L-cancelling is the single most important
					advanced technique you can learn, as it will allow you to string together combos you wouldn’t
					normally be able to, and also be able to defend yourself more quickly after missing an aerial. I
					can’t stress enough how imperative it is to learn this technique, in my opinion it separates a
					casual Melee player from a competitive one.{" "}
				</p>
				<p className="text-white">
					To perform a lag-cancel, you must use a shield input (L, R, or Z) up to 7 frames before landing with
					an aerial. This timing is pretty tight, as each frame is only 1/60 of a second, giving you 7/60 of a
					second to perform the lag-cancel. However, the easiest way to perform a lag-cancel is to just press
					the shield input right before you land. It is much more likely that you press it late rather than
					early, so if you are consistently missing it try to press the button a bit earlier.{" "}
				</p>
				<p className="text-white">
					Most aerials in the game can be l-cancelled (only a few of Mr. Game & Watch’s aerials cannot be), so
					any character makes good practice for this technique. However, the characters that have extremely
					long landing lag animations, like Link with his down-air, and Ganondorf with his down-air are much
					easier to tell if you’re doing it right when you’re just starting out.{" "}
				</p>
				<br />
				<br />
				<br />
				<DiscreteSlider tech="lag_cancel" />
				<p className="text-white">My progress: {store.user.progress.lag_cancel}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Lag Cancel</h1>
				<img
					className="my-2"
					src="https://ssb.wiki.gallery/images/9/94/Lcancelink.gif"
					style={{ height: "200px", width: "200px" }}
				/>
				<p className="text-white">
					Lag cancelling, commonly referred to as L-cancelling, is a technique that allows your character to
					cut the lag from landing with an aerial in half, rounded down. Every time a character in Melee lands
					while in the middle of an aerial attack, they play an animation that is completely unactionable
					(meaning you are unbale to perform any other input). L-cancelling is the single most important
					advanced technique you can learn, as it will allow you to string together combos you wouldn’t
					normally be able to, and also be able to defend yourself more quickly after missing an aerial. I
					can’t stress enough how imperative it is to learn this technique, in my opinion it separates a
					casual Melee player from a competitive one.{" "}
				</p>
				<p className="text-white">
					To perform a lag-cancel, you must use a shield input (L, R, or Z) up to 7 frames before landing with
					an aerial. This timing is pretty tight, as each frame is only 1/60 of a second, giving you 7/60 of a
					second to perform the lag-cancel. However, the easiest way to perform a lag-cancel is to just press
					the shield input right before you land. It is much more likely that you press it late rather than
					early, so if you are consistently missing it try to press the button a bit earlier.{" "}
				</p>
				<p className="text-white">
					Most aerials in the game can be l-cancelled (only a few of Mr. Game & Watch’s aerials cannot be), so
					any character makes good practice for this technique. However, the characters that have extremely
					long landing lag animations, like Link with his down-air, and Ganondorf with his down-air are much
					easier to tell if you’re doing it right when you’re just starting out.{" "}
				</p>
				<br />
				<br />
				<br />
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
