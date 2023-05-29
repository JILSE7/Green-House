import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GlossaryContext } from "../context/glossary/GlossaryContext";



export const useLetter = () => {
  const [letterActive, setLetterActive] = useState<string>('A');
  const { filterByLetter } = useContext(GlossaryContext);
  const isFirstMounted = useRef<boolean>(true);

  const handleLetterActive = useCallback((letter: string) => {
    if (letterActive === letter) return
    setLetterActive(letter)
  }, [letterActive]);



  useEffect(() => {
    if (isFirstMounted.current) {
      isFirstMounted.current = false;
      return;
    }

    filterByLetter(letterActive);

  }, [letterActive, filterByLetter])

  return {
    letterActive,
    handleLetterActive,
  }
}