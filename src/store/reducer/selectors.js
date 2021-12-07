import {createSelector} from '@reduxjs/toolkit';
import {ALL_QUESTS_FILTER_NAME} from '../../constants';

const getQuests = (state) => state.quests;
const getQuestTypeFilter = (state) => state.questTypeFilter;

const getFilteredQuests = createSelector([getQuestTypeFilter, getQuests], (filter, quests) => {
  if (filter === ALL_QUESTS_FILTER_NAME) {
    return quests;
  }
  return quests.filter((quest) => quest.type === filter);
});

export {getQuests, getQuestTypeFilter, getFilteredQuests};
