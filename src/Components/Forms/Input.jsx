import React from 'react'
import Styles from './Input.module.css'


 const Input = ({label, type, name}) => {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label} >{label}</label>
      <input id={name} name={name} className={Styles.input} type={type} />
      <p className={Styles.error}>Error</p>
    </div>
  )
}

export default Input