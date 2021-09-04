/*
 * @Author: busyzz
 * @Date: 2021-09-04 13:12:09
 * @Description:
 */
import avatarImage from 'assets/images/avatar.jpg';
import React from 'react';
import { DispatchFn } from './reducer';
export * from './reducer';
export interface InitializationState {
  name: string;
  avatar: string;
  dispatch: DispatchFn;
}
export const defaultValue: InitializationState = {
  name: 'busyzz',
  avatar: avatarImage,
  dispatch: () => {},
};
export const GlobalContext =
  React.createContext<InitializationState>(defaultValue);

export const GlobalProvider = GlobalContext.Provider;

export const GlobalConsumer = GlobalContext.Consumer;
