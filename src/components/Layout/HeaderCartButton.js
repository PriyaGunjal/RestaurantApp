import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton=(props)=>{
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
<<<<<<< HEAD
            <span>Your cart</span>
=======
            <span>Your Cart</span>
>>>>>>> 130b04d6 (Add Restauran Summary)
            <span className={classes.badge}>3</span>
        </button>
    )
};

export default HeaderCartButton;