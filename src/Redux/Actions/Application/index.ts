import { ThemeType } from "../../../Types/Application/types";
import { SetApplicationTheme } from "../../ActionTypes";

export const setApplicationTheme = (newState: ThemeType) => {
  return {
    type: SetApplicationTheme,
    payload: newState,
  };
};
