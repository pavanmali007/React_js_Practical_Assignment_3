import React from 'react'
import PropTypes from 'prop-types'

function LogoDiv(props) {
  return (
    <>
    <div className="logoDiv">
        <div className="logo">{props.brandChar}</div>
        <div className="logoText">{props.brandText}</div>
    </div>
    </>
    
  )
}

LogoDiv.propTypes = {}

export default LogoDiv
