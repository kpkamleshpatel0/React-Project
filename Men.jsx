import { Outlet } from "react-router-dom";
const Men=()=>{
    return(
        <>
        <marquee behavior="" direction=""><h3><b><i style={{color:'Red'}}>Mega sale on mens fashion 80%-90% OFF Offer for today only</i></b></h3></marquee>
       <div>
        <img src="https://rukminim2.flixcart.com/image/612/612/kyt0ya80/shirt/n/v/x/m-como-white-rare-rabbit-original-imagayhhntjgnkuy.jpeg?q=70" alt="c1" height={200}width={200}/>
            <h6>RARE RABBIT</h6>
            <p>Men Slim Fit Solid Casual Shirt</p>
            <h5 style={{color:'green'}}>₹3,498</h5>
            <input type="button" value="Buy" className="btn btn-success m-2" />
            <input type="button" value="Add to Cart" className="btn btn-primary" />
        </div>    
        <div>
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/blazer/3/k/2/m-unique-black-darbar-in-original-imahycqmdmtqazcg.jpeg?q=70" alt="c2" height={200}width={200} />
            <h6>Darbar In</h6>
            <p>Men Solid Single Breasted Festi</p>
            <h5 style={{color:'green'}}>₹5,999</h5>
            <input type="button" value="Buy" className="btn btn-success m-2" />
            <input type="button" value="Add to Cart" className="btn btn-primary" />
        </div>
        </>
    )
}
export default Men;