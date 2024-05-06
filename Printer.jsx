import { Link,Outlet } from "react-router-dom";
const Printer=()=>{
    return(
        <>
        <h5>Printer Name with brand</h5>
        <div>
        <Link to="hp">HP Printer </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="dellp">Dell Printer </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="lenovop">Lenovo Printer </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <Outlet/>
      </div>
        </div>

        </>
    )
}
export default Printer;