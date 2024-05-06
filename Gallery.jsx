import { Link,Outlet } from "react-router-dom";
const Gallery=()=>{
  return(
    <>
    <marquee behavior="scroll" direction="right"><b><i style={{color:'blueviolet',fontSize:'50px'}}>Welcome to RIDDHI Shopping Mall</i></b></marquee>
   <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa97d7809ad44d08.jpg?q=20" 
    alt="image" height={100}width={1250} />
    <hr />
  <div>
    <div >
      <marquee behavior="" direction="left"><img src="https://rukminim2.flixcart.com/fk-p-flap/1600/140/image/606a19936b528d9d.jpg?q=20" alt="discont" width={600}/></marquee>
    </div>
  </div>
  <div>
  <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/a72369170563cf50.png?q=100" alt="electronic" />
  <Link to="electronic">Electronics</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/39a5455dfa3a6e09.png?q=100" alt="mobile&tables" />
    <Link to="mobile">Mobiles</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/120fe56747723091.png?q=100" alt="fashion" />
    <Link to="fashion">Fashion</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/07eaf6881d416ef9.png?q=100" alt="tv" />
    <Link to="tv">TV&Application</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/d5f37d2f45157db3.png?q=100" alt="beauty" />
    <Link to="beauty">Beauty</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://rukminim2.flixcart.com/fk-p-flap/96/96/image/367e2bc66f3e0871.png?q=100" alt="home" />
    <Link to="home">Home&Kitchen</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}
export default Gallery;