import {isName, isNumber, isEmail} from './functions'

let nameRules = (fieldName) => [
  v => !!v || `${fieldName} is required`,
  v => isName(v) || `${fieldName} must be valid`
]

let emailRules = () => [
  v => !!v || 'E-mail is required',
  v => isEmail(v) || 'E-mail must be valid'
]

let numberRules = (fieldName) => [
  v => !!v || `${fieldName} is required`,
  v => isNumber(v) || `${fieldName} must be valid`
]

let passwordRules = (password, password2) => {
  let passRules = [
    (v) => !!v || 'Password is required',
    (v) => v.length >= 8 || 'At least 8 characters',
    () => password === password2 || 'Passwords do not match'
  ]

  if (password2 !== null) {
    passRules.push(() => password === password2)
  }

  return passRules
}

let requiredField = (message) => [
  v => !!v || message
]

let maxCharCount = (v, s) => [
  (v) => v ? v.length <= s || `Max ${s} characters` : ''
]

export {
  nameRules,
  emailRules,
  numberRules,
  passwordRules,
  requiredField,
  maxCharCount
}
