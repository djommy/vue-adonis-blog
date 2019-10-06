'use strict';

class Register {
  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required',
      username: 'required|min:5|unique:users',
    }
  }

  get messages() {
    return {
      'email.required': 'The email field is required',
      'email.email': 'Email needs to be a valid email',
      'email.unique': 'Email already exists',
      'password.required': 'Password is required',
      'password.min': 'Password must be at least 5 characters',
      'password.confirmed': 'The password fields do not match',
      'username.required': 'Username is required',
      'username.min': 'Username must have at least 5 characters',
      'username.unique': 'Username not available'
    }
  }
}

module.exports = Register
