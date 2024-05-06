import { useParams } from "react-router-dom";
const Category=()=>{
const {cname}=useParams();
  return(
    <>
    <h2>Category : {cname}</h2>
    </>
  )
}
export default Category;