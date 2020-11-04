import React from "react";

const CartContext = React.createContext();

// best practice give a name for our context
CartContext.displayName = "CartContext";

export default CartContext;
