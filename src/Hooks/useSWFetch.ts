import React from "react";

export const useSWFetch = <T>(
	url: string,
	data: React.Dispatch<React.SetStateAction<T[]>>
) => {
	React.useEffect(() => {
		const swfetch = async () => {
			const response = await fetch(url);
			const rjson = await response.json();
			const rdata = rjson.results as T[];
			//set data
			data(rdata);
		};
		swfetch();
	}, [url]);
};
