import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { ReactComponent as FacebookIcon } from '../../assests/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assests/icons/twitter.svg'
import GooglePlay from '../../assests/GooglePlay'
import AppleStore from '../../assests/AppleStore'

export default function Footer() {
    return (
        <footer className='grad_section'>
            <div className="container">
                <div className="col">
                    <p>COINCAP.IO</p>
                    <Link to='/methodology'>Methodology</Link>
                    <Link to='/support'>Support</Link>
                    <Link to='/our-api'>Our API</Link>
                    <Link to='/rate-comparison'>Rate Comparision</Link>
                    <Link to='/careers'>Careers</Link>
                </div>
                <div className="col">
                    <p>LEGALS</p>
                    <Link to='/methodology'>Terms of Service</Link>
                    <Link to='/support'>Privacy</Link>
                    <br></br>
                    <p>DISCLAIMER</p>
                    <p className="disabled">
                        Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.
                    </p>
                </div>
                <div className="col">
                    <p>SOCIAL</p>
                    <div>
                        <Link to='/methodology'><TwitterIcon fill='#fff' /></Link>
                        <Link to='/support'><FacebookIcon fill='#fff' /></Link>
                    </div>

                </div>
                <div className="col">
                    <p>COINCAP APP AVAILABLE ON</p>
                    <Link className='banner' to='/methodology'><GooglePlay/></Link>
                    <Link className='banner'to='/support'><AppleStore/></Link>
                </div>
                
            </div>
        </footer>
    )
}
