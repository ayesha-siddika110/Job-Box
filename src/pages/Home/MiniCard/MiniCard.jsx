
import { motion } from "framer-motion";

const MiniCard = () => {
    return (
        <div className='py-5 flex'>

            <motion.div 
            whileHover={{scale: 1.1}}
            whileTap={50}
            className='py-3 px-6 shadow-lg border rounded-lg w-[250px] mr-8'><p>hello Jobs !👼</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></motion.div>
            <motion.div 
            whileHover={{scale: 1.1}}
            whileTap={50}
           
            className='py-3 px-6 shadow-lg border rounded-lg w-[250px] mr-8'><p>hello Jobs !👼</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></motion.div>
            <motion.div 
            whileHover={{scale: 1.1}}
            whileTap={50}
            className='py-3 px-6 shadow-lg border rounded-lg w-[250px] mr-8'><p>hello Jobs !👼</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></motion.div>
            <motion.div 
            whileHover={{scale: 1.1}}
            whileTap={50}
            className='py-3 px-6 shadow-lg border rounded-lg w-[250px] mr-8'><p>hello Jobs !👼</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></motion.div>
            
            
        </div>
    );
};

export default MiniCard;