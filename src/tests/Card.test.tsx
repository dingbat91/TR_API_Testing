import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CharacterContainer } from "../Components/CardContainer/CharacterContainer";

describe("init Tests", () => {
	test("Site Renders", async () => {
		render(<CharacterContainer />);

		await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
		console.log(screen.debug());
		expect(screen.findByText(/Luke Skywalker/i)).toBeInTheDocument();
	});
});
