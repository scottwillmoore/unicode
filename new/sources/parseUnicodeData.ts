import fileSystem from "node:fs/promises";
import { UnicodeVersion } from "./unicodeVersion.js";
import { isTuple } from "./isTuple.js";

// https://www.unicode.org/reports/tr44/tr44-30.html#Format_Conventions

async function parseUnicodeData(unicodeVersion: UnicodeVersion): Promise<void> {
	const filePath = `./files/${unicodeVersion}/UnicodeData.txt`;

	const file = await fileSystem.open(filePath);

	let i = 0;
	for await (const line of file.readLines()) {
		if (i === 256) break;

		const fields = line.split("#", 1)[0]!.split(";");
		if (!isTuple(fields, 15)) continue;

		const codePoint = Number.parseInt(fields[0], 16);
		if (Number.isNaN(codePoint)) throw new Error();

		const name = fields[1];
		if (name.startsWith("<")) continue;

		const generalCategory = fields[2];
		const canonicalCombiningClass = fields[3];
		const bidiClass = fields[4];
		const decompositionType = fields[5];
		const numericType = fields[6];
		const numericType2 = fields[7];
		const numericType3 = fields[8];
		const bidiMirrored = fields[9];
		const oldName = fields[10];
		const isoComment = fields[11];
		const upperCaseCodePoint = fields[12];
		const lowerCaseCodePoint = fields[13];
		const titleCaseCodePoint = fields[14];

		console.log(codePoint, name, generalCategory);

		i += 1;
	}
}

const unicodeVersion = UnicodeVersion.from(15);

await parseUnicodeData(unicodeVersion);
