import { Outlet,Link } from "react-router-dom";
const Electronics=()=>{
  return(
    <>
    <marquee behavior="scroll" direction="right"><h3 style={{color:'red'}} valign="center">Electronic Material </h3></marquee>
       <table className="table">
        <tr>
            <td width={200} valign="center">
                <ul>
                    <li><img src="" alt="" />
                        <Link to="laptop">Laptop</Link></li>
                    <li><Link to="printer">Printer</Link></li>
                </ul>
            </td>
            <td valign="center">
                <Outlet/>

            </td>
        </tr>
       </table>
    </>
  )
}
export default Electronics;