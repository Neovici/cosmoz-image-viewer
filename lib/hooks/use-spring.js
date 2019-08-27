import { useState, useEffect } from 'haunted';

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
