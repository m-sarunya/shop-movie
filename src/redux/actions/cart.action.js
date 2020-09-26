export const ADD_CART = 'ADD_CART';
export const EDIT_COUNT_CART = 'EDIT_COUNT_CART';
export const DELETEALL_CART = 'DELETEALL_CART';
export const DELETEBYID_CART = 'DELETEBYID_CART';


export const addCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_CART, payload });
  };
};

export const editCountCart = (id, count) => {
  return (dispatch) => {
    dispatch({ type: EDIT_COUNT_CART, payload: { id, count } });
  };
};

export const deleteByIdCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: DELETEBYID_CART, payload });
  };
};

export const deleteAllCart = (payload) => {
  return (dispatch) => {
    dispatch({ type: DELETEALL_CART, payload });
  };
};



