import {createSelector} from '@reduxjs/toolkit';
import {ALL_QUESTS_FILTER_NAME} from '../../constants';

const selectQuests = (state) => state.quests;
const selectQuestTypeFilter = (state) => state.questTypeFilter;
const selectIsDataLoaded = (state) => state.isDataLoaded;

const getFilteredQuests = createSelector([selectQuestTypeFilter, selectQuests], (filter, quests) => {
  if (filter === ALL_QUESTS_FILTER_NAME) {
    return quests;
  }
  return quests.filter((quest) => quest.type === filter);
});

export {selectQuests, selectQuestTypeFilter, selectIsDataLoaded, getFilteredQuests};
