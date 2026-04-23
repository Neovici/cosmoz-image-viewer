import { invoke } from '@neovici/cosmoz-utils/function';
import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { useMemo } from '@pionjs/pion';

const empty = [];

export const useSource = (source) => {
	const promise = useMemo(
		() => Promise.resolve(invoke(source)),
		[source],
	);

	const [result, error, state] = usePromise(promise);

	return {
		files: result ?? empty,
		loading: state === 'pending',
		error,
	};
};