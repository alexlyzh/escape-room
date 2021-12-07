import {createReducer} from '@reduxjs/toolkit';
import {ActionCreator} from '../actions';

const initialState = {
  quests: [],
  isDataLoaded: false,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionCreator.loadQuests, (state, action) => {
    state.quests = action.payload;
    state.isDataLoaded = true;
  });
});

export {dataReducer, initialState};
