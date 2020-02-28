import { useState, useRef, useEffect } from 'react';
import './style.css';

const useScrollDisplay = (offset = 200) => {
  const ref = useRef<any>(null);
  const [showElement, setShowElement] = useState<boolean>(false);
  const [showInitial, setShowInitial] = useState<boolean>(false);

  const handeScrollChange = () => {
    if (showElement) {
      window.removeEventListener('scroll', handeScrollChange);
      return;
    }

    calculatePosition();
  };

  const calculatePosition = (options?: { initial: boolean }) => {
    if (!ref.current) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const { top } = bounds;

    if (top - window.innerHeight < -offset) {
      setShowElement(true);
    }

    if (options?.initial) {
      setShowInitial(true);
    }
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    calculatePosition({ initial: true });
  }, [ref.current]);

  useEffect(() => {
    if (!showInitial) {
      return;
    }

    if (!showElement) {
      ref.current.classList.add('animatable');
    }
  }, [showInitial]);

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

export default useScrollDisplay;
