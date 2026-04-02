import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { useMemo } from '@pionjs/pion';

const empty = [];

/**
 * Hook to resolve the `source` property into a list of attachments.
 *
 * @param {Attachment[] | (() => PromiseLike<Attachment[]>) | undefined} source
 * @returns {{ attachments: Attachment[], loading: boolean, error: unknown }}
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
			attachments: source ?? empty,
			loading: false,
			error: undefined,
		};
	}

	return {
		attachments: result ?? empty,
		loading: state === 'pending',
		error,
	};
};
