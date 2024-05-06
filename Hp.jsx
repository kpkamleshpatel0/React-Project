import React from 'react'

export default function Hp() {
  return (
    <div>
   <img src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/1/F/1F3Y4A-1_T1680351654.png" alt="HP" height={200} width={200} />
   <h5 style={{color:'blue'}}>HP Smart Tank 580 All-in-One Printer</h5>
   <h5 style={{color:'green'}}>₹15,299</h5>
   <p>A4 Colour Smart Tank All-in-One Printer, Perfect for Home</p>
   <p>Print, copy, scan</p>
   <p>Print speed up to 12 ppm (black) and 5 ppm (color)</p>
   <p>Apple AirPrint™; Google Cloud Print™; HP ePrint; Mopria™; USB; Wireless Wi-</p>
   <input type="button"value="Buy" className='btn btn-success m-2'/>
   <input type="button"value="Add to Cart" className='btn btn-primary m-2' />
   <input type="button"value="Delete"className='btn btn-danger' />
    </div>
  )
}
