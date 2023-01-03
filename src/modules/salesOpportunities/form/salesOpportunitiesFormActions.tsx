import SalesOpportunitiesService from 'src/modules/salesOpportunities/salesOpportunitiesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SALESOPPORTUNITIES_FORM';

const salesOpportunitiesFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: salesOpportunitiesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SalesOpportunitiesService.find(id);
      }

      dispatch({
        type: salesOpportunitiesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: salesOpportunitiesFormActions.INIT_ERROR,
      });

      getHistory().push('/sales-opportunities');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: salesOpportunitiesFormActions.CREATE_STARTED,
      });

      await SalesOpportunitiesService.create(values);

      dispatch({
        type: salesOpportunitiesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.salesOpportunities.create.success'),
      );

      getHistory().push('/sales-opportunities');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: salesOpportunitiesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: salesOpportunitiesFormActions.UPDATE_STARTED,
      });

      await SalesOpportunitiesService.update(id, values);

      dispatch({
        type: salesOpportunitiesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.salesOpportunities.update.success'),
      );

      getHistory().push('/sales-opportunities');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: salesOpportunitiesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default salesOpportunitiesFormActions;
