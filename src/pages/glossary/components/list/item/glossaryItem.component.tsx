import { FC, memo, useState } from "react"
import { TermGlosary } from "../../../../../interfaces";

export interface IProps {
  openModal: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: TermGlosary) => void;
  item: TermGlosary;
  closeModal: () => void;
}

const GlossaryItem: FC<IProps> = memo(({ item, openModal, closeModal }) => {

  return (
    <>
      <p
        className="glossary_abc_content_card_terms_item"><span className="cursor-pointer" onMouseEnter={(e) => openModal(e, item)}>{item.term}</span>
      </p>
    </>
  )
})

export default GlossaryItem;