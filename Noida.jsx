import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Noida() {
  return (
    <div>
        <marquee behavior="" direction="right"><h3 style={{color:'blue'}}>Welcome to Indian Railway </h3></marquee>
        <marquee behavior="" direction="right"><img src="https://qph.cf2.quoracdn.net/main-qimg-c3690a4bd560183647b7fecf005a0a7f-lq" alt="logo" height={200}/></marquee>
      <table className='table'>
        <tr>
            <td width={200} valign='top'>
                <ul>
                    <li><Link to="r1">Chipyana Buzurg</Link></li>
                    <li><Link to="r2">Mohan Estate Metro Station</Link></li>
                    <li><Link to="r3">Tuglakabad East Cabin</Link></li>
                    <li><Link to="r4">Okhla</Link></li>
                    <li><Link to="r5">Hazrat Nizamuddin</Link></li>
                    <li><Link to="r6">Hazarat Nizamuddin railway station platfor 5</Link></li>
                    <li><Link to="r7">Lajpat Nagar</Link></li>
                </ul>

            </td>
            <td valign='top'>
                <Outlet/>
            </td>
        </tr>
      </table>
    </div>
  )
}
