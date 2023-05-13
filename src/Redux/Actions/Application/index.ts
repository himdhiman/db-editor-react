import { SetApplicationTheme } from "../../ActionTypes";

export const setApplicationTheme = (newState: string) => {
  return {
    type: SetApplicationTheme,
    payload: newState,
  };
};
