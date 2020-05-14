export const SET_USER = 'SET_USER';
export const SET_USER_PROPERTY = 'SET_USER_PROPERTY';
export const RESET_USER = 'RESET_USER';

const initialState = {
  id: 1,
  username: '',
  password: ''
};

export default (state = initialState, { type, name, value }) => {
  switch (type) {
    case SET_USER:
      return { ...value };
    case SET_USER_PROPERTY:
      return {
        ...state,
        [name]: value
      };
    case RESET_USER:
      return { ...initialState };
    default:
      return state;
  }
};
