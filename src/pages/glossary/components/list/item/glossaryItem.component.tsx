import { FC } from "react"
import { TermGlosary } from "../../../../../interfaces";

export interface IProps {
  openModal: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>, data: TermGlosary) => void;
  item: TermGlosary
}

const GlossaryItem: FC<IProps> = ({ item, openModal }) => {
  return (
    <p onClick={(e) => openModal(e, item)} className="glossary_abc_content_card_terms_item cursor-pointer">{item.term}</p>
  )
}

export default GlossaryItem;