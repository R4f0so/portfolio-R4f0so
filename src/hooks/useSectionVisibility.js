import { useEffect, useMemo, useState } from "react";

const defaultOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

export default function useSectionVisibility(ref, options) {
  const [isVisible, setIsVisible] = useState(false);

  const observerOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...(options || {}),
    }),
    [options?.root, options?.rootMargin, options?.threshold]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, observerOptions]);

  return isVisible;
}
