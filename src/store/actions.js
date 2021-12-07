import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LoadQuests: 'DATA / LoadQuests',
}

const ActionCreator = {
  loadQuests: createAction(
    ActionType.LoadQuests,
    (quests) => ({
    payload: quests,
  })),
};

export {ActionType, ActionCreator};
