import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCoinsFetch, reverseList, selectCoinsList, selectlength, selectReverse } from '../../Redux/slices/coinState'
import {ReactComponent as UpIcon} from '../../assests/icons/up.svg'
import {ReactComponent as DownIcon} from '../../assests/icons/down.svg'
import './Table.css'
import TableRow from './TableRow'
export default function Table() {
    const dispatch = useDispatch()
    const coins = useSelector(selectCoinsList)
    const length = useSelector(selectlength)
    const reverse = useSelector(selectReverse)
    useEffect(() => {
      dispatch(getCoinsFetch())
      return () => {
  
      }
    }, [dispatch,length])
    return (
        <table className='container table_container'>
            <thead>
                <tr>
                    <th colSpan={1} className='center-aligned'>
                        <div className="rank" onClick={()=>dispatch(reverseList())}>
                            Rank {reverse?<DownIcon/>:<UpIcon/>}
                        </div>
                        
                    </th>
                    <th colSpan={2} className='left-aligned'>Name</th>
                    <th colSpan={1} className='right-aligned'>Price</th>
                    <th colSpan={1} className='center-aligned hidden-xs'>Market Cap</th>
                    <th colSpan={1} className='right-aligned hidden-md'>VWAP (24Hr)</th>
                    <th colSpan={1} className='right-aligned hidden-md'>Supply</th>
                    <th colSpan={1} className='right-aligned hidden-xs'>Volume (24Hr)</th>
                    <th colSpan={1} className='right-aligned'>Change (24Hr)</th>
                </tr>
            </thead>
            <tbody>
                {coins&&coins.map(data=><TableRow key={data.id} {...data}/>)}

            </tbody>
        </table>
    )
}
