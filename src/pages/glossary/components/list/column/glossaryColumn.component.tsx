import { FC, useId } from "react"
import { TermGlosary } from "../../../../../interfaces"
import GlossaryItem from "../item/glossaryItem.component";

interface IProps {
  data: TermGlosary[][]
  openModal: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: TermGlosary) => void;
  closeModal: () => void;
}

const GlossaryColumns: FC<IProps> = ({ data, openModal, closeModal }) => {
  const reactId = useId();
  return (
    <div className="glossary_abc_content_card_terms">
      {
        data.map((dataGlossary, i) => (
          <div key={reactId + i} className="glossary_abc_content_card_terms_column">
            {
              dataGlossary.map((item) => (<GlossaryItem closeModal={closeModal} openModal={openModal} key={reactId + item.id} item={item} />))
            }
          </div>
        ))
      }
    </div>
  )
}

export default GlossaryColumns;