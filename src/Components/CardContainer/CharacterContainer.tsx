import React from "react";
import { Character } from "../../Definitions/Character";
import { Film } from "../../Definitions/Film";
import { useSWFetch } from "../../Hooks/useSWFetch";
import { Card } from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import "../Card/Card.css";
import "./CharacterContainer.css";

export const CharacterContainer: React.FC = () => {
	const [characters, setCharacters] = React.useState<Character[]>([]);
	const [charLoadflag, setCharLoadFlag] = React.useState<Boolean>(true);
	const [films, setfilms] = React.useState<Film[]>([]);
	useSWFetch("https://swapi.dev/api/films/", setfilms, setCharLoadFlag);
	useSWFetch("https://swapi.dev/api/people/", setCharacters, setCharLoadFlag);
	console.log(characters);
	return (
		<div className='container'>
			{charLoadflag && <div className='Card'>Loading...</div>}
			{characters.map((char) => (
				<Card key={uuidv4()} character={char} films={films} />
			))}
		</div>
	);
};
