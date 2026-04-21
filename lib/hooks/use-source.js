import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { useMemo } from '@pionjs/pion';

const empty = [];

/**
 * Hook to resolve the `source` property into a list of files.
 *
 * @param {File[] | (() => PromiseLike<File[]>) | undefined} source
 * @returns {{ files: File[], loading: boolean, error: unknown }}
 */
export const useSource = (source) => {
	const promise = useMemo(
		() =>
			typeof source === 'function'
				? Promise.resolve(source())
				: undefined,
		[source],
	);

	const [result, error, state] = usePromise(promise);

	if (typeof source !== 'function') {
		return {
			files: source ?? empty,
			loading: false,
			error: undefined,
		};
	}

	return {
		files: result ?? empty,
		loading: state === 'pending',
		error,
	};
};