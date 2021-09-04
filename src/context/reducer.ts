/*
 * @Author: busyzz
 * @Date: 2021-09-04 13:22:44
 * @Description:
 */
import { InitializationState } from './index';
export enum ActionType {
  CHANGE_USER_INFO = 'change_user_info',
}
export type Action = {
  type: ActionType;
  preload?: {
    [name: string]: any;
  };
};
export type DispatchFn = (action?: Action) => void;
type ReducerFn = (
  state: InitializationState,
  action: Action
) => InitializationState;
export const reducer: ReducerFn = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_USER_INFO:
      return {
        ...state,
        ...action.preload,
      };
    default:
      return state;
  }
};
