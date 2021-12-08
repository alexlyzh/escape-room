import {createReducer} from '@reduxjs/toolkit';
import {ActionCreator} from '../actions';
import {ALL_QUESTS_FILTER_NAME} from '../../constants';

const initialState = {
  quests: [],
  isDataLoaded: false,
  questTypeFilter: ALL_QUESTS_FILTER_NAME,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionCreator.loadQuests, (state, action) => {
    state.quests = action.payload;
    state.isDataLoaded = true;
  })
    .addCase(ActionCreator.changeQuestTypeFilter, (state, action) => {
      state.questTypeFilter = action.payload;
    });
});

export {reducer, initialState};
