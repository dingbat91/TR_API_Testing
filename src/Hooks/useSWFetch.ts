import React from "react";

export const useSWFetch = <T>(
	url: string,
	data: React.Dispatch<React.SetStateAction<T[]>>,
	flag: React.Dispatch<React.SetStateAction<Boolean>>
) => {
	React.useEffect(() => {
		const swfetch = async () => {
			flag(true);
			const response = await fetch(url);
			const rjson = await response.json();
			const rdata = rjson.results as T[];
			//set data
			data(rdata);
			flag(false);
		};
		swfetch();
	}, [url]);
};
