import { dispatch } from "../../Hooks/useDispatch";
import { setApplicationTheme } from "../../Redux/Actions/Application";

export const ChangeThemeService = (theme: string) => {
  switch (theme) {
    case "light":
      dispatch(setApplicationTheme("dark"));
      break;
    case "dark":
      dispatch(setApplicationTheme("light"));
      break;
    default:
      throw new Error("Invalid theme");
  }
};
