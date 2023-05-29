import { FC, useId } from "react"
import { TermGlosary } from "../../../../../interfaces"
import GlossaryItem from "../item/glossaryItem.component";

interface IProps {
  data: TermGlosary[][]
  openModal: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, data: TermGlosary) => void;
}

const GlossaryColumns: FC<IProps> = ({ data, openModal }) => {
  const reactId = useId();
  return (
    <div className="glossary_abc_content_card_terms">
      {
        data.map((dataGlossary, i) => (
          <div key={reactId + i} className="glossary_abc_content_card_terms_column">
            {
              dataGlossary.map((item) => (<GlossaryItem openModal={openModal} key={reactId + item.id} item={item} />))
            }
          </div>
        ))
      }
    </div>
  )
}

export default GlossaryColumns;