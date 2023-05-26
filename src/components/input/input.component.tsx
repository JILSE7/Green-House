import { FC, HTMLInputTypeAttribute } from "react"

interface IProps {
  className?: string,
  style?: React.CSSProperties
  placeholder?: string,
  type?: HTMLInputTypeAttribute,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<IProps> = ({type, className, style, placeholder, onChange}) => {
  return (
    <input onChange={onChange} className={`${className}`} style={style} type={type} placeholder={placeholder} />
  )
}

export default Input