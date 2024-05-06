import { Link, Outlet } from "react-router-dom";
const Contact=()=>{
  return(
    <main>
    <h2>Contact </h2>
    <table className="table"> 
      <tr>
        <td width={200} valign='top'>
          <ul>
            <li> <Link to="noida">Indian Railway</Link></li>
            <li> <Link to="mumbai">Mumbai</Link></li>
            <li> <Link to="gurugram">Gurugram</Link></li>
            <li> <Link to="indore">indore</Link></li>
          </ul>
        </td>
        <td valign='top'>
          <Outlet/>
        </td>
      </tr> 

    </table>
    </main>
  )
}
export default Contact;