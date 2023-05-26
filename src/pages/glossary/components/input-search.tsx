import { Input } from "../../../components"
import { ReactComponent as SearchIcon } from '../../../assets/svg/search_icon.svg'
import { FC } from "react"

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch: FC<IProps> = ({ onChange }) => {

  return (
    <div className="hero_card_main_container_input_search flex items-center">
      <SearchIcon className="mr-3" />
      <Input onChange={onChange} className="hero_card_main_input_search" placeholder="Search Words by name or keyword..." />
    </div>
  )
}

export default InputSearch;