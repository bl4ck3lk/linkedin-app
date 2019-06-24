import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import * as Immutable from 'immutable';

export type InitialStateType = Immutable.Map<string, *>;

export type Action = {
  +type: string
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
