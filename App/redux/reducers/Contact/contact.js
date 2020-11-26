const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'POST_CONTACT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_CONTACT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'POST_CONTACT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'PATCH_CONTACT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PATCH_CONTACT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'PATCH_CONTACT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    default: {
      return state;
    }
  }
};
