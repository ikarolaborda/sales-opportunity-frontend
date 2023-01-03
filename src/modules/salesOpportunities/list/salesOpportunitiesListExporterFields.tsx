import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.salesOpportunities.fields.id'),
  },
  {
    name: 'sellerId',
    label: i18n('entities.salesOpportunities.fields.sellerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'productId',
    label: i18n('entities.salesOpportunities.fields.productId'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'clientId',
    label: i18n('entities.salesOpportunities.fields.clientId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.salesOpportunities.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.salesOpportunities.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
