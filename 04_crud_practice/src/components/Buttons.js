import React from 'react'

const Buttons = ({text,type,onClick}) => {
  const btntype = ['positive','negative'].includes(type)?type:'default';
  // @ 이 배열에 type값이 들어가있으면 type 반환 없으면 default 반환
  return (
    <button className={["buttons",`buttons_${btntype}`].join(" ")} onClick={onClick}>
        {text}
    </button>
  )
}

Buttons.defaultProps={
    type:"default",
}

export default Buttons