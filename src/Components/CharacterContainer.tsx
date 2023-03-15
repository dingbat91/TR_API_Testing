import React from "react";

interface ContainerProps {
	data: CharacterData[];
}

export const CharacterContainer: React.FC<ContainerProps> = ({ data }) => {
	return <div className='Container'>CHARCONTAINER</div>;
};
