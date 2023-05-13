import { combineReducers } from "redux";
import { ApplicationThemeReducer } from "./Application/ApplicationThemeReducer";

export const rootReducer = combineReducers({
  ApplicationTheme: ApplicationThemeReducer,
});
