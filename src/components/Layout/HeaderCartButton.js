import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
  const [btnIsHiglighted, setBtnISHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const itemCount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnISHighlighted(true);

    const timer = setTimeout(() => {
      setBtnISHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
}
