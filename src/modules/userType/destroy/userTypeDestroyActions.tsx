import listActions from 'src/modules/userType/list/userTypeListActions';
import UserTypeService from 'src/modules/userType/userTypeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'USERTYPE_DESTROY';

const userTypeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userTypeDestroyActions.DESTROY_STARTED,
      });

      await UserTypeService.destroyAll([id]);

      dispatch({
        type: userTypeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.userType.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/user-type');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userTypeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: userTypeDestroyActions.DESTROY_ALL_STARTED,
      });

      await UserTypeService.destroyAll(ids);

      dispatch({
        type: userTypeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.userType.destroyAll.success'),
      );

      getHistory().push('/user-type');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userTypeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default userTypeDestroyActions;
