import { slideInRight } from '@neovici/cosmoz-slider/animations';
import { useCallback, useEffect, useMemo, useProperty, useRef } from '@pionjs/pion';
import { toSource } from '../to-source';
import { clamp } from '../utils';
import { useSource } from './use-source';

const empty = [];

export const useFileSelection = (host) => {
	const source = useMemo(
		() =>
			toSource({
				source: host.source,
				images: host.images,
				pdf: host.pdf,
				pdfOptions: host.pdfOptions,
			}),
		[host.source, host.images, host.pdf, host.pdfOptions],
	);

	const { files, loading, error } = useSource(source);

	const [fileIndex, setFileIndex] = useProperty('currentFileIndex', 0);

	const safeFileIndex =
		files.length > 0
			? clamp(fileIndex ?? 0, 0, files.length - 1)
			: 0;

	const selectedFile = files[safeFileIndex];

	const value = selectedFile ? [selectedFile] : empty;

	const directionRef = useRef(slideInRight);

	const onSelect = useCallback(
		(e) => {
			const sel = e.detail?.[0];
			const idx = files.indexOf(sel);
			if (idx >= 0) {
				directionRef.current = slideInRight;
				setFileIndex(idx);
			}
		},
		[files],
	);

	useEffect(() => {
		const current = fileIndex ?? 0;
		if (files.length > 0 && current >= files.length) {
			setFileIndex(0);
		}
	}, [files]);

	return {
		files,
		loading,
		error,
		fileIndex,
		setFileIndex,
		safeFileIndex,
		selectedFile,
		value,
		onSelect,
		directionRef,
	};
};