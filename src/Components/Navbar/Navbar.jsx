import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assests/logo.svg'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import SearchInput from '../SearchInput/SearchInput'
import { ReactComponent as GearIcon } from '../../assests/icons/gear.svg'
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="group">
          <NavItem><Link>Coins</Link></NavItem>
          <NavItem><Link>Exchanges</Link></NavItem>
          <NavItem><Link>Swap</Link></NavItem>
        </div>
        <NavItem>
          <img src={Logo} alt="logo" />
        </NavItem>
        <div className="group">
        <NavItem><SearchInput/></NavItem>
        <NavItem><button className='transparent'><GearIcon/></button></NavItem>
        <NavItem><PrimaryButton name="Connect Wallet"/></NavItem>
        </div>

        

      </div>
    </nav>
  )
}

function NavItem({ children }) {
  return (
    <div className="item">{children}</div>
  )
}