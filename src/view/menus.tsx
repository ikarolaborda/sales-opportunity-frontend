import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: 'fas fa-th-large',
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: 'fas fa-credit-card',
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: 'fas fa-user-plus',
  },

  {
    path: '/audit-logs',
    icon: 'fas fa-history',
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'fas fa-cog',
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.product.menu'),
  },

  {
    path: '/user-type',
    permissionRequired: permissions.userTypeRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.userType.menu'),
  },

  {
    path: '/sales-opportunities',
    permissionRequired: permissions.salesOpportunitiesRead,
    icon: 'fas fa-chevron-right',
    label: i18n('entities.salesOpportunities.menu'),
  },  
].filter(Boolean);
