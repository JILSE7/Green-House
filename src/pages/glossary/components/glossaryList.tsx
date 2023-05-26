import { FC, useContext, useId } from "react";
import { GlossaryContext } from "../../../context/glossary/GlossaryContext";
import { Card, Divider } from "../../../components";


interface IProps {
  letterActive: string,
}

const GlossaryList: FC<IProps> = ({ letterActive }) => {
  const reactId = useId();
  const { state: { glossaryByLetter, glossaryBySearch } } = useContext(GlossaryContext);
  return (
    <div className="glossary_abc_content">
      {
        Object.entries(Object.keys(glossaryBySearch).length > 0 ? glossaryBySearch : glossaryByLetter).map(([letter, colum], i, array) => (
          <div className="w-full" key={reactId + letter}>
            <Card className="glossary_abc_content_card border-none  shadow-none" style={{ width: '100%' }}>
              <div className={`glossary_abc_content_card_letter ${letterActive === letter && 'glossary_abc_content_card_letter_active'}`}>
                <span>{letter}</span>
              </div>
              <div className="glossary_abc_content_card_terms">
                {
                  colum.map((dataGlossary, i) => (
                    <div key={reactId + i} className="glossary_abc_content_card_terms_column">
                      {
                        dataGlossary.map((term) => (<p key={reactId + term.id} className="glossary_abc_content_card_terms_item">{term.term}</p>))
                      }
                    </div>
                  ))
                }
              </div>
            </Card>
            {
              i !== array.length - 1 && <Divider style={{ marginTop: 24, marginBottom: 24 }} />

            }
          </div>
        ))
      }
    </div>
  )
}

export default GlossaryList