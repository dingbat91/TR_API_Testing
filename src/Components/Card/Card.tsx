import React, { useEffect } from "react";
import { Character } from "../../Definitions/Character";
import { Film } from "../../Definitions/Film";
import { useSWFetch } from "../../Hooks/useSWFetch";
import { Planet } from "../../Definitions/Planet";
import "./Card.css";

interface CardProps {
	key: string;
	character: Character;
	films: Film[];
}

export const Card: React.FC<CardProps> = ({ character, films }) => {
	const [planets, setPlanets] = React.useState<Planet>();
	const [loading, setLoading] = React.useState<boolean>(true);

	//Fetch Planet data for homeworld
	useEffect(() => {
		const fetchplanets = async () => {
			setLoading(true);
			const resource = await fetch(character.homeworld);
			const data = (await resource.json()) as Planet;
			setPlanets(data);
			setLoading(false);
		};
		fetchplanets();
	}, [character.homeworld]);

	return (
		<article className='Card Glow'>
			<h2 className='Card__Title'>{character.name}</h2>
			<div className='Card__Details'>
				<h3 className='Card__InfoTitle'>Information</h3>
				<em>Gender:</em> {character.gender}
				<br />
				<em>Hair Color:</em> {character.hair_color}
				<br />
				{!planets && loading && <>Loading...</>}
				{planets && (
					<>
						<em>Homeworld:</em> {planets.name}
					</>
				)}
				<h3 className='Card__FilmTitle'>Films Appeared In:</h3>
				<ul className='Card__FilmList'>
					{films.map((film) => {
						if (character.films.includes(film.url)) {
							return <li>{film.title}</li>;
						}
					})}
				</ul>
			</div>
		</article>
	);
};
