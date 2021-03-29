import { ACTIVATE_PAGE_LOADER, DEACTIVATE_PAGE_LOADER } from '../actions/types';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_PAGE_LOADER:
      return true;
    case DEACTIVATE_PAGE_LOADER:
      return false;
    default:
      return state;
  }
}
