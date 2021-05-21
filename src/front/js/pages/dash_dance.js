import React, { useContext } from "react";
import { DiscreteSlider } from "../component/slider.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const DashDance = () => {
	const { store, actions } = useContext(Context);

	if (store.token != null && store.user)
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Dash Dance</h1>
				<img className="my-2" src="https://s3.gifyu.com/images/aaaaa-dashdance.gif" />
				<p className="text-white">
					Dash dancing is a technique in Melee that allows the user to cancel their initial dash animation
					with one in the opposite direction, allowing you to stay unpredictable with your movement and be
					able to quickly react to your opponent. In order to understand dash dancing more deeply, you need to
					understand the difference between a dash and a run, and how states work in Melee. When smashing your
					control stick right or left, your character will enter the “dash” state for a few frames (between 7
					and 18 depending on the character), and then transition into the “run” state. Trying to input a dash
					in the opposite direction while in run will cause your character to enter a lengthy turnaround
					animation, during which you are unactionable. However, if you input an opposite direction dash while
					in the dash state, you will instantly enter the dash state in the opposite direction, and still be
					able to either dash again in the initial direction, jump, <Link to="/wavedash">wavedash</Link>, etc.
					All characters benefit from dash dancing, some more than others.{" "}
				</p>
				<p className="text-white">
					Performing a dash dance is much easier than understanding it, as you can take any character and
					smash the stick back and forth to dash dance in place. Many people starting out (myself included)
					will spam this and think they are accomplishing something, but it is much more applicable to vary
					the time between each change in direction, to move across the stage while still maintaining that
					unpredictability of where you are going to go. In the gif example above, Marth moves all the way
					across Final Destination by dash dancing, making sure to let his initial dash animation play out
					longer when moving right than when he dash dances back to the left. The gif below is a great example
					from Captain Falcon player S2J of how dash dancing can keep your approaches and intentions
					unpredictable while still being able to perform attacks and approaches.{" "}
				</p>
				<img className="my-2" src="https://ssb.wiki.gallery/images/c/cc/S2J_tech-chase.gif" />
				<p className="text-white">
					All characters make use of dash dancing, so it is important to get familiar with your main’s initial
					dash animation and comfortable moving across the stage with a dash dance. However, characters with
					long initial dash animations like Marth, Captain Falcon, Mewtwo, and Peach are some of the easiest
					to practice and get the hang of dash dancing with. More advanced dash dancing techniques include fox
					trotting, where you initial dash in the same direction by returning the stick to neutral before you
					enter run, and pivoting, where your character turns around and enters the wait state out of an
					initial dash.{" "}
				</p>
				<br />
				<br />
				<br />

				<DiscreteSlider tech="dash_dance" />
				<p className="text-white">My current progress: {store.user.progress.dash_dance}%</p>
			</div>
		);
	else
		return (
			<div className="container-fluid tutorial my-5" style={{ position: "absolute", left: "300px" }}>
				<h1 className="text-danger">Dash Dance</h1>
				<p className="text-white">
					Dash dancing is a technique in Melee that allows the user to cancel their initial dash animation
					with one in the opposite direction, allowing you to stay unpredictable with your movement and be
					able to quickly react to your opponent. In order to understand dash dancing more deeply, you need to
					understand the difference between a dash and a run, and how states work in Melee. When smashing your
					control stick right or left, your character will enter the “dash” state for a few frames (between 7
					and 18 depending on the character), and then transition into the “run” state. Trying to input a dash
					in the opposite direction while in run will cause your character to enter a lengthy turnaround
					animation, during which you are unactionable. However, if you input an opposite direction dash while
					in the dash state, you will instantly enter the dash state in the opposite direction, and still be
					able to either dash again in the initial direction, jump, <Link to="/wavedash">wavedash</Link>, etc.
					All characters benefit from dash dancing, some more than others.{" "}
				</p>
				<p className="text-white">
					Performing a dash dance is much easier than understanding it, as you can take any character and
					smash the stick back and forth to dash dance in place. Many people starting out (myself included)
					will spam this and think they are accomplishing something, but it is much more applicable to vary
					the time between each change in direction, to move across the stage while still maintaining that
					unpredictability of where you are going to go. In the gif example above, Marth moves all the way
					across Final Destination by dash dancing, making sure to let his initial dash animation play out
					longer when moving right than when he dash dances back to the left. The gif below is a great example
					from Captain Falcon player S2J of how dash dancing can keep your approaches and intentions
					unpredictable while still being able to perform attacks and approaches.{" "}
				</p>
				<img className="my-2" src="https://ssb.wiki.gallery/images/c/cc/S2J_tech-chase.gif" />
				<p className="text-white">
					All characters make use of dash dancing, so it is important to get familiar with your main’s initial
					dash animation and comfortable moving across the stage with a dash dance. However, characters with
					long initial dash animations like Marth, Captain Falcon, Mewtwo, and Peach are some of the easiest
					to practice and get the hang of dash dancing with. More advanced dash dancing techniques include fox
					trotting, where you initial dash in the same direction by returning the stick to neutral before you
					enter run, and pivoting, where your character turns around and enters the wait state out of an
					initial dash.{" "}
				</p>
				<br />
				<br />
				<br />

				<p className="text-white">Sign-up/Log-in to track your progress!</p>
			</div>
		);
};
