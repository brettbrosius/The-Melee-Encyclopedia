import React, { useContext } from "react";
import { Route, Link } from "react-router-dom";
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
			query: { perPage: 50, page: 1, sortBy: "startAt asc", filter: { upcoming: true, videogameIds: 1 } }
		) {
			nodes {
				id
				name
				url
				isRegistrationOpen
				numAttendees
				images {
					url
				}
			}
		}
	}
`;

export const Tournaments = () => {
	const { loading, error, data } = useQuery(upcomingTournaments);

	if (loading) return <p className="text-center text-danger my-5">Loading...</p>;
	if (error) return <p className="text-center text-danger my-5">Error</p>;

	return (
		<div className="row">
			{Object.keys(data.tournaments.nodes).map((item, i) => {
				return (
					<div
						className="card bg-dark m-2 text-center"
						style={{ position: "relative", left: "300px", width: "20rem", display: "inline-table" }}
						key={i}>
						<img
							src={`${data.tournaments.nodes[item].images[0].url}`}
							className="card-img-top"
							style={{ height: "250px", width: "250px" }}
						/>
						<h4 className="card-title text-danger">{data.tournaments.nodes[item].name}</h4>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={`http://www.smash.gg${data.tournaments.nodes[item].url}`}
							className="card-text text-white">
							Click here to register!
						</a>
						<p className="card-text text-white">
							Current # of attendees: {data.tournaments.nodes[item].numAttendees}
						</p>
					</div>
				);
			})}
			;
		</div>
	);
};
