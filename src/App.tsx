import React from "react";
import { CharacterContainer } from "./Components/CardContainer/CharacterContainer";
import "./App.css";
export const App: React.FC = () => {
	return (
		<div>
			<h1 className='MainTitle'>Star Wars</h1>
			<CharacterContainer />
		</div>
	);
};
