import { createContext } from "react";
import { GlossaryState } from "../../interfaces";


interface ContextProps {
  state: GlossaryState,
  filterByLetter: (letter: string) => void
  filterBySearch: (search: string) => void
}


export const GlossaryContext = createContext<ContextProps>({} as ContextProps)