import { Dispatch } from "redux";

import { store } from "./Store";
import { IRootState } from "./Types";

export type IGetState = () => IRootState;
export type IDispatch = Dispatch;
export type AppDispatch = typeof store.dispatch;
export type AppGetState = typeof store.getState;
