import { rootReducer } from "./Reducers";

export type IRootState = ReturnType<typeof rootReducer>;

export type Action<T> = {
  type: string;
  payload: T;
};
