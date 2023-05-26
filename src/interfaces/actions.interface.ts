import { GlossaryTerms, GlossaryTermsArray } from ".";


export type GlossaryActions = | {type: 'SET_GLOSSARY', payload: {glossaryTerms: GlossaryTerms, glossaryTermsArray: GlossaryTermsArray}}
                              | {type: 'SET_GLOSSARY_BY_LETTER', payload: GlossaryTermsArray}
                              | {type: 'SET_GLOSSARY_BY_SEARCH', payload: GlossaryTermsArray}
                              | {type: 'REMOVE_GLOSSARY_BY_SEARCH'}