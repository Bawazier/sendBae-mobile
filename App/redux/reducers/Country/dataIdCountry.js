const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRY_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_COUNTRY_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_COUNTRY_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataId: action.payload.data.results,
      };
    }
    default: {
      return state;
    }
  }
};
