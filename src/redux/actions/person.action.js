export const ADD_PERSON = 'ADD_PERSON';
export const EDIT_PERSON = 'EDIT_PERSON';
export const DELETEALL_PERSON = 'DELETEALL_PERSON';
export const DELETEBYID_PERSON = 'DELETEBYID_PERSON';


export const addPerson = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_PERSON, payload });
  };
};

export const editPerson = (payload) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PERSON, payload });
  };
};

export const deleteByIdPerson = (payload) => {
  return (dispatch) => {
    dispatch({ type: DELETEBYID_PERSON, payload });
  };
};

export const deleteAllPerson = (payload) => {
  return (dispatch) => {
    dispatch({ type: DELETEALL_PERSON, payload });
  };
};



