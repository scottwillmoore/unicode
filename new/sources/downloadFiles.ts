import fileSystem from "node:fs/promises";

import { UnicodeVersion } from "./unicodeVersion.js";

async function downloadFiles(unicodeVersion: UnicodeVersion, fileNames: string[]): Promise<void> {
	const directoryPath = `./files/${unicodeVersion}`;

	try {
		await fileSystem.access(directoryPath);
		console.log(`Skipped: ${directoryPath}`);
	} catch {
		await fileSystem.mkdir(directoryPath);
		console.log(`Created: ${directoryPath}`);
	}

	await Promise.allSettled(
		fileNames.map(async (fileName) => {
			const filePath = `${directoryPath}/${fileName}`;

			try {
				await fileSystem.access(filePath);
				console.log(`Skipped: ${filePath}`);
			} catch {
				const fileLink = `https://unicode.org/Public/${unicodeVersion}/ucd/${fileName}`;

				const response = await fetch(fileLink);
				const arrayBuffer = await response.arrayBuffer();
				const buffer = Buffer.from(arrayBuffer);

				await fileSystem.writeFile(filePath, buffer);
				console.log(`Created: ${filePath}`);
			}
		})
	);
}

const unicodeVersion = UnicodeVersion.from(15);

const fileNames = [
	"ArabicShaping.txt",
	"BidiBrackets.txt",
	"BidiCharacterTest.txt",
	"BidiMirroring.txt",
	"BidiTest.txt",
	"Blocks.txt",
	"CJKRadicals.txt",
	"CaseFolding.txt",
	"CompositionExclusions.txt",
	"DerivedAge.txt",
	"DerivedCoreProperties.txt",
	"DerivedNormalizationProps.txt",
	"EastAsianWidth.txt",
	"EmojiSources.txt",
	"EquivalentUnifiedIdeograph.txt",
	"HangulSyllableType.txt",
	"Index.txt",
	"IndicPositionalCategory.txt",
	"IndicSyllabicCategory.txt",
	"Jamo.txt",
	"LineBreak.txt",
	"NameAliases.txt",
	"NamedSequences.txt",
	"NamedSequencesProv.txt",
	"NamesList.txt",
	"NormalizationCorrections.txt",
	"NormalizationTest.txt",
	"NushuSources.txt",
	"PropList.txt",
	"PropertyAliases.txt",
	"PropertyValueAliases.txt",
	"ScriptExtensions.txt",
	"Scripts.txt",
	"SpecialCasing.txt",
	"StandardizedVariants.txt",
	"TangutSources.txt",
	"USourceData.txt",
	"UnicodeData.txt",
	"VerticalOrientation.txt",
];

await downloadFiles(unicodeVersion, fileNames);
