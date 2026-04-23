import { useCallback, useState } from '@pionjs/pion';

export const useZoom = () => {
	const [isZoomed, setIsZoomed] = useState(false);

	const toggleZoom = useCallback(() => {
		setIsZoomed((z) => !z);
		return isZoomed ? 1 : 1.5;
	}, [isZoomed]);

	return { isZoomed, toggleZoom };
};