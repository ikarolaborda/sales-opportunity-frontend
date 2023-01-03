import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.product.fields.name'),
    schema: schemas.string(
      i18n('entities.product.fields.name'),
      {
        "min": 3,
        "required": true
      },
    ),
  },
  {
    name: 'price',
    label: i18n('entities.product.fields.price'),
    schema: schemas.decimal(
      i18n('entities.product.fields.price'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
    schema: schemas.string(
      i18n('entities.product.fields.description'),
      {},
    ),
  },
  {
    name: 'slug',
    label: i18n('entities.product.fields.slug'),
    schema: schemas.string(
      i18n('entities.product.fields.slug'),
      {
        "max": 200
      },
    ),
  },
];