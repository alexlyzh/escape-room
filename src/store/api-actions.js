import {ApiRoute} from '../constants';
import {ActionCreator} from './actions';

const ApiActions = {
  GetQuests: () =>
    async (dispatch, _getState, api) => {
      try {
        const {data} = await api.get(ApiRoute.Quests);
        dispatch(ActionCreator.loadQuests(data));
      } catch (e) {
        throw e;
      }
    },
};

export {ApiActions};
