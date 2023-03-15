import React from "react";
import { Character } from "../../Definitions/Character";
import { Film } from "../../Definitions/Film";
import { useSWFetch } from "../../Hooks/useSWFetch";
import { Card } from "../Card/Card";

export const CharacterContainer: React.FC = () => {
	const [characters, setCharacters] = React.useState<Character[]>([]);
	const [films, setfilms] = React.useState<Film[]>([]);
	useSWFetch("https://swapi.dev/api/films/", setfilms);
	useSWFetch("https://swapi.dev/api/people/", setCharacters);
	console.log(characters);
	return (
		<div className='Container'>
			{characters.map((char) => (
				<Card character={char} films={films} />
			))}
		</div>
	);
};
