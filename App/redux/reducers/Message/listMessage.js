const initialState = {
  data: [],
  pageInfo: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        pageInfo: action.payload.data.pageInfo || [],
      };
    }
    case 'GET_MESSAGE_LIST_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_MESSAGE_LIST_SCROLL_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_MESSAGE_LIST_SCROLL_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_MESSAGE_LIST_SCROLL_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [...state.data, ...action.payload.data.results],
        pageInfo: {...state.pageInfo, ...action.payload.data.pageInfo},
      };
    }
    default: {
      return state;
    }
  }
};
