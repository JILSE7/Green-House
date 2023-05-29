import { termAdapter } from "../adapters/term.adapter";
import { GlossaryTerms, GlossaryTermsArray } from "../interfaces";
import { TermGlosaryModel } from "../models/termGlosary.model";



export const getGlossaryData = (dataFromDB: TermGlosaryModel[]): GlossaryTerms => {
  const data: GlossaryTerms = {}
  dataFromDB.forEach((item) => {
    const index = item.term[0]
    const term = termAdapter(item);
    data[index] ? (data[index].push(term)) : (data[index] = [term])
  });

  return data;
};


export const getGlossaryArrayData = (data: GlossaryTerms): GlossaryTermsArray => {
  const auxData: GlossaryTermsArray = {}
  Object.entries(data).forEach(([key, value]) => {
    if (value.length < 4) {
      auxData[key] = data[key].map((item) => [item])
      return;
    }

    const columns = value.length / 4 <= 4 ? 4 : 5;

    for (let i = 0; i < columns; i++) {
      const sub = value.slice(i * columns, (i + 1) * columns);
      if (sub.length === 0) return;
      auxData[key] ? (auxData[key].push(sub)) : (auxData[key] = [sub]);
    }
  });

  return auxData;
};


export const getGlossaryDataByLetter = (letter: string, data: GlossaryTerms): GlossaryTermsArray | undefined => {
  const keys = Object.keys(data);
  const index = keys.indexOf(letter.toUpperCase());

  if (index !== -1) {
    const auxData: GlossaryTerms = {};
    const keyIndexes = keys.slice(index);
    keyIndexes.forEach((key) => auxData[key] = data[key]);
    const auxArray = getGlossaryArrayData(auxData);
    return auxArray;
  }
};


export const getGlossaryDataBySearch = (search: string, data: TermGlosaryModel[]): GlossaryTermsArray | undefined => {
  console.log("debo buscar por esta entrada");

  // const dataFiltered = data.filter((item) => item.term.toLocaleLowerCase().includes(search) || item.definition.toLocaleLowerCase().includes(search));
  const dataFiltered = data.filter((item) => item.term.toLocaleLowerCase().includes(search));
  if (dataFiltered.length === 0) null;

  const dataFilteredGlossary = getGlossaryData(dataFiltered);

  const dataFilteredGlossaryArray = getGlossaryArrayData(dataFilteredGlossary);
  
  return dataFilteredGlossaryArray;
}
