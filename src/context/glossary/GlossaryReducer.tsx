import { GlossaryActions, GlossaryState } from "../../interfaces";

const initialState: GlossaryState = {
  glossaryTerms: {},
  glossaryTermsArray: {},
  glossaryByLetter: {},
  glossaryBySearch: {},
}

const glossaryReducer = (state: GlossaryState = initialState, action: GlossaryActions): GlossaryState => {

  switch (action.type) {
    case 'SET_GLOSSARY': {
      return {
        ...state,
        glossaryTerms: action.payload.glossaryTerms,
        glossaryTermsArray: action.payload.glossaryTermsArray
        
      }
    }

    case 'SET_GLOSSARY_BY_LETTER': {
      return {
        ...state,
        glossaryByLetter: action.payload
      }
    }

    case 'SET_GLOSSARY_BY_SEARCH': {
      return {
        ...state,
        glossaryBySearch: action.payload
      }
    }

    case 'REMOVE_GLOSSARY_BY_SEARCH': {
      return {
        ...state,
        glossaryBySearch: initialState.glossaryBySearch
      }
    }

    default:
      return state;
  }
};

export default glossaryReducer;

