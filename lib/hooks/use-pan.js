import {
	useState, useEffect, useMemo
} from 'haunted';
import { getBounded } from '../utils';
import {
	useMousePan, DRAGGING
} from './use-mouse-pan';
import {
	useTouchPan, DRAGGING as TOUCH_DRAGGING
} from './use-touch-pan';

/**
 * Tracks mouse and touch movements and stores the panned distance relative to [0, 0].
 * @param  {{x: Number[], y: Number[]}} bounds pan boundaries
 * @return {Array} [panning: boolean, panX: number, panY: number, start: function, startTouch: function]
 */
export const usePan = (bounds = {
	x: [-100, 100],
	y: [-100, 100]
}) => {
	const [panX, setPanX] = useState(0),
		[panY, setPanY] = useState(0),
		[status, deltaX, deltaY, timestamp, start] = useMousePan(),
		[touchStatus, touchDeltaX, touchDeltaY, timestamp2, startTouch] = useTouchPan();

	useMemo(() => setPanX(panX + deltaX), [timestamp]);
	useMemo(() => setPanY(panY + deltaY), [timestamp]);

	useMemo(() => setPanX(panX + touchDeltaX), [timestamp2]);
	useMemo(() => setPanY(panY + touchDeltaY), [timestamp2]);

	const panning = status === DRAGGING || touchStatus === TOUCH_DRAGGING;

	// when the user stops pinching, apply the bounds
	useEffect(() => {
		if (panning) {
			return;
		}

		setPanX(getBounded(panX, bounds.x[0], bounds.x[1]));
		setPanY(getBounded(panY, bounds.y[0], bounds.y[1]));
	}, [panning, setPanX, setPanY, bounds]);

	return [panning, panX, panY, start, startTouch];
};
