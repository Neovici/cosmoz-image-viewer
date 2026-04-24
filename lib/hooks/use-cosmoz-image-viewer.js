import { download, downloadUrl } from '../pdf';
import { hasWindow } from '../popout';
import { print } from '../print';
import { useDetached } from './use-detached';
import { useFileSelection } from './use-file-selection';
import { useFullscreen } from './use-fullscreen';
import { useImageNavigation } from './use-image-navigation';
import { useSlide } from './use-slide';
import { useSwipe } from './use-swipe';
import { useZoom } from './use-zoom';

import { useImperativeApi } from '@neovici/cosmoz-utils/hooks/use-imperative-api';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect, useMemo } from '@pionjs/pion';

const useCosmozImageViewer = (host) => {
	const {
		showZoom,
		showPageNumber,
		showNav,
		showDetach,
		showFullscreen,
		showClose,
		title,
		loop,
		detachedShowZoom,
	} = host;

	const {
		files,
		loading,
		error,
		setFileIndex,
		safeFileIndex,
		selectedFile,
		value,
		onSelect,
		directionRef,
	} = useFileSelection(host);

	const {
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
		downloadFileName,
	} = useImageNavigation({
		files,
		safeFileIndex,
		loop,
		setFileIndex,
		directionRef,
	});

	const { isZoomed, toggleZoom } = useZoom();

	useSwipe(host, {
		enabled: !isZoomed,
		onSwipeLeft: nextImage,
		onSwipeRight: previousImage,
	});

	const slide = useSlide({
		image,
		showZoom,
		isZoomed,
		directionRef,
		index,
	});

	const { isFullscreen, openFullscreen, closeFullscreen } = useFullscreen();

	const { detached, detach, syncDetachedState } = useDetached({
		files,
		safeFileIndex,
		imageIndex: index,
		title,
		loop,
		detachedShowZoom,
		setImageIndex,
		setFileIndex,
	});

	const syncState = useCallback(() => {
		if (!hasWindow()) return;
		detach();
	}, [detach]);

	useNotifyProperty('detached', detached, [detached]);

	useEffect(() => {
		host.toggleAttribute('hidden', detached);
	}, [detached]);

	useImperativeApi({ syncState }, [syncState]);

	const hasNav = files.length > 1 || images.length >= 2;

	const onDownloadPdf = useMemo(() => {
		return selectedFile?.pdf
			? () =>
					downloadUrl(
						selectedFile.pdf,
						downloadFileName,
						selectedFile.pdfOptions,
					)
			: () => download(images, downloadFileName, true);
	}, [selectedFile, downloadFileName, images]);

	const onPrintPdf = useCallback(() => print({ images }), [images]);

	return {
		host,
		isZoomed,
		toggleZoom,
		currentSlide: slide,
		nextImage,
		previousImage,
		first,
		last,
		total: images.length,
		hasNav,
		currentImageIndex: index,
		selectedImageNumber: index + 1,
		onDownloadPdf,
		isFullscreen,
		openFullscreen,
		closeFullscreen,
		onPrintPdf,
		detached,
		detach,
		syncDetachedState,
		setFileIndex,
		setImageIndex,
		loading: loading || contentLoading,
		error,
		contentError,
		files,
		selectedFile,
		selectedIndex: safeFileIndex,
		value,
		onSelect,
		images,
		showPageNumber,
		showNav,
		showZoom,
		showDetach,
		showFullscreen,
		showClose,
	};
};

export { useCosmozImageViewer };
