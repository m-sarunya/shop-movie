import { ADD_CART } from '../actions/cart.action';
import { EDIT_COUNT_CART } from '../actions/cart.action';
import { DELETEALL_CART } from '../actions/cart.action';
import { DELETEBYID_CART } from '../actions/cart.action';
const localStorageData = JSON.parse(localStorage.getItem('movieData'))
const initialState = localStorageData ? localStorageData : [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART:
      var nowData = []
      const findData = state.find(item => { return item.id === payload.id })
      if (findData) {
        nowData = state?.map(item => {
          return item.id === payload.id ? { ...item, count: item.count + 1 } : item
        })
      }
      else {
        nowData = [{ ...payload, count: 1 }, ...state]
      }
      localStorage.setItem('movieData', JSON.stringify(nowData))
      return nowData
    case EDIT_COUNT_CART:
      const editData = state?.map(item => {
        return item.id === payload.id ? { ...item, count: payload.count } : item
      })
      localStorage.setItem('movieData', JSON.stringify(editData))
      return editData

    case DELETEBYID_CART:
      return {}
    case DELETEALL_CART:
      return []

    default:
      return state;
  }
};

