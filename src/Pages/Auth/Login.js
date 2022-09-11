import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div class="auth-content my-auto">
      <div class="text-center">
        <h5 class="mb-0 font-weight-normal">Welcome Back!</h5>
        <h5 class="mt-2">Sign in to continue to IVR Panel.</h5>
      </div>
      <form class="mt-3 pt-2" action="parent-registration.html">
        <div class="mb-3">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-control" id="email"
            placeholder="Enter Email Address" />
        </div>
        <div class="mb-2">
          <div class="d-flex align-items-start">
            <div class="flex-grow-1">
              <label class="form-label">Password</label>
            </div>
            <div class="flex-shrink-0">
              <div class="">
                  <Link to="/auth/forget-password" class="text-muted">Forgot password?</Link>
              </div>
            </div>
          </div>
          <div class="input-group auth-pass-inputgroup">
            <input type="password" class="form-control"
              placeholder="Enter password" aria-label="Password"
              aria-describedby="password-addon" />
            <button class="btn btn-light shadow-none ms-0" type="button"
              id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
          </div>
        </div>
        <div class="row mb-4">
          {/* <div class="col">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox"
                    id="remember-check">
                    <label class="form-check-label" for="remember-check">
                      Remember me
                    </label>
                </div>
              </div> 
          */}

        </div>
        <div class="mb-3">
          <button class="btn btn-primary w-100 waves-effect waves-light"
            type="submit">Log In</button>
        </div>
      </form>
    </div>
  )
}
