import { useEffect, useRef } from 'haunted';

export const useResize = (fn, ref) => {
	if (!('ResizeObserver' in window)) {
		return;
	}
	const fnRef = useRef();

	useEffect(() => {
		fnRef.current = fn;
	}, [fn]);

	useEffect(() => {
		const observer = new ResizeObserver(entries => {
			const [{contentRect}] = entries;
			if (!fnRef.current) {
				return;
			}
			fnRef.current(contentRect);
		});

		if (ref.current) {
			observer.observe(ref.current);
		}

		if (fnRef.current && ref.current) {
			fnRef.current(ref.current.getBoundingClientRect());
		}

		return () => {
			observer.unobserve(ref.current);
		};
	}, [ref.current]);
};
