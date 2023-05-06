import { open } from "node:fs/promises";

type PropertyAlias = {
	abbreviation: string;
	name: string;
	otherNames: string[];
};

async function parsePropertyAliases(): Promise<PropertyAlias[]> {
	const propertyAliases: PropertyAlias[] = [];

	const filePath = `./files/15.0.0/PropertyAliases.txt`;
	const file = await open(filePath);

	for await (const line of file.readLines()) {
		const rawFields = line.split("#", 1)[0]!.split(";");
		if (rawFields.length < 2) continue;

		const fields = rawFields.map((rawField) => rawField.trim());

		const abbreviation = fields[0]!;
		const name = fields[1]!;
		const otherNames = fields.slice(2);

		propertyAliases.push({ abbreviation, name, otherNames });
	}

	return propertyAliases;
}

type PropertyValueAlias = {
	propertyAbbreviation: string;
	abbreviation: string;
	name: string;
	otherNames: string[];
};

async function parsePropertyValueAliases(): Promise<PropertyValueAlias[]> {
	const propertyValueAliases: PropertyValueAlias[] = [];

	const filePath = `./files/15.0.0/PropertyValueAliases.txt`;
	const file = await open(filePath);

	for await (const line of file.readLines()) {
		const rawFields = line.split("#", 1)[0]!.split(";");
		if (rawFields.length < 3) continue;

		const fields = rawFields.map((rawField) => rawField.trim());

		const propertyAbbreviation = fields[0]!;
		// TODO: Parse Canonical_Combining_Class.
		if (propertyAbbreviation === "ccc") continue;

		const abbreviation = fields[1]!;
		const name = fields[2]!;
		const otherNames = fields.slice(3);

		propertyValueAliases.push({ propertyAbbreviation, abbreviation, name, otherNames });
	}

	return propertyValueAliases;
}

const propertyAliases = await parsePropertyAliases();
propertyAliases.forEach(({ abbreviation, name, otherNames }) =>
	console.log(abbreviation, name, otherNames)
);

const propertyValueAliases = await parsePropertyValueAliases();
propertyValueAliases.forEach(({ propertyAbbreviation, abbreviation, name, otherNames }) =>
	console.log(propertyAbbreviation, abbreviation, name, otherNames)
);
