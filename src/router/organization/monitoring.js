
import WifiAnalytics from '@/components/monitoring/wifi-analytics/index'

export default [
  {
    path: 'monitoring/wifi-analytics',
    name: 'WifiAnalytics',
    component: WifiAnalytics,
    children: [
      {
        path: '/:time/:group',
        name: 'WifiAnalyticsSearch',
        component: WifiAnalytics
      }
    ]
  }
]
