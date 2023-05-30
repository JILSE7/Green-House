import { GlossarySet } from "../models";

export interface GlossaryState {
  glossaryTerms : GlossaryTerms;
  glossaryTermsArray : GlossaryTermsArray;
  glossaryByLetter : GlossaryTermsArray;
  glossaryBySearch : GlossaryTermsArray;
}


export interface GlossaryTerms {
  [x: string] : TermGlosary[]
}

export interface GlossaryTermsArray {
  [x: string] : TermGlosary[][]
}


export interface TermGlosary{
    definition_by : string;
    definition    : string;
    glossary_sets : GlossarySet[];
    id            : string;
    term          : string;
    type          : string;
}