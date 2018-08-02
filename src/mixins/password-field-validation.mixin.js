import { required, minLength } from 'vuelidate/lib/validators'

import ErrorHandlerMixin from './error-handler.mixin'

let PasswordFieldValidationMixin = {
  mixins: [
    ErrorHandlerMixin
  ],
  validations: {
    password: {
      required,
      minLength: minLength(8)
    },
    password2: {
      required
    }
  },
  computed: {
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Password must be at least 8 characters')
      !this.$v.password.required && errors.push('Password is required')
      return errors.length > 0 ? errors : this.getErrorMessages('password')
    },
    password2Errors () {
      const errors = []
      if (!this.$v.password2.$dirty) return errors
      !this.$v.password.required && errors.push('Please confirm password')
      this.password !== this.password2 && errors.push('Passwords did not match')
      return errors.length > 0 ? errors : this.getErrorMessages('password2')
    }
  }
}

export default PasswordFieldValidationMixin
