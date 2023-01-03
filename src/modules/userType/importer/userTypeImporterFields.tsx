import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'userId',
    label: i18n('entities.userType.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.userType.fields.userId'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.userType.fields.description'),
    schema: schemas.string(
      i18n('entities.userType.fields.description'),
      {
        "required": true
      },
    ),
  },
];