import React from 'react'

const LogoComponent = ({style, imageUrl, outStyle}) => {
  return (
    <div style={outStyle}>
        <img src={imageUrl} alt='logo' style={style} />
    </div>
  )
}

export default LogoComponent