import { useState, useRef, useEffect } from 'react';
import './style.css';

const useAnimateDisplay = (offset = 200) => {
  const ref = useRef<any>(null);
  const [showElement, setShowElement] = useState<boolean>(false);

  const handeScrollChange = () => {
    if (showElement) {
      window.removeEventListener('scroll', handeScrollChange);
      return;
    }

    if (!ref.current) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const { top } = bounds;

    if (top - window.innerHeight < -offset) {
      setShowElement(true);
    }
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.classList.add('animatable');
    handeScrollChange();
  }, [ref.current]);

  useEffect(() => {
    if (!showElement || !ref.current) {
      return;
    }

    ref.current.style.animationPlayState = 'running';

  }, [showElement]);

  useEffect(() => {
    window.addEventListener('scroll', handeScrollChange);

    return () => {
      window.removeEventListener('scroll', handeScrollChange);
    };
  }, []);

  return ref;
};

export default useAnimateDisplay;
