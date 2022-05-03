import { SignIn, SignUp } from './Content'

export const SignIn_SignUp = () => {
    return(
        <div>
            <div className='sign_wrapper'>
                <div className='left'>
                    <h2>Sign In</h2>
                    <SignIn />
                </div>
                <div className='middle'>

                </div>
                <div className='right'>
                    <h2>Sign Up</h2>
                    <SignUp />
                </div>
            </div>
        </div>
    )
}