import {useEffect, useRef, useState} from "react";

const useIntersectionObserver = (options) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	
	useEffect(() => {
		const io = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsVisible(entry.isIntersecting);
		}, options);
		
		if (ref.current) io.observe(ref.current);
		return () => {
			if (io) io.disconnect();
		}
	}, [options])
	
	return [ref, isVisible];
};

export default useIntersectionObserver;