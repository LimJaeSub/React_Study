import React from 'react'

const Buttons = ({text,type,onClick}) => {
  return (
    <button className={["buttons",`buttons_${type}`].join(" ")} onClick={onClick}>
        {text}
    </button>
  )
}

Buttons.defaultProps={
    type:"default",
}

export default Buttons