export interface Film {
	title: string;
	episodeId: number;
	director: string;
	producer: string;
	releaseDate: string; // ISO 8601 format
	openingCrawl: string;
	characters: string[]; // URLs to character resources
	planets: string[]; // URLs to planet resources
	starships: string[]; // URLs to starship resources
	vehicles: string[]; // URLs to vehicle resources
	species: string[]; // URLs to species resources
	created: string; // ISO 8601 format
	edited: string; // ISO 8601 format
	url: string; // URL to this film resource
}
