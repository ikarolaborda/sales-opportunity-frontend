import UserTypeService from 'src/modules/userType/userTypeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'USERTYPE_VIEW';

const userTypeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userTypeViewActions.FIND_STARTED,
      });

      const record = await UserTypeService.find(id);

      dispatch({
        type: userTypeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userTypeViewActions.FIND_ERROR,
      });

      getHistory().push('/user-type');
    }
  },
};

export default userTypeViewActions;
