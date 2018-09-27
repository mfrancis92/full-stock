import React from 'react';
import DataJSON from "./ProductsJSON";

class Products extends React.Component{
    state = {
        products: DataJSON.Products
    }

    render() {
        let product = this.state.products.map(product=> {
            return(
                <div>
                    {/* <img src={product.productImage} />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p> */}
                </div>    
            )
            

        });
        return(

            <div>
            <h1>Products</h1>
            {product}
            </div>
            
        )  
    }
    
}


export default Products;