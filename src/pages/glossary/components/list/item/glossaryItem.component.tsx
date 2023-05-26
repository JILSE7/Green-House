import { FC } from "react"

interface IProps {
  term: string
}

const GlossaryItem: FC<IProps> = ({ term }) => {
  return (
    <p className="glossary_abc_content_card_terms_item">{term}</p>
  )
}

export default GlossaryItem;