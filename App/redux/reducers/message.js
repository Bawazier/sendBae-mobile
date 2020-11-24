const initialState = {
  data: [],
  dataList: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_MESSAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_MESSAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'POST_MESSAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'GET_MESSAGE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MESSAGE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_MESSAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
      };
    }
    case 'GET_MESSAGE_LIST_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MESSAGE_LIST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_MESSAGE_LIST_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataList: action.payload.data.results,
      };
    }
    default: {
      return state;
    }
  }
};
