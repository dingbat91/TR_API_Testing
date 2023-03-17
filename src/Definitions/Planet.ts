export interface Planet {
	name: string;
	rotationPeriod: string;
	orbitalPeriod: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surfaceWater: string;
	population: string;
	residents: string[]; // URLs to resident resources
	films: string[]; // URLs to film resources
	created: string; // ISO 8601 format
	edited: string; // ISO 8601 format
	url: string; // URL to this planet resource
}
