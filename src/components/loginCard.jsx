import React from 'react'
import ButtonComp from './buttonComp'
import InputComp from './InputComp'

function LoginCard() {
    return (
        <div>
            <div className='col-5 m-auto shadow rounded p-5'>
                <center className='mb-3'>Login</center>
                <form>
                    <div className='row justify-content-between align-items-center'>
                        <InputComp
                            title='Name'
                            placeholder='please enter your name'
                            type='text'
                        />
                        <InputComp
                            title='Email Address'
                            placeholder='please enter your email address'
                            type='email'
                        />
                        <InputComp
                            title='Password'
                            placeholder='please enter your password'
                            type='password'
                        />
                    </div>
                    <ButtonComp
                        name="Submit"
                        color="success"
                    />
                </form>
            </div>
        </div>
    )
}

export default LoginCard