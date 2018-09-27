import React from 'react';


class Products extends React.Component{
    render() {
        let product = this.props.products.map(product=> {
            return(
<<<<<<< Updated upstream
                <div>
                    {/* <img src={product.productImage} />
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p> */}
=======
                <div className="product-container">
                    <div className ="product-card">
                        <img className ="product-card-img" src={product.productImage} alt="" />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>     
                    </div>    
>>>>>>> Stashed changes
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