const initialState = {
  data: [],
  pageInfo: [],
  isLoading: false,
  isError: false,
  alertMsg: '',

  isScrollLoading: false,
  isScrollError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
        pageInfo: action.payload.data.pageInfo || [],
      };
    }
    case 'GET_MESSAGE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.results,
        pageInfo: action.payload.data.pageInfo,
      };
    }
    case 'GET_MESSAGE_SCROLL_PENDING': {
      return {
        ...state,
        isScrollLoading: true,
      };
    }
    case 'GET_MESSAGE_SCROLL_REJECTED': {
      return {
        ...state,
        isScrollLoading: false,
        isScrollError: true,
        alertMsg: action.payload,
      };
    }
    case 'GET_MESSAGE_SCROLL_FULFILLED': {
      return {
        ...state,
        isScrollLoading: false,
        isScrollError: false,
        data: [...state.data, ...action.payload.data.results],
        pageInfo: {...state.pageInfo, ...action.payload.data.pageInfo},
      };
    }
    default: {
      return state;
    }
  }
};
