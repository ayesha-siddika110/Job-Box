import Jobs from "../../componants/JobsDay/Jobs";
import Hero from "./Hero/Hero";
import MiniCard from "./MiniCard/MiniCard";


const Home = () => {
    return (
        <div className="w-[80%] m-auto">
            <Hero></Hero>
            <MiniCard></MiniCard>
            <Jobs></Jobs>
            
        </div>
    );
};

export default Home;