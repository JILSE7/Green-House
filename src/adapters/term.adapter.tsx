import { TermGlosary } from "../interfaces";
import { TermGlosaryModel } from "../models";


export const termAdapter = (term: TermGlosaryModel): TermGlosary => {
  return  {
    definition_by: term.definition_by,
    definition: term.definition,
    glossary_sets: term.glossary_sets,
    id: term.id,
    term: term.term,
    type: term.type,
  }
}