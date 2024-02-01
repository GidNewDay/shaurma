import { Fragment } from "react";

import mealsImage from "../../assets/shaurma.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Шаурма</h1>
        <HeaderCartButton onClickButton={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious shaurma!" />
      </div>
    </Fragment>
  );
};

export default Header;
