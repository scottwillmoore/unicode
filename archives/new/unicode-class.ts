const unicodeOrigin = "";

const versionExpression = /a/;

// https://www.unicode.org/versions/index.html
// https://www.unicode.org/versions/enumeratedversions.html

export type PartialVersionObject = {
	major: number;
	minor?: number;
	update?: number;
};

export type VersionObject = {
	major: number;
	minor: number;
	update: number;
};

export class UnicodeVersion implements VersionObject {
	private static readonly unicodeUrl = `https://unicode.org/`;

	private static readonly versionRegex = /^(?<major>\d+)(?:\.(?<minor>\d+)(?:\.(?<update>\d+))?)?$/;

	// https://www.unicode.org/versions/index.html#major_minor

	public readonly major: number;
	public readonly minor: number;

	// https://www.unicode.org/versions/index.html#update

	public readonly update: number;

	public static fromObject(object: PartialVersionObject): UnicodeVersion {
		return new UnicodeVersion(object.major, object.minor, object.update);
	}

	public static fromJSON(json: unknown): UnicodeVersion {
		throw new Error();
	}

	public static fromString(string: string): UnicodeVersion {
		const match = string.match(this.versionRegex);
		if (match === null) {
			throw new Error(`Failed to parse version: ${string}`);
		}

		const majorString = match.groups!.major!;
		const major = Number.parseInt(majorString);
		if (Number.isNaN(major)) {
			throw new Error(`Failed to parse major version: ${majorString}`);
		}

		const minorString = match.groups!.minor;
		let minor;
		if (minorString !== undefined) {
			minor = Number.parseInt(minorString);
			if (Number.isNaN(minor)) {
				throw new Error(`Failed to parse minor version: ${minorString}`);
			}
		}

		const updateString = match.groups!.update;
		let update;
		if (updateString !== undefined) {
			update = Number.parseInt(updateString);
			if (Number.isNaN(update)) {
				throw new Error(`Failed to parse update version: ${updateString}`);
			}
		}

		return new UnicodeVersion(major, minor, update);
	}

	public static of(major: number, minor?: number, update?: number): UnicodeVersion {
		return new UnicodeVersion(major, minor, update);
	}

	private constructor(major: number, minor: number = 0, update: number = 0) {
		this.major = major;
		this.minor = minor;

		this.update = update;
	}

	public getComponentURL(): URL {
		return new URL(UnicodeVersion.unicodeUrl, `/versions/components-${this}.html`);
	}

	public getSpecificationURL(): URL {
		return new URL(unicodeURL, `/versions/Unicode${this}/index.html`);
	}

	public getDatabaseURL(): URL {
		return new URL(unicodeURL, `/Public/${this}/ucd`);
	}

	public toObject(): VersionObject {
		return structuredClone(this);
	}

	public toJSON(): unknown {
		return this.toString();
	}

	public toString(): string {
		return `${this.major}.${this.minor}.${this.update}`;
	}
}

const version = UnicodeVersion.of(15, 0, 0);

console.log(version);
console.log(`${version}`);
console.log(JSON.stringify(version));

// const specificationUrl = `${unicodeOrigin}/versions/Unicode${latestVersion}/`;
// const componentUrl = `${unicodeOrigin}/versions/components-${latestVersion}.html`;
