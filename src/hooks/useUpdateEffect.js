import {useEffect, useRef} from "react";

const useUpdateEffect = (callback, deps) => {
	const isInitialMount = useRef(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			callback();
		}
	}, deps);
};

export default useUpdateEffect;
