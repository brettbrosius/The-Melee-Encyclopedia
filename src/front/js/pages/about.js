import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-5" style={{ position: "absolute", left: "300px" }}>
			<h1 className="text-danger">About the Melee Encyclopedia</h1>
			<p className="text-white">
				The concept of this website is to make the notoriously steep and difficult learning curve of Super Smash
				Bros. Melee a little bit easier to digest, and to allow users to track their progress as they go. Melee
				is an incredibly deep and complex game, and even to just be able to play the game competitively there
				are a host of techniques that are required. This site will start with the first few “advanced”
				techniques that all Melee players learn. This website assumes that you are familiar with the basic
				controls and concepts of the gameplay of the Smash Bros. series. If you aren’t, a great place to start
				is actually the in-game “How to play” video, which is also embedded below. Note that these techniques
				are universal and will be used no matter what character you choose, but some techniques are more
				prevalent on certain characters. For example: <Link to="/wavedash">wavedashing</Link> is much more
				applicable and effective with Luigi vs. with Peach, but you will still use it on both characters.
			</p>
			<iframe className="my-2" width="560" height="315" src="https://www.youtube.com/embed/10mA9NR7yLA" />
			<p className="text-white">
				It is also important to know the competitive ruleset. A full list of the rules can be seen{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://www.ssbwiki.com/Tournament_rulesets_(SSBM)">
					here
				</a>{" "}
				but the main things to note are there are a set list of stages to choose from, matches are played in
				stock mode with 4 stocks and are either best-of-3 or best-of-5, and items are always turned off.{" "}
			</p>
			<h1 className="text-danger mb-2">Frequently Asked Questions</h1>
			<h5 className="text-danger my-2">How do I play?</h5>
			<p className="text-white">
				{" "}
				In the past Melee was a game that was only played in person, and had a very fledgling and not popular
				online scene. This helped it grow over the past 20 years in a grassroots and organic way, and has kept
				the scene alive and well without any outside support. However, Project Slippi was released in March of
				2020, and allows for extremely high-quality netplay matches with anyone in the world, and has led to a
				resurgence in player count and Melee’s relevance in general. You can read more about Project Slippi{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://www.slippi.gg">
					here
				</a>{" "}
			</p>
			<h5 className="text-danger my-2">Will you add more techniques?</h5>
			<p className="text-white">
				I would like to add more! The 6 I’ve chosen are the very basic fundamentals but they are just scratching
				the surface. This is a project for a coding bootcamp but I hope to be able to fully support it as a
				stand-alone site someday.
			</p>

			<h5 className="text-danger my-2">What character should I play?</h5>
			<p className="text-white">
				This is something a lot of new players get hung up on. In the beginning it’s very important to try out a
				lot of different characters and get a feel for their individual playstyles. It’s also important to stay
				away from tier lists until you have at least the basics down, because you won’t have a great
				understanding of what makes characters good or bad. My overall recommendation is to play the character
				you have the most fun on!
			</p>

			<h5 className="text-danger my-2">I wanna learn more about the competitive history of Melee</h5>
			<p className="text-white">
				Watch{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=NSf2mgkRm7Q">
					The Smash Brothers documentary
				</a>
				! This is what initially got me into the competitive scene of Melee, and helps give you a background
				into the scene. There is also another documentary that picks up where The Smash Brothers left off,{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://www.vimeo.com/ondemand/metagame">
					Metagame
				</a>
				.
			</p>

			<h5 className="text-danger my-2">I got 100% on all the techniques, now what?</h5>
			<p className="text-white">
				Go play! Hop on Slippi and put your new techniques in practice! It won’t be easy and you’ll probably get
				stomped your first few games, but so did everyone! And keep in mind most people playing Melee today have
				thousands of hours and decades of practice on you, and that’s okay! You can also check out some more
				resources to keep learning about the game, I recommend{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://www.smashboards.com">
					Smashboards
				</a>
				, and{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.youtube.com/channel/UC46ZTid4t2ctB6osM0WTiJA">
					SSBM Tutorials
				</a>{" "}
				on Youtube as great ways to further your Melee education. If you’re feeling confident in your abilities
				you can also check out the <Link to="/tournaments">upcoming tournaments tab</Link> to play in some free
				Slippi tournies and really see what you’re made of. Good luck and have fun!
			</p>
		</div>
	);
};
