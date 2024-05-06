import { Link,Outlet } from "react-router-dom";
const Dell=()=>{
    return(
        <main>
        <div>
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/silver-plastic/notebook-inspiron-15-3535-nt-plastic-silver-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500" alt="Inspiron 15 Laptop" height={200}width={200} />
            <Link to="laptop1">Inspiron 15 Laptop</Link>
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-7440/media-gallery/laptop-inspiron-14-plus-in7440nt-bl-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500" alt="l2"height={150}width={200} />
            <Link to="laptop2">New Inspiron 14 Plus Laptop</Link>
            <br /><br /><br />
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-2-in-1-7440-intel/media-gallery/notebook-inspiron-14-7440-t-ice-blue-fpr-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500" alt="l3"height={250}width={250} />
            <Link to="laptop3">New Inspiron 14 2-in-1 Laptop</Link>
        
        </div>
        <div>
            <Outlet/>
        </div>
        </main>
    )
}
export default Dell;