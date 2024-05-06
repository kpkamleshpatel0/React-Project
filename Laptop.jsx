import { Link,Outlet } from "react-router-dom";
const Laptop=()=>{
    return(
        <main>
               <table className="table">
        <tr>
            <td width={200} valign="center">
                <ul>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" alt="dell" height={100}width={100}/>
                        <Link to="dell">Dell</Link></li>

                    <li><img src="https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo.jpg" alt="lenovo" height={100}width={100}/>
                        <Link to="lenovo">Lenovo</Link></li>
                </ul>
            </td>
            <td valign="center">
                <Outlet/>

            </td>
        </tr>
       </table>
        </main>
    )
}
export default Laptop;