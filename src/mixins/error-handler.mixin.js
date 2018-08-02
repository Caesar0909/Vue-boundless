// Mixin for parsing and coverting backend error response
// into an accessible data that can be used to display
// error messages in the form

export default {
  data () {
    return {
      errorData: {}
    }
  },
  methods: {
    clearErrorData () {
      this.errorData = {}
    },
    getErrorMessages (key) {
      /*
        Returns array of error messages based on the given `key`.
      */
      const error = key in this.errorData ? this.errorData[key] : null
      if (error) {
        if (Array.isArray(error)) {
          // if `error` is an array, it would have the format of:
          // [{"message": "Error message", "code": "invalid"}]
          // we only want to return an array of the `message`
          return error.map(item => {
            return 'message' in item ? item.message : []
          })
        } else if (typeof error === 'string') {
          return [error]
        } else if (typeof error === 'object' && 'message' in error) {
          return Array.isArray(error.message) ? error.message : [error.message]
        }
      }
      return []
    },
    setErrorData (err) {
      /*
        Parse error response from backend and sets `errorData`
        from the `detail` key of error response.
        Below is a sample error response format from our backend.

        {
          "reason": "ValidationError",
          "status": 400,
          "code": "invalid",
          "message": "Invalid input.",
          "detail": {
            "email": [{
              "message": "This field must be unique.",
              "code": "unique"
            }]
          }
        }

        This function also handles if `err` is in the wrong format.
      */
      if (err.response && err.response.data && err.response.data.error && err.response.data.error.detail) {
        this.errorData = {...err.response.data.error.detail}
      } else {
        this.clearErrorData()
      }
    }
  }
}
