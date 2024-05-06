import { Link ,Outlet} from "react-router-dom";
const Chip=()=>{
    return(
        <>
       <h4> Platform of Chipyana Buzurg Junction : </h4>
       <table className="table">
        <tr>
            <td width={200} valign="top">
                <ul>
                    
                    <li><Link to="a1">Platform No : 1 </Link></li>
                    <li><Link to="a2">Platform No : 2 </Link></li>
                    <li><Link to="a3">Platform No : 3 </Link></li>
                    <li><Link to="a4">Platform No : 4 </Link></li>
                    <li><Link to="a5">Platform No : 5 </Link></li>
                    <li><Link to="a6">Platform No : 6 </Link></li>
                    <li><Link to="a7">Platform No : 7 </Link></li>
                    <li><Link to="a8">Platform No : 8 </Link></li>
                    <li><Link to="a9">Platform No : 9 </Link></li>
                    <li><Link to="a10">Platform No : 10 </Link></li>
                    <li><Link to="a11">Platform No : 11 </Link></li>
                    <li><Link to="a12">Platform No : 12 </Link></li>
                    <li><Link to="a13">Platform No : 13 </Link></li>
                    <li><Link to="a14">Platform No : 14 </Link></li>
                    <li><Link to="a15">Platform No : 15 </Link></li>
                    <li><Link to="a16">Platform No : 16 </Link></li>
                    <li><Link to="a17">Platform No : 17 </Link></li>
                    <li><Link to="a18">Platform No : 18 </Link></li>
                    <li><Link to="a19">Platform No : 19 </Link></li>
                    <li><Link to="a20">Platform No : 20 </Link></li>
                    <li><Link to="a21">Platform No : 21 </Link></li>
                </ul>
            </td>
            <td valign="top">
                <Outlet/>

            </td>
        </tr>
       </table>
        </>
    )
}
export default Chip;