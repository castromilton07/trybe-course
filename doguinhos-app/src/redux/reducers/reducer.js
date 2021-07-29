import { GET_IMAGE, REQUEST_IMAGE, FAILED_REQUEST } from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  imagePath: 'https://images.dog.ceo/breeds/mountain-swiss/n02107574_1214.jpg',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.payload, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

export default reducer;
