import React from 'react'
import primaryBtnStyle from './PrimaryButton.module.css'
export default function PrimaryButton({name,...props}) {
  return (
    <button className={primaryBtnStyle.btn_primary} {...props}>{name}</button>
  )
}
