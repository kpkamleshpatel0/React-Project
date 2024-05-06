import { Link, Outlet } from "react-router-dom";

const Fashion=()=>{
    return(
        <>
        <marquee behavior="scroll" direction="lefttoright"><h3 style={{color:'blue'}}><i>Big fashion offer from 06 Apr-24 to 10 Apr-24 50%-70% OFF</i></h3></marquee>
        <div>
        <img src="https://rukminim2.flixcart.com/image/300/300/xif0q/shirt/y/z/s/-original-imagqfnghk5gddtv.jpeg?q=70" alt="men" height={80}width={80}/>
        <Link to="men">Men</Link>

        <br />
       
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/l/x/j/free-saree-silk-sarisp-unstitched-original-imagn4akdtrdz3fw.jpeg?q=70" alt="2"height={80}width={80} />
        <Link to="women">Women</Link>
       
     
        <br />
        
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/stacking-toy/j/n/p/mega-star-link-building-blocks-discs-set-solid-plastic-puzzle-original-imagygfgtcusq4pm.jpeg?q=70" alt="3"height={80}width={80} />
        <Link to="kids">Kids</Link>
        </div>
        <div >
            <p >
            <Outlet/>
            </p>
        </div>
        </>

    )
}
export default Fashion;