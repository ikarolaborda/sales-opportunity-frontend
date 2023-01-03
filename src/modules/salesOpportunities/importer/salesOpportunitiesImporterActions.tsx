import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterSelectors';
import SalesOpportunitiesService from 'src/modules/salesOpportunities/salesOpportunitiesService';
import fields from 'src/modules/salesOpportunities/importer/salesOpportunitiesImporterFields';
import { i18n } from 'src/i18n';

const salesOpportunitiesImporterActions = importerActions(
  'SALESOPPORTUNITIES_IMPORTER',
  selectors,
  SalesOpportunitiesService.import,
  fields,
  i18n('entities.salesOpportunities.importer.fileName'),
);

export default salesOpportunitiesImporterActions;