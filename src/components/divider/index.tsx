import { FC } from "react"

interface IProps {
  className?: string,
  style?: React.CSSProperties
}

const Divider: FC<IProps> = ({ className, style }) => {
  return (
    <div className={`divider ${className}`} style={style} />
  )
}

export default Divider