import list from 'src/modules/userType/list/userTypeListReducers';
import form from 'src/modules/userType/form/userTypeFormReducers';
import view from 'src/modules/userType/view/userTypeViewReducers';
import destroy from 'src/modules/userType/destroy/userTypeDestroyReducers';
import importerReducer from 'src/modules/userType/importer/userTypeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
