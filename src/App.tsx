import React from "react";
import { CharacterContainer } from "./Components/CharacterContainer";
import { Character } from "./Definitions/Character";

export const App: React.FC = () => {
	const [characters, setCharacters] = React.useState<Character[]>([]);
	return (
		<div>
			<h1>Welcome to Star Wars</h1>
			<CharacterContainer data={[]} />
		</div>
	);
};
