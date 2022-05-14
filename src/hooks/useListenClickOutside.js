import {useEffect} from "react";

const useListenClickOutside = (ref, onClickOutside) => {
	useEffect(() => {
		const handleClickOutside = e => {
			if (ref.current && !ref.current.contains(e.target)) {
				onClickOutside();
			}
		};

		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [ref, onClickOutside]);
};

export default useListenClickOutside;
