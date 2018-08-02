import WifiConfiguration from '@/components/wifi-settings/configuration/index'
import WifiConfigurationGuest from '@/components/wifi-settings/configuration/guest'
import WifiConfigurationTicket from '@/components/wifi-settings/configuration/ticket'
import WifiConfigurationMultipleAccess from '@/components/wifi-settings/configuration/multiple-access'
import WifiConfigurationSponsors from '@/components/wifi-settings/configuration/sponsors'

import WifiSettingsParameters from '@/components/wifi-settings/paramenters/index'
import WifiSettingsParametersGuest from '@/components/wifi-settings/paramenters/guest'
import WifiSettingsParametersSecured from '@/components/wifi-settings/paramenters/secured'

import WifiSettingsAuthorizationListing from '@/components/wifi-settings/authorization-listing'

export default [
  {
    path: 'wifi/settings',
    redirect: 'wifi/settings/guest-wifi',
    name: 'WifiConfiguration',
    component: WifiConfiguration,
    children: [
      {
        path: 'guest-wifi',
        name: 'WifiConfigurationGuest',
        component: WifiConfigurationGuest
      },
      {
        path: 'access-ticket',
        name: 'WifiConfigurationTicket',
        component: WifiConfigurationTicket
      },
      {
        path: 'multiple-access',
        name: 'WifiConfigurationMultipleAccess',
        component: WifiConfigurationMultipleAccess
      },
      {
        path: 'sponsored',
        name: 'WifiConfigurationSponsors',
        component: WifiConfigurationSponsors
      }
    ]
  },
  {
    path: 'wifi/authorization-parameters',
    redirect: 'wifi/authorization-parameters/guest',
    name: 'WifiSettingsParameters',
    component: WifiSettingsParameters,
    children: [
      {
        path: 'guest',
        name: 'WifiSettingsParametersGuest',
        component: WifiSettingsParametersGuest
      },
      {
        path: 'secured',
        name: 'WifiSettingsParametersSecured',
        component: WifiSettingsParametersSecured
      }
    ]
  },
  {
    path: 'wifi/authorization-listing',
    name: 'WifiSettingsAuthorizationListing',
    component: WifiSettingsAuthorizationListing
  }
]
