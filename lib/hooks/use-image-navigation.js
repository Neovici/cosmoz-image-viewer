import { slideInLeft, slideInRight } from '@neovici/cosmoz-slider/animations';
import { useCallback, useEffect, useProperty, useRef } from '@pionjs/pion';
import { findFileIndex } from '../find-file-index';
import { clamp } from '../utils';
import { useContent } from './use-content';

export const useImageNavigation = ({
	files,
	safeFileIndex,
	loop,
	setFileIndex,
	directionRef,
}) => {
	const [imageIndex, setImageIndex] = useProperty('currentImageIndex', 0);

	const selectedFile = files[safeFileIndex];

	const {
		images,
		loading: contentLoading,
		error: contentError,
	} = useContent(selectedFile);

	const index =
		images.length > 0 ? clamp(imageIndex ?? 0, 0, images.length - 1) : 0;

	const image = images[index];

	const first = !loop && safeFileIndex === 0 && index <= 0;

	const last =
		!loop &&
		safeFileIndex === files.length - 1 &&
		index >= images.length - 1;

	const gotoLastRef = useRef(false);

	const nextImage = useCallback(() => {
		directionRef.current = slideInRight;
		if (index < images.length - 1) {
			return setImageIndex(index + 1);
		}
		const nextIdx = findFileIndex(files, safeFileIndex, 1, loop);
		if (nextIdx != null) {
			setFileIndex(nextIdx);
			setImageIndex(0);
		}
	}, [index, images.length, files, safeFileIndex, loop]);

	const previousImage = useCallback(() => {
		directionRef.current = slideInLeft;
		if (index > 0) {
			return setImageIndex(index - 1);
		}
		const prevIdx = findFileIndex(files, safeFileIndex, -1, loop);
		if (prevIdx != null) {
			gotoLastRef.current = true;
			setFileIndex(prevIdx);
		}
	}, [index, files, safeFileIndex, loop]);

	useEffect(() => {
		if (images.length === 0) return;
		if (gotoLastRef.current) {
			gotoLastRef.current = false;
			setImageIndex(images.length - 1);
			return;
		}
		const current = imageIndex ?? 0;
		if (current >= images.length) {
			setImageIndex(clamp(current, 0, images.length - 1));
		}
	}, [images]);

	return {
		imageIndex,
		setImageIndex,
		nextImage,
		previousImage,
		first,
		last,
		index,
		image,
		images,
		contentLoading,
		contentError,
		downloadFileName: selectedFile?.downloadFileName ?? 'archive',
	};
};