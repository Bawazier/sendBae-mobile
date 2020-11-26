const initialState = {
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PATCH_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PATCH_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'PATCH_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case 'PUT_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PUT_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'PUT_PROFILE_FULFILLED': {
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
