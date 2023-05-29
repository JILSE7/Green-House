import { FC } from "react"

const abcMenu = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 'W', 'X', 'Y', 'Z']

interface IProps {
  letterActive: string,
  handleLetterActive : (letter: string) => void
}

const AbcMenu: FC<IProps> = ({handleLetterActive, letterActive}) => {


  return (
    <div className="glossary_abc_menu">
      {
        abcMenu.map((letter, index) => (<span key={index} onClick={() => handleLetterActive(letter)} className={`glossary_abc_menu_letter ${letterActive === letter && 'glossary_abc_menu_letter_active'}`} > {letter}</span>))
      }
    </div>
  )
}

export default AbcMenu