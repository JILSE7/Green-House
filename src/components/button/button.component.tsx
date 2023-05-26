import { FC } from "react"

interface Iprops {
  title   : string,
  onClick? : () => void,
}

const Button: FC<Iprops> = ({ title, onClick }) => {
  return (
    <button className="blue_button" onClick={onClick}>
      {title}
    </button>
  )
}

export default Button