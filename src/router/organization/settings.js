import OrganizationSettings from '@/components/organization/settings/index'
import OrganizationSettingsGeneral from '@/components/organization/settings/general'

import WifiParameters from '@/components/organization/settings/wifi-parameters'

import SocialOauth from '@/components/organization/settings/social-oauth'
import DataExport from '@/components/organization/settings/data-export'
import EmailAndSMS from '@/components/organization/settings/email-and-sms'

import GDPRPortability from '@/components/organization/settings/gdpr'

export default [
  {
    path: 'settings',
    name: 'OrganizationSettings',
    redirect: 'settings/general',
    component: OrganizationSettings,
    children: [
      {
        path: 'general',
        name: 'OrganizationSettingsGeneral',
        component: OrganizationSettingsGeneral
      },
      {
        path: 'wifi-parameters',
        name: 'OrganizationSettingsWifiParameters',
        component: WifiParameters
      },
      {
        path: 'social-oauth',
        name: 'OrganizationSettingsSocialOauth',
        component: SocialOauth
      },
      {
        path: 'data-export',
        name: 'OrganizationSettingsDataExport',
        component: DataExport
      },
      {
        path: 'email-and-sms',
        name: 'OrganizationSettingsEmailAndSMS',
        component: EmailAndSMS
      },
      {
        path: 'gdpr-portability',
        name: 'OrganizationSettingsGDPRPortability',
        component: GDPRPortability
      }
    ]
  }
]
