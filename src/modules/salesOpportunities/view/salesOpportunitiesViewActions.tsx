import SalesOpportunitiesService from 'src/modules/salesOpportunities/salesOpportunitiesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SALESOPPORTUNITIES_VIEW';

const salesOpportunitiesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: salesOpportunitiesViewActions.FIND_STARTED,
      });

      const record = await SalesOpportunitiesService.find(id);

      dispatch({
        type: salesOpportunitiesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: salesOpportunitiesViewActions.FIND_ERROR,
      });

      getHistory().push('/sales-opportunities');
    }
  },
};

export default salesOpportunitiesViewActions;
