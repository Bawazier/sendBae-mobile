const initialState = {
  token: '',
  tokenTemporary: '',
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload,
      };
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: action.payload.data.token || '',
        tokenTemporary: action.payload.data.tokenTemporary || '',
      };
    }
    case 'SIGNUP': {
      console.log(initialState.tokenTemporary);
      return {
        ...state,
        token: state.tokenTemporary,
        tokenTemporary: '',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: '',
        tokenTemporary: '',
        isLoading: false,
        isError: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};
