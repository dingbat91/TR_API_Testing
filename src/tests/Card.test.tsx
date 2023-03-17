import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CharacterContainer } from "../Components/CardContainer/CharacterContainer";
import { Character } from "../Definitions/Character";
import { v4 as uuidv4 } from "uuid";
import { Film } from "../Definitions/Film";
import { Card } from "../Components/Card/Card";

describe("CardContainer Tests", () => {
	test("Cards Renders from API", async () => {
		render(<CharacterContainer />);

		await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
		console.log(screen.debug());
		expect(screen.queryByText("Luke Skywalker")).toBeInTheDocument();
	});
});
