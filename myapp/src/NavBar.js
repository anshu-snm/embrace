import React from 'react';
class NavBar extends React.Component {
    render(){
        return(
            <div style = {styles.nav}>
                <div style = {styles.cartIconContainer}>
                    <img style = {styles.cartIcon} src = "https://as2.ftcdn.net/jpg/00/97/00/05/500_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg" alt = ""/>
                    <span style = {styles.cartCount}> 3</span>
                </div>

            </div>
        );
    }
}
const styles  = {
    cartIcon :{
        height: 32,
        marginRight :20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    cartIconContainer: {
        position: 'relative'
      },
      cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
      }

};

export default  NavBar;