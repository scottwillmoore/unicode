export type PartialVersion = {
	major: number;
	minor?: number;
	update?: number;
};

export type Version = Required<PartialVersion>;

export const from = (major: number, minor: number = 0, update: number = 0): Version => {};

export const fromPartialVersion = (partialVersion: PartialVersion): Version => {};

export const fromString = (string: string): Version => {};

export const fromUnknown = (unknown: unknown): Version => {};

export const getComponentUrl = (version: Version): string => {};

export const getDatabaseUrl = (version: Version): string => {};

export const getSpecificationUrl = (version: Version): string => {};

export const toString = (version: Version): string => {};
