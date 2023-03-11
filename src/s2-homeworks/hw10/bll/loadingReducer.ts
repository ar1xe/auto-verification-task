const initState = {
  isLoading: false,
};

export const loadingReducer = (state = initState, action: any): any => {
  // fix any
  //   debugger;
  switch (action.type) {
    // пишет студент  // need to fix
    case "CHANGE_LOADING":
      //   debugger;
      return { ...state, isLoading: !action.isLoading };

    default:
      return state;
  }
};

export type LoadingActionType = {
  type: "CHANGE_LOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): LoadingActionType =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
