import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import Navbar from '../components/navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/footer';
import CourseCards from "../components/CourseCards";
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";


const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
            setIsOpen(!isOpen)
    }
    

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Services/>
        <CourseCards/>
        <Footer/>
        </>

    );
};
export default Home;
