import Inventory from '@/components/inventory/list'
import OrganizationHome from '@/components/pages/organization/Home'
import UserList from '@/components/user/list'
import ActivityLog from '@/components/organization/activity-log'

import ConfigurationRoutes from './configuration'
import MonitoringRoutes from './monitoring'
import MarketingRoutes from './marketing'
import SettingsRoutes from './settings'
import WifiSettingsRoutes from './wifi'

export default [
  ...ConfigurationRoutes,
  ...MonitoringRoutes,
  ...MarketingRoutes,
  ...SettingsRoutes,
  ...WifiSettingsRoutes,
  {
    path: '/',
    name: 'OrganizationHome',
    component: OrganizationHome
  },
  {
    path: 'inventory',
    name: 'OrganizationInventory',
    component: Inventory
  },
  {
    path: 'users',
    name: 'OrganizationUsers',
    component: UserList
  },
  {
    path: 'activity-log',
    name: 'OrganizationActivityLog',
    component: ActivityLog
  }
]
