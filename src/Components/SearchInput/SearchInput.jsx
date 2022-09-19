import React, { useRef, useState } from 'react'
import './SearchInput.css'
import { ReactComponent as SearchIcon } from '../../assests/icons/search.svg'
export default function SearchInput() {
    const inputRef = useRef()
    const [active, setActive] = useState(false)
    const toggleActive = ()=>{
        setActive(true)
        inputRef.current.focus()
    }
  return (
    <div className={`input-container border ${active?'active':'inactive'} `}>
        <input ref={inputRef} type="text" />
        <SearchIcon onClick={toggleActive}/>
    </div>
  )
}
