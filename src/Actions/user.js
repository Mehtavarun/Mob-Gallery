export function resetUser() {
  return dispatch => {
    dispatch({
      type: 'RESET_USER'
    });
  };
}
