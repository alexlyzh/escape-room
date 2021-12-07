import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LoadQuests: 'LoadQuests',
  ChangeQuestTypeFilter: 'ChangeQuestTypeFilter',
}

const ActionCreator = {
  loadQuests: createAction(
    ActionType.LoadQuests,
    (quests) => ({
    payload: quests,
  })),

  changeQuestTypeFilter: createAction(
    ActionType.ChangeQuestTypeFilter,
    (filter) => ({
      payload: filter,
    })),
};

export {ActionType, ActionCreator};
