import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';

export default function ForgetPassword() {
    const onFinish = (values) => {

    };

    return (
        <div class="auth-content my-auto">
            <div class="text-center">
                <h5 class="mb-0">Reset Password</h5>
            </div>
            <div class="alert alert-success text-center my-4" role="alert">
                Enter your Email and instructions will be sent to you!
            </div>
            {/* <form class="mt-4" action="change-password.html">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div class="mb-3 mt-4">
                    <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Reset</button>
                </div>
            </form> */}

            <Form name="basic" className="mt-4"
                onFinish={onFinish} layout="vertical"
                autoComplete="off" size={"large"}
            >
                <Form.Item className='mb-4'
                    label="Email Address"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder='Enter Email Address' />
                </Form.Item>

                <Form.Item class="mb-3 mt-4">
                    <Button type="primary" htmlType="submit" className="btn btn-primary w-100 waves-effect waves-light">
                        Reset
                    </Button>
                </Form.Item>
            </Form>

            <div class="mt-4 text-center">
                <p class="text-muted mb-0">Remember It ?
                    {/* <a href="index.html" class="text-primary fw-semibold"> Sign In </a> </p> */}
                    <Link to="/auth/login" class="text-primary fw-semibold"> Sign In </Link> </p>
            </div>
        </div>
    )
}
