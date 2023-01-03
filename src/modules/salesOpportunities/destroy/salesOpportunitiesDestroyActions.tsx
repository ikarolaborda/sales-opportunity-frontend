import listActions from 'src/modules/salesOpportunities/list/salesOpportunitiesListActions';
import SalesOpportunitiesService from 'src/modules/salesOpportunities/salesOpportunitiesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SALESOPPORTUNITIES_DESTROY';

const salesOpportunitiesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_STARTED,
      });

      await SalesOpportunitiesService.destroyAll([id]);

      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.salesOpportunities.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sales-opportunities');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_ALL_STARTED,
      });

      await SalesOpportunitiesService.destroyAll(ids);

      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.salesOpportunities.destroyAll.success'),
      );

      getHistory().push('/sales-opportunities');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: salesOpportunitiesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default salesOpportunitiesDestroyActions;
