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

  PostOrder: (data, setIsSubmitting, closeForm) =>
    async (_dispatch, _getState, api) => {
      try {
        setIsSubmitting(true);
        await api.post(ApiRoute.Orders, data);
        closeForm();
      } catch (e) {
        throw e;
      } finally {
        setIsSubmitting(false);
      }
    },
};

export {ApiActions};
