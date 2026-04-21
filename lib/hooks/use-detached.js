import { useCallback, useState } from '@pionjs/pion';
import { popout } from '../popout';

export const useDetached = ({
	files,
	safeFileIndex,
	imageIndex,
	title,
	loop,
	detachedShowZoom,
	setImageIndex,
	setFileIndex,
}) => {
	const [detached, setDetached] = useState(false);

	const syncImageIndex = useCallback(
		(ev) => setImageIndex(ev.detail.value),
		[setImageIndex],
	);

	const syncFileIndex = useCallback(
		(ev) => setFileIndex(ev.detail.value),
		[setFileIndex],
	);

	const detach = useCallback(
		() =>
			popout({
				source: files,
				fileIndex: safeFileIndex,
				index: imageIndex,
				syncImageIndex,
				syncFileIndex,
				title,
				loop,
				detachedShowZoom,
				onDetach: () => setDetached(true),
				onClose: () => setDetached(false),
			}),
		[
			files,
			safeFileIndex,
			imageIndex,
			title,
			loop,
			detachedShowZoom,
		],
	);

	return {
		detached,
		detach,
		syncDetachedState: (ev) => setDetached(ev.detail.value),
	};
};