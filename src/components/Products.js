import React from 'react';
import DataJSON from "../components/ProductsJSON";

class Products extends React.Component{
    state = {
        products: DataJSON.Products
    }

    render() {
        let product = this.state.products.map(product=> {
            return(
                <div>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>    
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