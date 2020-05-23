export const SET_MOBILES = 'SET_MOBILES';
export const RESET_MOBILES = 'RESET_MOBILES';
export const SET_MOBILES_PROPERTY = 'SET_MOBILES_PROPERTY';

const initialState = {
  count: 0,
  mobiles: []
};

export default (state = initialState, { type, name, value }) => {
  switch (type) {
    case SET_MOBILES:
      return value;
    case SET_MOBILES_PROPERTY:
      return {
        ...state,
        [name]: value
      };
    case RESET_MOBILES:
      return { ...initialState };
    default:
      return state;
  }
};
