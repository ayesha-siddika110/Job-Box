

import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/LottieImages/register.json'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/Firebase.init';
import SigninWithGoogle from '../Login/signinWithGoogle';
const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister =(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,email,password);

        createUser(email,password)
        .then(res=>{
            console.log(res);
             const updateData = {
                displayName: name
             }
            updateProfile(auth.currentUser, updateData)
            .then(res=> console.log(res)
            )
            .catch(err=>{
                console.log(err.message);
                
            })
            
        })
        .catch((err)=>{
            console.log(err);
            
        })

        

    }
    return (
        <div>
            <div className='flex justify-center items-center lg:ml-[300px]'>
                <div className='w-[400px] hidden lg:flex'><Lottie animationData={loginLottie}></Lottie></div>

                <form onSubmit={handleRegister} className='lg:w-[40%] md:w-[70%] w-[90%] m-auto space-y-6 border p-6 bg-white my-14 shadow-xl rounded-md'>
                    <p className='text-4xl text-center font-semibold'>Register</p>

                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input type="text" name='name' className="grow" placeholder="Enter Your Name" />
                    </label>



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
                    <button className='bg-blue-600 w-full py-3 rounded-lg text-white font-semibold'>Register</button>
                    <p className='text-center'>----------OR-----------</p>
                    {/* <div className='flex justify-center items-center gap-4'>
                        <img className='w-10' src={googlelogo} alt="" />
                        <img className='w-10' src={facebooklogo} alt="" />
                        <img className='w-10' src={twitterlogo} alt="" />

                    </div> */}
                    <SigninWithGoogle></SigninWithGoogle>
                    <p>Already have an account? please<Link to="/login" className='font-semibold underline text-blue-600'>Login</Link></p>

                </form>
            </div>

        </div>
    );
};

export default Register;