import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { DiscreteSlider } from "../component/slider.js";
import "../../styles/home.scss";

export const Teching = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Teching</h1>
				<img className="my-2" src="https://s3.gifyu.com/images/aaaaaaaa-teching.md.gif" />
				<p className="text-white">
					Teching is the act of inputting a shield (L, R, or Z) within 20 frames of landing while your
					character is in tumble (a state characters enter after being hit). Teching is a very important way
					to interact with your opponent while on the defensive and can allow you to escape combos that would
					be deadly without teching. There are 3 different kinds of techs on the ground, tech in place, and
					tech roll left or right, which are performed by holding that direction on the control stick when
					inputting the tech. This technique is simple to learn but difficult to master, as it requires a good
					knowledge of your opponent’s attack options and being able to react to getting hit.
				</p>
				<p className="text-white">
					Practicing teching is simple, as you can always do it when you get hit and tumble to the ground. An
					easy way to do this is to just play against a CPU and allow them to hit you, and work on getting the
					timing down. When in an actual game it is important to try and mix up your tech options, if you
					constantly go for the same one a good player will pick up on this and punish you for it
					consistently. It is also possible to tech on a wall, and while it is impossible to do a roll tech on
					the wall, you can perform a walljump tech that allows you to jump out of harm’s way and
					counter-attack, as shown in the gif below. Another advancement on this technique is known as the
					Amsah tech, which uses a technique known as smash DI to snap to the ground on a move that would
					normally send you flying, also shown below.{" "}
				</p>
				<img
					style={{ height: "300px" }}
					className="my-2 mx-5"
					src="https://ssb.wiki.gallery/images/d/d3/Marth_PassiveWallJump_to_AttackAirB.gif"
				/>
				<img className="my-2 mx-5" src="https://ssb.wiki.gallery/images/9/9b/SSBM_Amsah_Tech.gif" />

				<p className="text-white">
					There are no character recommendations for teching, as it is completely the same on every character.
					However certain characters have different properties on their tech in place or tech roll. For
					example, Falco has a longer tech roll than most characters, and Pikachu has a faster tech in place
					animation than all other characters.{" "}
				</p>
				<br />
				<br />
				<br />
				<DiscreteSlider tech="teching" />
				<p className="text-white">My progress: {store.user.progress.teching}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Teching</h1>
				<p className="text-white">
					Teching is the act of inputting a shield (L, R, or Z) within 20 frames of landing while your
					character is in tumble (a state characters enter after being hit). Teching is a very important way
					to interact with your opponent while on the defensive and can allow you to escape combos that would
					be deadly without teching. There are 3 different kinds of techs on the ground, tech in place, and
					tech roll left or right, which are performed by holding that direction on the control stick when
					inputting the tech. This technique is simple to learn but difficult to master, as it requires a good
					knowledge of your opponent’s attack options and being able to react to getting hit.
				</p>
				<p className="text-white">
					Practicing teching is simple, as you can always do it when you get hit and tumble to the ground. An
					easy way to do this is to just play against a CPU and allow them to hit you, and work on getting the
					timing down. When in an actual game it is important to try and mix up your tech options, if you
					constantly go for the same one a good player will pick up on this and punish you for it
					consistently. It is also possible to tech on a wall, and while it is impossible to do a roll tech on
					the wall, you can perform a walljump tech that allows you to jump out of harm’s way and
					counter-attack, as shown in the gif below. Another advancement on this technique is known as the
					Amsah tech, which uses a technique known as smash DI to snap to the ground on a move that would
					normally send you flying, also shown below.{" "}
				</p>
				<img
					style={{ height: "300px" }}
					className="my-2 mx-5"
					src="https://ssb.wiki.gallery/images/d/d3/Marth_PassiveWallJump_to_AttackAirB.gif"
				/>
				<img className="my-2 mx-5" src="https://ssb.wiki.gallery/images/9/9b/SSBM_Amsah_Tech.gif" />

				<p className="text-white">
					There are no character recommendations for teching, as it is completely the same on every character.
					However certain characters have different properties on their tech in place or tech roll. For
					example, Falco has a longer tech roll than most characters, and Pikachu has a faster tech in place
					animation than all other characters.{" "}
				</p>
				<br />
				<br />
				<br />
				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
