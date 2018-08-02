import ConfigurationGroupAndSite from '@/components/configuration/group-and-site'
import ConfigurationSiteDetails from '@/components/configuration/site-details'
import ConfigurationGroupDetails from '@/components/configuration/group-details'

export default [
  {
    path: 'configuration/group-and-site',
    name: 'ConfigurationGroupAndSite',
    component: ConfigurationGroupAndSite
  },
  {
    path: 'configuration/group-details',
    name: 'ConfigurationGroupDetails',
    component: ConfigurationGroupDetails
  },
  {
    path: 'configuration/site-details',
    name: 'ConfigurationSiteDetails',
    component: ConfigurationSiteDetails
  }
]
