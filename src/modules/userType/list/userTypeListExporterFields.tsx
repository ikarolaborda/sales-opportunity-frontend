import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.userType.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.userType.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'description',
    label: i18n('entities.userType.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.userType.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.userType.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
