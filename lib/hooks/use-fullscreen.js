import { useState } from '@pionjs/pion';

export const useFullscreen = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	return {
		isFullscreen,
		openFullscreen: () => setIsFullscreen(true),
		closeFullscreen: () => setIsFullscreen(false),
	};
};