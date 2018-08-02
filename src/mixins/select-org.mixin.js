// This mixin is responsible for setting active Organization
// and redirecting to the correct url based on the selected Organization.
import Ls from '@/services/ls'

import {mapActions, mapGetters} from 'vuex'

let SelectOrgMixin = {
  computed: {
    ...mapGetters('organization', ['organizations', 'selectedOrganization', 'hasOrganization'])
  },
  methods: {
    ...mapActions('organization', ['selectOrganization', 'fetchOrganizations']),
    redirectToOrg (org) {
      // If the current page is under Org page and the user
      // selects a new Org, we will redirect the user
      // to the new url with the new Org id
      const paramOrgId = this.$route.params.orgId
      if ((paramOrgId && paramOrgId !== org.id) || !paramOrgId) {
        let name = this.$route.name
        const params = {...this.$route.params}

        params.orgId = org.id
        // If the user comes from the following paths,
        // we will redirect them to `OrganizationHome`
        if (['/', '/login', '/sign-up'].includes(this.$route.path)) {
          name = 'OrganizationHome'
        }

        this.$router.push({name: name, params: params})
      }
    },
    getOrgById (id) {
      /*
        Gets org from the given id
      */
      return this.organizations.find(org => {
        return org.id === id
      })
    },
    selectOrgById (id) {
      /*
        Gets the org by the given id and sets selected org both from the store and local storage
      */
      const selectedOrg = this.getOrgById(Number.parseInt(id))
      this.selectOrganization(selectedOrg)
      this.redirectToOrg(selectedOrg)
    },
    selectActiveOrganization () {
      /*
        This tries to select the active/selected organization by the following process:

        1. Try to get `orgId` from url parameter `/orgId/path/another`
          - this is useful when the user copy the url and open it in a new tab
          or send it to another user
        2. Try to get `orgId` from local storage
          - this occurs when an authenticated user visits the home page without
          orgId in the url, we'll get the id from storage and redirect the user
        3. Before redirecting, we will update the selected org both from the store
        and local storage from the selected id
        4. If we can't get the id, we'll redirect the user to login page.
      */
      if (this.hasOrganization) {
        let orgId = Number.parseInt(this.$route.params.orgId)
        if (!orgId) {
          orgId = Number.parseInt(Ls.get('organization'))
        }

        let org = this.getOrgById(orgId)

        if (!org) {
          org = this.organizations[0]
        }

        if (org) {
          this.selectOrganization(org)
          this.redirectToOrg(org)
        } else {
          this.$router.push({name: 'login'})
        }
      } else {
        this.$router.push({name: 'Home'})
      }
    }
  }
}

export default SelectOrgMixin
