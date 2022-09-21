import React from 'react'
import usePrevious from '../../usePrevious';

export default function TableRow({ rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, symbol }) {
    const prev = usePrevious(priceUsd)
    return (
        <tr className={selectClass(prev,priceUsd)}>
            <td colSpan={1} className='center-aligned'>{rank}</td>
            <td colSpan={2} className='left-aligned'>
                <div className="flex-row">


                    <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={name} loading="lazy" />
                    <div className="info">
                        <p>{name}</p>
                        <span>{symbol}</span>
                    </div>
                </div>
            </td>
            <td colSpan={1} className='right-aligned'>${addUnit(priceUsd)}</td>
            <td colSpan={1} className='center-aligned hidden-xs'>${addUnit(marketCapUsd)}</td>
            <td colSpan={1} className='right-aligned hidden-md'>${addUnit(vwap24Hr)}</td>
            <td colSpan={1} className='right-aligned hidden-md'>{addUnit(supply)}</td>
            <td colSpan={1} className='right-aligned hidden-xs'>${addUnit(volumeUsd24Hr)}</td>
            <td colSpan={1} className='right-aligned' style={{ color: changePercent24Hr < 0 ? "#F44336" : "#18c683" }}>{Number(changePercent24Hr).toFixed(2)}%</td>

        </tr>
    )
}
function selectClass(prev,now){
    if(!prev) return ""
    prev = Number(prev).toFixed(2)
    now = Number(now).toFixed(2)
    //console.log(prev,now)
    
    if(prev===now){
        return ""
    }
    else if(prev<now){
        return "increased"
    }else{
        return "decreased"
    }
}
function addUnit(num) {

    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e+9

        ? (Math.abs(Number(num)) / 1.0e+9).toFixed(2) + "b"
        // Six Zeroes for Millions 
        : Math.abs(Number(num)) >= 1.0e+6

            ? (Math.abs(Number(num)) / 1.0e+6).toFixed(2) + "m"
            // Three Zeroes for Thousands
            : Math.abs(Number(num)).toFixed(2);

}
