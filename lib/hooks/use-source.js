import { usePromise } from '@neovici/cosmoz-utils/hooks/use-promise';
import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';

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

/**
 * Hook to track the currently selected attachment from a list.
 * Auto-selects the first attachment when the list changes.
 * Returns `value` as an array suitable for cosmoz-autocomplete binding,
 * and `onSelect` as a handler for cosmoz-autocomplete's @value event.
 *
 * @param {Attachment[]} attachments
 * @returns {{ selected: Attachment | undefined, value: Attachment[], onSelect: (e: CustomEvent) => void }}
 */
export const useSelectedAttachment = (attachments) => {
	const [selected, setSelected] = useState(undefined);

	// Auto-select first attachment when attachments change
	useEffect(() => {
		setSelected(attachments[0]);
	}, [attachments]);

	const onSelect = useCallback(
		(e) => {
			const sel = e.detail?.[0];
			if (sel && attachments.includes(sel)) {
				setSelected(sel);
			}
		},
		[attachments],
	);

	return {
		selected,
		value: selected ? [selected] : empty,
		onSelect,
	};
};
