import NewOrganization from '@/components/organization/new/new'
import NewOrganizationStep1 from '@/components/organization/new/new-step1'
import NewOrganizationStep2 from '@/components/organization/new/new-step2'

export default [
  {
    path: '/organization/new',
    name: 'NewOrganization',
    component: NewOrganization
  },
  {
    path: '/organization/new/step1',
    name: 'NewOrganizationStep1',
    component: NewOrganizationStep1
  },
  {
    path: '/organization/new/step2',
    name: 'NewOrganizationStep2',
    component: NewOrganizationStep2
  }
]
