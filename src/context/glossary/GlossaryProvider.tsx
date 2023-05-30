import { FC, ReactNode, useCallback, useEffect, useReducer } from "react";

import { TermGlosaryModel } from "../../models";
import glossaryReducer from "./GlossaryReducer";
import { GlossaryState } from "../../interfaces";
import { GlossaryContext } from "./GlossaryContext";
import { getGlossaryArrayData, getGlossaryData, getGlossaryDataByLetter, getGlossaryDataBySearch } from "../../utils";
import dataJson from '../../data/index.json';

const data: TermGlosaryModel[] = dataJson


const initialState: GlossaryState = {
  glossaryTerms: {},
  glossaryTermsArray: {},
  glossaryByLetter: {},
  glossaryBySearch: {},
}


export const GlossaryProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [state, dispatch] = useReducer(glossaryReducer, initialState);

  const getGlossaryTerms = () => {

    const glossaryTerms = getGlossaryData(data)
    const glossaryTermsArray = getGlossaryArrayData(glossaryTerms)

    dispatch({ type: 'SET_GLOSSARY', payload: { glossaryTerms, glossaryTermsArray } })
  };

  const filterByLetter = useCallback((letter: string) => {
    const data = getGlossaryDataByLetter(letter, state.glossaryTerms);

    if (data) dispatch({ type: 'SET_GLOSSARY_BY_LETTER', payload: data })

  }, [state.glossaryTerms]);


  const filterBySearch = useCallback((search: string) => {
    if (!search) return dispatch({ type: 'REMOVE_GLOSSARY_BY_SEARCH' });

    const dataBySearch = getGlossaryDataBySearch(search, data);
    
    dataBySearch ? dispatch({ type: 'SET_GLOSSARY_BY_SEARCH', payload: dataBySearch }) : dispatch({ type: 'REMOVE_GLOSSARY_BY_SEARCH' })

  }, []);
  



  useEffect(() => { getGlossaryTerms() }, [])

  return (
    <GlossaryContext.Provider value={{ state, filterByLetter, filterBySearch }}>
      {children}
    </GlossaryContext.Provider>
  )

}