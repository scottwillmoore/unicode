export type PartialVersion = {
	major: number;
	minor?: number;
	update?: number;
};

export type Version = Required<PartialVersion>;

export const createVersion = (major: number, minor: number = 0, update: number = 0): Version => {
	return { major, minor, update };
};

export const formatVersion = (version: Version) => {
	return `${version.major}.${version.minor}.${version.update}`;
};

export const fetchNamesList = async (version: Version): any => {
	const url = `https://unicode.org/Public/${formatVersion(version)}/ucd/NamesList.txt`;

	const response = await fetch(namesListUrl);
	const text = await response.text();

	return;
};

const version: Version = createVersion(15);

const namesListUrl = `https://unicode.org/Public/${formatVersion(version)}/ucd/NamesList.txt`;

export const getCharacter = (character: string): any => {};
