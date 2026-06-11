import {useState,useEffect} from 'react'
import Card from './Card.jsx'   

function Products() {
  const [products, setProducts] = useState([]);

    //fetch data from api and setProducts fake store api
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setProducts(json))
    }, [1]);

  return (
    <div>
       
        <section style = {{alignItems:"center",display:"flex",flexDirection:"column",gap:"20px"}}>
            <h1>Products</h1>
            <div
              style={{
                display: "flex",        
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center"
                }}
            >
                {products.map(product => (
                    <Card key={product.id} imgSrc={product.image} title={product.title} />
                ))}
            </div>
        </section>
    </div>
  );
}

export default Products;