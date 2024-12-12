
import Lottie from "lottie-react";
import banner from '../../../assets/LottieImages/banner.json'

const Hero = () => {
    return (
        <div className='flex justify-center items-center py-16'>
            <div className='text-blue-600 font-semibold text-5xl lg:w-[60%] space-y-6'>Find Your Dream Job Today <br /><p className='text-base text-gray-600'>&quot;Discover thousands of job opportunities across various industries and locations. Whether you&apos;re a fresh graduate or an experienced professional, our platform makes it easy to find the perfect role that suits your skills and career goals.&quot;</p></div>
            <div className='lg:w-[40%]'>

            <Lottie animationData={banner}  loop={true} />
            </div>

            
        </div>
    );
};

export default Hero;