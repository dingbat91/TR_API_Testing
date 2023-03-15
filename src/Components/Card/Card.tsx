import React from "react";
import { Character } from "../../Definitions/Character";
import { Film } from "../../Definitions/Film";
import { useSWFetch } from "../../Hooks/useSWFetch";

interface CardProps {
	character: Character;
	films: Film[];
}

export const Card: React.FC<CardProps> = ({ character, films }) => {
	return (
		<div>
			<h2>{character.name}</h2>
			<h3>Info:</h3>
			Gender: {character.gender}
			<h3>Films</h3>
			{films.map((film) => {
				if (character.films.includes(film.url)) {
					return (
						<ul>
							<li>{film.title}</li>
						</ul>
					);
				}
			})}
		</div>
	);
};
