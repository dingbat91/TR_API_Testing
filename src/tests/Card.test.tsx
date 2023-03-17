import { server } from "./server/server.js";
import { CharacterContainer } from "../Components/CardContainer/CharacterContainer";
import { render, screen } from "@testing-library/react";

describe("Render Tests", () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	test("Render Luke Skywalker Card", () => {
		render(<CharacterContainer />);
		screen.debug();
		const testElement = screen.queryByText("Luke Skywalker");
		expect(testElement).toBeInTheDocument();
	});
});
