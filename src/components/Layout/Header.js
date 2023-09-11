import { Fragment } from "react";
<<<<<<< HEAD
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
=======
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
>>>>>>> 130b04d6 (Add Restauran Summary)
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
return(
<<<<<<< HEAD
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
        </div>
    </Fragment>
)
};
=======
<Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table of delicious food'></img>
    </div>

</Fragment>
)
}
>>>>>>> 130b04d6 (Add Restauran Summary)

export default Header;