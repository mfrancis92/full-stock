import React from 'react';


class Products extends React.Component{
    render() {
        let product = this.props.products.map(product=> {
            return(
                    <div className ="product-card">
                        <img className ="product-card-img" src={product.productImage} alt="" />
                        <h2 className ="product-card-title">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>     
                    </div>    
            )
        });
        return(

            <div className ="product-container">
                <h1>Products</h1>
                <div className="product-cards">
                {product}
                </div>
            </div>
            
        )  
    }
    
}


export default Products;