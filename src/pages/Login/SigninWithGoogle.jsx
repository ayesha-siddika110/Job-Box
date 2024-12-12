import  { useContext } from 'react';
import googlelogo from '../../assets/icon/icons8-google-48.png'
import twitterlogo from '../../assets/icon/icons8-twitter-48.png'
import githublogo from '../../assets/icon/icons8-github-48.png'
import { AuthContext } from '../../AuthProvider/AuthProvider';
const SigninWithGoogle = () => {
    const {signInWithGoogle,signIntWitter,signInGithub} = useContext(AuthContext)
    const hangleGoogleLogin =()=>{
        signInWithGoogle()
        .then(data=> console.log(data)
        ).catch(err=>console.log(err.message)
        )
    }
    const hangletwitterLogin =()=>{
        signIntWitter()
        .then(data=> console.log(data)
        ).catch(err=>console.log(err.message)
        )
    }
    const handleGithubLogin =()=>{
        signInGithub()
        .then(res=>console.log(res)
        ).catch(err=> console.log(err.message)
        )

    }

    return (
         <div className='flex justify-center items-center gap-4'>
                                <img onClick={hangleGoogleLogin} className='w-10' src={googlelogo} alt="" />
                                <img onClick={handleGithubLogin}  className='w-12' src={githublogo} alt="" />
                                <img onClick={hangletwitterLogin} className='w-10' src={twitterlogo} alt="" />
        
                            </div>
    );
};

export default SigninWithGoogle;