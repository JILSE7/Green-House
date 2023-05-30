import { FC, useContext } from "react"
import { GlossaryContext } from "../../../../context/glossary/GlossaryContext"

const abcMenu = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 'W', 'X', 'Y', 'Z']

interface IProps {
  letterActive: string,
  handleLetterActive : (letter: string) => void
}

const AbcMenu: FC<IProps> = ({handleLetterActive, letterActive}) => {

  const {state: {glossaryTermsArray}} = useContext(GlossaryContext)

  return (
    <div className="glossary_abc_menu">
      {
        abcMenu.map((letter, index) => (<span key={index} onClick={() => glossaryTermsArray[letter] && handleLetterActive(letter)} className={`glossary_abc_menu_letter ${glossaryTermsArray[letter] ? '' : 'glossary_abc_menu_letter_disabled'} ${letterActive === letter && 'glossary_abc_menu_letter_active'}`} > {letter}</span>))
      }
    </div>
  )
}

export default AbcMenu