import {passwordRules} from '@/utils/form-fields-validation-rules'

let passwordFieldMatchingValidation = {
  watch: {
    password: {
      handler () {
        // console.log(this.password === this.password2)
        this.passwordRules = passwordRules(this.password, this.password2)
      },
      deep: true
    },
    password2: {
      handler () {
        // console.log(this.password === this.password2)
        this.password2Rules = passwordRules(this.password, this.password2)
      },
      deep: true
    }
  }
}

export default passwordFieldMatchingValidation
