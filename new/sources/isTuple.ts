// prettier-ignore
type BuildTuple<T, TLength extends number, TResult extends unknown[]> =
	TResult["length"] extends TLength
		? TResult
		: BuildTuple<T, TLength, [T, ...TResult]>;

// prettier-ignore
export type Tuple<T, TLength extends number> =
	T extends unknown
		? number extends TLength
			? T[]
			: BuildTuple<T, TLength, []>
		: never;

export function isTuple<T, TLength extends number>(
	array: T[],
	length: TLength
): array is Tuple<T, TLength> {
	return array.length === length;
}
