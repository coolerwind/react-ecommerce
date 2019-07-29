/*
 * @Author: Prawee Wongsa 
 * @Date: 2019-07-29 20:10:26 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2019-07-29 22:13:19
 */
const CART_KEY = 'cart';
 
export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)
  }`;
}

export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
}

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
}