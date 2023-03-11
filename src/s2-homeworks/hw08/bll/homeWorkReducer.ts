import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      if (action.payload === "up") {
        return [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
      } else {
        return [...state].sort((a, b) => (b.name > a.name ? 1 : -1));
      }

      // by name
      //   let copyState = [...state];
      //   copyState.sort((a, b) => (a.name > b.name ? 1 : -1));
      //   return copyState; // need to fix
    }

    case "check": {
      return state.filter((el) => el.age >= 18); // need to fix
    }
    default:
      return state;
  }
};
