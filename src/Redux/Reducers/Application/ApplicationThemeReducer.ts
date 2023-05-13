import { ThemeType } from "../../../Types/Application/types";
import { SetApplicationTheme } from "../../ActionTypes";
import { Action } from "../../Types";

interface IDefaultState {
  theme: ThemeType;
}

let defaultState: IDefaultState = {
  theme: "dark",
};

export const ApplicationThemeReducer = (
  state: IDefaultState = defaultState,
  action: Action<ThemeType>
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
