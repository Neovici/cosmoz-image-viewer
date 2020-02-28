import {
	useState, useEffect
} from 'haunted';

/**
 * Returns a value a bit closer to the target value after each animation frame.
 *
 * @param  {Number} target            the target value
 * @param  {Number} [stiffness=0.08]  the fraction to approach the target value on each frame
 * @param  {Number} [precision=0.001] how close is close enough?
 * @return {Number}                   the animated value
 */
export const useSpring = (target, stiffness = 0.08, precision = 0.001) => {
	const [value, setValue] = useState(null);

	useEffect(() => {
		if (value == null) {
			setValue(target);
			return;
		}

		if (stiffness >= 1) {
			setValue(target);
			return;
		}

		const lastValue = value;
		window.requestAnimationFrame(() => {
			const delta = target - lastValue;
			setValue(Math.abs(delta) < precision ? target : value + delta * stiffness);
		});
	}, [value, setValue, target, stiffness, precision]);

	return value;
};
