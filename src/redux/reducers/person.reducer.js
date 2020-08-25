import { ADD_PERSON } from '../actions/person.action';
import { EDIT_PERSON } from '../actions/person.action';
import { DELETEALL_PERSON } from '../actions/person.action';
import { DELETEBYID_PERSON } from '../actions/person.action';
import { personData } from '../../helpers/mockData'
const localStorageData = localStorage.getItem('personData')
const initialState = localStorageData ? JSON.parse(localStorageData) : personData;
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PERSON:
      return {
        data: [...state.data, payload]
      }
    case EDIT_PERSON:
      return {
        data: [...state.data.filter((item => { return item._id !== payload._id })), payload]
      }
    case DELETEBYID_PERSON:
      return {
        data: state.data.filter((item => { return item._id !== payload }))
      }
    case DELETEALL_PERSON:
      return {
        data: []
      }

    default:
      return state;
  }
};

