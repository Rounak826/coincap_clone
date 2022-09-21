import React from 'react'
import  './PrimaryButton.css'
export default function PrimaryButton({name,...props}) {
  return (
    <button className={'btn_primary'} {...props}>{name}</button>
  )
}
