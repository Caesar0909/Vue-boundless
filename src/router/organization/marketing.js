import Campaigns from '@/components/campaigns/list'
import CampaignEdit from '@/components/campaigns/edit'
import SplashPages from '@/components/splash-pages/list'
import SplashPageEdit from '@/components/splash-pages/edit'

export default [
  {
    path: 'marketing/campaigns',
    name: 'Campaigns',
    component: Campaigns
  },
  {
    path: 'marketing/campaigns/:id/edit',
    name: 'CampaignsEdit',
    component: CampaignEdit
  },
  {
    path: 'marketing/splash-pages',
    name: 'SplashPages',
    component: SplashPages
  },
  {
    path: 'marketing/splash-pages/:id/edit',
    name: 'SplashPagesEdit',
    component: SplashPageEdit
  }
]
