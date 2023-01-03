import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/userType/importer/userTypeImporterSelectors';
import UserTypeService from 'src/modules/userType/userTypeService';
import fields from 'src/modules/userType/importer/userTypeImporterFields';
import { i18n } from 'src/i18n';

const userTypeImporterActions = importerActions(
  'USERTYPE_IMPORTER',
  selectors,
  UserTypeService.import,
  fields,
  i18n('entities.userType.importer.fileName'),
);

export default userTypeImporterActions;