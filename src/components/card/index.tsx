import { FC } from "react";

interface IProps {
  children?: JSX.Element | JSX.Element[],
  className?: string,
  style?: React.CSSProperties
}


const Card: FC<IProps> = ({ children, className, style }) => {
  return (
    <div className={`card_container ${className}`} style={style}>
      {
        children
      }
    </div>
  )
}

export default Card