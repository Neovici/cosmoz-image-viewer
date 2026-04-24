import { slideInRight } from '@neovici/cosmoz-slider/animations';
import { invoke } from '@neovici/cosmoz-utils/function';
import { memoize } from '@neovici/cosmoz-utils/memoize';
import { useMemo } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { renderSlide } from '../render';

export const useSlide = ({
	image,
	showZoom,
	isZoomed,
	directionRef,
	index,
}) => {
	const _invoke = useMemo(
		() => memoize((img) => Promise.resolve(invoke(img))),
		[],
	);

	return useMemo(() => {
		if (image == null) {
			return {
				id: Math.random(),
				content: nothing,
				animation: slideInRight,
			};
		}
		return {
			id: image,
			render: () =>
				renderSlide({
					src$: _invoke(image),
					showZoom,
					isZoomed,
					image,
					index,
				}),
			animation: directionRef.current,
		};
	}, [image, showZoom, isZoomed, index]);
};
