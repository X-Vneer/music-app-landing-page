import { useEffect, useState } from "react";

const useIntersection = (myRef, threshold = 0) => {
  const [isVisible, setisVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setisVisible(true);
        } else if (!entry.isIntersecting) {
          setisVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(myRef.current);
    };
  }, [myRef, threshold]);
  return { isVisible };
};

export default useIntersection;
