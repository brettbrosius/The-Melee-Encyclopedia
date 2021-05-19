import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { ApolloProvider } from "@apollo/client/react";
import { useQuery, gql, ApolloClient, InMemoryCache } from "@apollo/client";

export const apollo_client = new ApolloClient({
	uri: "https://api.smash.gg/gql/alpha",
	cache: new InMemoryCache()
});

const upcomingTournaments = gql`
	query TournamentsByVideogame {
		tournaments(
			query: { perPage: 25, page: 1, sortBy: "startAt asc", filter: { upcoming: true, videogameIds: 1 } }
		) {
			nodes {
				id
				name
				slug
			}
		}
	}
`;

export const Tournaments = () => {
	const { loading, error, data } = useQuery(upcomingTournaments);

	if (loading) return <p className="text-center text-danger my-5">Loading...</p>;
	if (error) return <p className="text-center text-danger my-5">Error :(</p>;

	return Object.keys(data.tournaments.nodes).map((item, i) => (
		<div className="text-center text-white my-5" key={i}>
			<span className="text-center text-white my-5" key={i}>
				name: {data.tournaments.nodes[item].name} url: {data.tournaments.nodes[item].slug} key: {i}
			</span>
		</div>
	));
};

// export const Tournaments = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="text-center mt-5">
// 			<h1 className="text-danger">Upcoming Melee Tournaments</h1>
// 			<p className="text-white">
// 				this is where the smash.gg api integration stuff will go gotta learn how to do it tho heheheheheheh
// 			</p>
// 		</div>
// 	);
// };
