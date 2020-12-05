import React from 'react';

class CartItem extends React.Component{
   
   
    render() {
        
        const {price , title , qty} = this.props.products;
        return (
            <div className = "cart-item">
                <div className = "left-block">
                    <img style ={styles.image}/>
                </div>
                <div className = "right-block">
                    <div style ={{fontSize :20}}>{title}</div>
                    <div style ={{color:'#777'}}>Cost: {price}</div>
                    <div style ={{color:'#777'}}>Qty:{qty}</div>
                    <div className = "cart-item-actions">
                        {/* Buttons */}
                        <img alt ="increase"   className = "action-icons" onClick ={()=>this.props.onIncreaseQuantity(this.props.products)} src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"  />
                        <img alt ="decrease"   className = "action-icons" onClick ={()=>this.props.onDecreaseQuantity(this.props.products)} src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"  />
                        <img alt ="delete"   className = "action-icons" onClick ={()=>this.props.onDeleteProduct(this.props.products.id)} src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"  />
                    </div>
                </div>
            </div>

        );
    }
}
const styles = {
    image:{
        height:130,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;