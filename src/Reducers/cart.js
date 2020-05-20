export const SET_CART = 'SET_CART';
export const SET_CART_PROPERTY = 'SET_CART_PROPERTY';
export const RESET_CART = 'RESET_CART';

const initialState = {
  totalPrice: 0,
  currency: '$',
  items: []
};

export default (state = initialState, { type, name, value }) => {
  switch (type) {
    case SET_CART:
      return value;
    case SET_CART_PROPERTY:
      return {
        ...state,
        [name]: value
      };
    case RESET_CART:
      return { ...initialState };
    default:
      return state;
  }
};
