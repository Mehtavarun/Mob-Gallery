import { RESET_CART, SET_CART, SET_CART_PROPERTY } from '../Reducers/cart';

export function resetCart() {
  return dispatch => {
    dispatch({
      type: RESET_CART
    });
  };
}

export function setCartProperty(name, value) {
  return dispatch => {
    dispatch({
      type: SET_CART_PROPERTY,
      name,
      value
    });
  };
}

export function addItem(items, newItem) {
  return dispatch => {
    dispatch({
      type: SET_CART_PROPERTY,
      name: 'items',
      value: [...items, newItem]
    });
  };
}

export function editItem(items, item) {
  const itemIndex = items.findIndex(listItem => listItem.id === item.id);
  items[itemIndex] = item;
  return dispatch => {
    dispatch({
      type: SET_CART_PROPERTY,
      name: 'items',
      value: items
    });
  };
}

export function updatePrice(listItems) {}

export function setCart(value) {
  return dispatch => {
    dispatch({
      type: SET_CART,
      value
    });
  };
}
