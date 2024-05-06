import { Link } from "react-router-dom";
const Nav=()=>{
    const category = ["men","Women","Kids","Cricket","Hokey"]
    return(
        <>

       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Apps</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About US</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="shopping"> Shopping Mall </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="cart"> Cart </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="contact">Indian Railway </Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {category.map((cat,ind)=>
                <li key={ind}><Link class="dropdown-item" to={`/category/${cat}`}>{cat}</Link></li>
        )}
            
          
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
export default Nav;