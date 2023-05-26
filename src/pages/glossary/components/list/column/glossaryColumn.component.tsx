import { FC, useId } from "react"
import { TermGlosary } from "../../../../../interfaces"
import GlossaryItem from "../item/glossaryItem.component";

interface IProps {
  data: TermGlosary[][]
}

const GlossaryColumns: FC<IProps> = ({ data }) => {
  const reactId = useId();
  return (
    <div className="glossary_abc_content_card_terms">
      {
        data.map((dataGlossary, i) => (
          <div key={reactId + i} className="glossary_abc_content_card_terms_column">
            {
              dataGlossary.map(({ term }) => (<GlossaryItem term={term} />))
            }
          </div>
        ))
      }
    </div>
  )
}

export default GlossaryColumns;