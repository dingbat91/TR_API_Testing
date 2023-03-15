import React from "react";
import { CharacterContainer } from "./Components/CardContainer/CharacterContainer";

export const App: React.FC = () => {
	return (
		<div>
			<h1>Welcome to Star Wars</h1>
			<CharacterContainer />
		</div>
	);
};
