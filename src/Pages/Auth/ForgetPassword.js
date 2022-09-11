import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
    return (
        <div class="auth-content my-auto">
            <div class="text-center">
                <h5 class="mb-0">Reset Password</h5>
            </div>
            <div class="alert alert-success text-center my-4" role="alert">
                Enter your Email and instructions will be sent to you!
            </div>
            <form class="mt-4" action="change-password.html">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div class="mb-3 mt-4">
                    <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Reset</button>
                </div>
            </form>

            <div class="mt-4 text-center">
                <p class="text-muted mb-0">Remember It ?  
                {/* <a href="index.html" class="text-primary fw-semibold"> Sign In </a> </p> */}
                <Link to="/auth/login" class="text-primary fw-semibold"> Sign In </Link> </p>
            </div>
        </div>
    )
}
