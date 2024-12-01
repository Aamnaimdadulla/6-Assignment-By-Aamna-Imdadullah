import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import CoursesCategory from "./components/CoursesCategory";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"; 
import Team from "./components/Team";

const HomePage = () => { 
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CoursesCategory />
      <Achievements />
      <Courses />
     <Team />
      <Footer/>
     
      
    </div>
  );
};

export default HomePage; 
