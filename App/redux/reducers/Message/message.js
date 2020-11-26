const initialState = {
  recipientId: 0,
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
    case 'GET_RECIPIENT_ID': {
      return {
        ...state,
        recipientId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
