import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import Table from '../../Components/Table/Table'
import { increaseLength } from '../../Redux/slices/coinState'
import './Landing.css'
export default function Landing() {
  const dispatch = useDispatch()
  function viewMoreHandler(){
    dispatch(increaseLength())
  }
  return (
    <section className='landing'>
      <div className="grad_section">
        <div className="container overview">
          <OverviewItem title={"Market Cap"} value={"$1.15T"}/>
          <OverviewItem title={"EXCHANGE VOL"} value={"$52.36B"}/>
          <OverviewItem title={"ASSETS"} value={"2,295"}/>
          <OverviewItem title={"EXCHANGES"} value={"73"}/>
          <OverviewItem title={"MARKETS"} value={"14068"}/>
          <OverviewItem title={"BTC DOM INDEX"} value={"32.3%"}/>
        </div>
      </div>
      <Table />
      <PrimaryButton name={"View More"} onClick={viewMoreHandler} style={{position:'relative', top:'-4rem'}}/>
    </section>
  )
}

function OverviewItem({title,value}) {
  return (
    <div className="item">
      <p>{title}</p>
      <span>{value}</span>
    </div>
  )
}