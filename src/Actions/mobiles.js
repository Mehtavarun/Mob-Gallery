import {
  RESET_MOBILES,
  SET_MOBILES,
  SET_MOBILES_PROPERTY
} from '../Reducers/mobiles';
import { request } from '../Utils/Service';

export function resetMobiles() {
  return dispatch => {
    dispatch({
      type: RESET_MOBILES
    });
  };
}

export function setMobilesAsync(page, order, searchText) {
  return async (dispatch, getState) => {
    const res = await request(
      'GET',
      `/mobiles?_page=${page}&_limit=10&_sort=price&_order=${order}&q=${searchText}`
    );
    dispatch({
      type: SET_MOBILES,
      value: { mobiles: res.body, count: res.count }
    });
  };
}

export function setMobilesProperty(name, value) {
  return dispatch => {
    dispatch({
      type: SET_MOBILES_PROPERTY,
      name,
      value
    });
  };
}
