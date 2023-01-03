import list from 'src/modules/salesOpportunities/list/salesOpportunitiesListReducers';
import form from 'src/modules/salesOpportunities/form/salesOpportunitiesFormReducers';
import view from 'src/modules/salesOpportunities/view/salesOpportunitiesViewReducers';
import destroy from 'src/modules/salesOpportunities/destroy/salesOpportunitiesDestroyReducers';
import importerReducer from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
