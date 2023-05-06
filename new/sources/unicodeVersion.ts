// https://www.unicode.org/versions/index.html
// https://www.unicode.org/versions/enumeratedversions.html

export class UnicodeVersion {
	// https://www.unicode.org/versions/index.html#major_minor

	public readonly major: number;
	public readonly minor: number;

	// https://www.unicode.org/versions/index.html#update

	public readonly update: number;

	public static from(major: number, minor: number = 0, update: number = 0): UnicodeVersion {
		return new UnicodeVersion(major, minor, update);
	}

	private constructor(major: number, minor: number = 0, update: number = 0) {
		this.major = major;
		this.minor = minor;

		this.update = update;
	}

	public toString(): string {
		return `${this.major}.${this.minor}.${this.update}`;
	}
}
