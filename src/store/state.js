export default {
  currentUser: {},
  serverRegistrationErrorMessage: {
    message: '',
    visible: false
  },
  serverRegistrationSuccessMessage: {
    message: '',
    visible: false
  },
  serverLoginErrorMessage: {
    message: '',
    visible: false
  },
  serverResetPassErrorMessage: {
    message: '',
    visible: false
  },
  serverResetPassSuccessMessage: {
    message: '',
    visible: false
  },
  passwordResetResult: {},
  groupAndSiteFileStructure: [
    // folder folder_open create_new_folder file_copy place description public
    {
      text: 'Etam Group',
      iconOpen: 'public',
      iconClosed: 'public',
      parent: true,
      draggable: false,
      selected: true,
      children: [
        {text: 'file 1', iconOpen: 'place', iconClosed: 'place', droppable: false},
        {text: 'file 2', iconOpen: 'place', iconClosed: 'place', droppable: false},
        {text: 'file 3', iconOpen: 'place', iconClosed: 'place', droppable: false},
        {
          text: 'folder 1',
          iconOpen: 'folder',
          iconClosed: 'folder',
          children: [
            {text: 'file 4', iconOpen: 'place', iconClosed: 'place', droppable: false}
          ]
        }
      ]
    }
  ],
  equipmentDetails: false,
  tagsMenu: false,
  moveMenu: false,
  drawer: true,
  notificationPanel: false,
  devices: [],
  users: [],
  organizations: [],
  wifiAuthorizationListing: [],
  countries: [],
  menu: [],
  isMobile: false,
  pointerIsTouch: false,
  windowSize: {},
  showActivityIndicator: false
}
