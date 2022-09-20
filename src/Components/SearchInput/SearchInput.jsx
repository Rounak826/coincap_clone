import React, { useEffect, useRef, useState } from 'react'
import './SearchInput.css'
import { ReactComponent as SearchIcon } from '../../assests/icons/search.svg'
export default function SearchInput() {
    const inputRef = useRef()
    const containerRef = useRef()
    const [active, setActive] = useState(false)
    const toggleActive = ()=>{
        setActive(true)
        inputRef.current.focus()
    }
    const toggleInactive = ()=>{
      setActive(false)

    }
    useEffect(() => {
      const el = containerRef.current
      let x = document.addEventListener('click',(e)=>{
        const outside = !el.contains(e.target);
        //console.log("clicked outside",outside)
        if(outside) toggleInactive()
      })
    
      return () => {
        document.removeEventListener('click',x)
      }
    }, [])
    
  return (
    <div ref={containerRef} className={`input-container border ${active?'active':'inactive'} `}>
        <input ref={inputRef} type="text" />
        <SearchIcon onClick={toggleActive}/>
    </div>
  )
}
