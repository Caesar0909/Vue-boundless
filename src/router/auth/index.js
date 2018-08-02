import Register from '@/components/registration/registration'

import Login from '@/components/login/login'
import Callback from '@/components/login/callback'
import ForgotPassword from '@/components/login/forgot-password'
import ResetPassword from '@/components/login/reset-password'

import RegisterAuth0 from '@/components/registration-auth0/registration'

import LoginAuth0 from '@/components/login-auth0/login'
import CallbackAuth0 from '@/components/login-auth0/callback'
import ForgotPasswordAuth0 from '@/components/login-auth0/forgot-password'
import ResetPasswordAuth0 from '@/components/login-auth0/reset-password'

export default [
  {
    path: '/sign-up',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/reset-password/:uidb64/:token',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/auth0/sign-up',
    name: 'RegisterAuth0',
    component: RegisterAuth0
  },
  {
    path: '/auth0/login',
    name: 'LoginAuth0',
    component: LoginAuth0
  },
  {
    path: '/auth0/callback',
    name: 'CallbackAuth0',
    component: CallbackAuth0
  },
  {
    path: '/auth0/forgot-password',
    name: 'ForgotPasswordAuth0',
    component: ForgotPasswordAuth0
  },
  {
    path: '/auth0/reset-password',
    name: 'ResetPasswordAuth0',
    component: ResetPasswordAuth0
  }
]
