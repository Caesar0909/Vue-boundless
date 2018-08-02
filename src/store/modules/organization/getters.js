export const organizations = (state) => state.organizations
export const hasOrganization = (state) => state.organizations.length > 0
export const selectedOrganization = (state) => state.selectedOrganization
export const organizationOptions = (state) => state.organizationOptions
export const regionChoices = (state) => {
  if (!state.organizationOptions.data) return []
  const choices = state.organizationOptions.data.actions.POST.region.choices
  return choices.map(item => {
    return {text: item.display_name, value: item.value}
  })
}
export const activityLogs = (state) => state.activityLogs
