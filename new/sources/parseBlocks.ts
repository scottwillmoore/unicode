import { open } from "fs/promises";

type Block = {
	start: number;
	end: number;
	name: string;
};

async function parseBlocks(): Promise<Block[]> {
	const blocks: Block[] = [];

	const filePath = `./files/15.0.0/Blocks.txt`;
	const file = await open(filePath);

	for await (const line of file.readLines()) {
		const rawFields = line.split("#", 1)[0]!.split(";");
		if (rawFields.length < 2) continue;

		const fields = rawFields.map((rawField) => rawField.trim());

		const range = fields[0]!;
		const [start, end] = range.split("..").map((codePoint) => Number.parseInt(codePoint, 16));
		if (start === undefined || end === undefined) throw new Error();

		const name = fields[1]!;

		blocks.push({ start, end, name });
	}

	return blocks;
}

const blocks = await parseBlocks();
blocks.forEach(({ start, end, name }) => console.log(start.toString(16), end.toString(16), name));
