import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'sellerId',
    label: i18n('entities.salesOpportunities.fields.sellerId'),
    schema: schemas.relationToOne(
      i18n('entities.salesOpportunities.fields.sellerId'),
      {},
    ),
  },
  {
    name: 'productId',
    label: i18n('entities.salesOpportunities.fields.productId'),
    schema: schemas.relationToMany(
      i18n('entities.salesOpportunities.fields.productId'),
      {},
    ),
  },
  {
    name: 'clientId',
    label: i18n('entities.salesOpportunities.fields.clientId'),
    schema: schemas.relationToOne(
      i18n('entities.salesOpportunities.fields.clientId'),
      {},
    ),
  },
];