import { useState, useEffect, useMemo } from 'haunted';
import { getBounded } from './utils';
import { useMousePan, DRAGGING } from './use-mouse-pan';
import { useTouchPan, DRAGGING as TOUCH_DRAGGING } from './use-touch-pan';

export const usePan = (bounds = { x: [-100, 100], y: [-100, 100]}) => {
	const [panX, setPanX] = useState(0);
	const [panY, setPanY] = useState(0);

	const [status, deltaX, deltaY, timestamp, start] = useMousePan();
	const [touchStatus, touchDeltaX, touchDeltaY, timestamp2, startTouch] = useTouchPan();

	useMemo(() => setPanX(panX + deltaX), [timestamp]);
	useMemo(() => setPanY(panY + deltaY), [timestamp]);

	useMemo(() => setPanX(panX + touchDeltaX), [timestamp2]);
	useMemo(() => setPanY(panY + touchDeltaY), [timestamp2]);

	const panning = status === DRAGGING || touchStatus === TOUCH_DRAGGING;

	useEffect(() => {
		if (panning) {
			return;
		}

		setPanX(getBounded(panX, bounds.x[0], bounds.x[1]));
		setPanY(getBounded(panY, bounds.y[0], bounds.y[1]));
	}, [panning, setPanX, setPanY, bounds]);

	return [panning, panX, panY, start, startTouch];
};
