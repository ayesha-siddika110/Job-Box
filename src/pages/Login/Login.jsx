
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/LottieImages/login.json'
import SigninWithGoogle from './signinWithGoogle';

const Login = () => {
    const handleSignIn =(e)=>{
        e.preventDefault()

    }
    return (
        <div className='flex justify-center items-center lg:ml-[300px]'>
            <div className='w-[400px] hidden lg:flex'><Lottie animationData={loginLottie}></Lottie></div>

        <form onSubmit={handleSignIn}  className='lg:w-[40%] md:w-[70%] w-[90%] m-auto space-y-6 border p-6 bg-white my-14 shadow-xl rounded-md'>
            <p className='text-4xl text-center font-semibold'>Login</p>
           
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" name='email' className="grow" placeholder="Email" />
            </label>
            
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input type="password" name='password' className="grow" placeholder="password" />
            </label>
            <button className='bg-blue-600 w-full py-3 rounded-lg text-white font-semibold'>Login</button>
            <p className='text-center'>----------OR-----------</p>
            {/* <div className='flex justify-center items-center gap-4'>
                <img className='w-10' src={googlelogo} alt="" />
                <img className='w-10' src={facebooklogo} alt="" />
                <img className='w-10' src={twitterlogo} alt="" />

            </div> */}
            <SigninWithGoogle></SigninWithGoogle>
            <p>Don&apos;t have any Account please <Link to="/register" className='font-semibold underline text-blue-600'>Register</Link></p>

        </form>
        </div>
    );
};

export default Login;