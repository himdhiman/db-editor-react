import { SetApplicationTheme } from "../../ActionTypes";
import { Action } from "../../Types";

interface IDefaultState {
  theme: string;
}

let defaultState: IDefaultState = {
  theme: "dark",
};

export const ApplicationThemeReducer = (
  state: IDefaultState = defaultState,
  action: Action<string>
) => {
  switch (action.type) {
    case SetApplicationTheme:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
