import React  from 'react';
import CartItem from './CartItem';
import NavBar from './NavBar';
class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price:'Help Others',
                    title:'Kindness',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:'Put yourself in their situation',
                    title:'Empathy',
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    price:'the courage to grow mentally',
                    title:'Resilliance',
                    qty:4,
                    img:'',
                    id:3
                }
 
            ]
        }
    }
    handleIncreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products:products
        })  
    }
    handleDecreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if (products[index].qty === 0){
            return
        }
        products[index].qty -= 1;
        this.setState({
            products:products
        })  
    }
    handleDeleteProduct = (id) =>{
        const{products} = this.state;
        const items = products.filter((item)=> item.id !== id);
        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state;
 
        return(
            <div>
                <NavBar/>
            <div className = "cart">
            {products.map((product)=>{
                return <CartItem 
                products = {product}
                 key = {product.id} 
                 onIncreaseQuantity = {this.handleIncreaseQuantity}
                 onDecreaseQuantity = {this.handleDecreaseQuantity}
                 onDeleteProduct = {this.handleDeleteProduct}/>
            })}
            
            </div>
            </div>
        );
    }
}
 
export default Cart;