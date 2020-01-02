import * as layout from '../actions/layout';


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state = initialState, action: layout.Actions): State {
  switch (action.type) {
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
