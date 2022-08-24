import { useEffect,useState} from "react";

const useScroll = () => {
    
    const [scrollY, setScrollY] = useState<Number | String>("pending");


      const handleScroll = () => {
        if (window !== undefined) {
          const windowHeight = window.scrollY;
          setScrollY(windowHeight);
        }
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const setY = (x = 0,y = 0) => {
        window.scrollTo(x,y)
      }

      return { scrollY,setY }
  }

  export default useScroll;