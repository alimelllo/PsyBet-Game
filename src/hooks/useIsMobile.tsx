import { DESKTOP_WIDTH } from '../../config';
import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    setIsMobile(window.innerWidth < DESKTOP_WIDTH);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
