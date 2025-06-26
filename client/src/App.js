import "./Global.css";
import AboutSection from "./Pages/About";
import CoursesPage from "./Pages/CoursePage";
import Home from "./Pages/Home";
import ServiceSection from "./Pages/Service";
import Syllabus from "./Pages/Syllabus";
import TestimonialPage from "./Pages/Testimonial";
import './Global.css'

function App() {
  return (
    <div>
      <Home />
      <Syllabus/>
      <AboutSection />
      <ServiceSection />
      <CoursesPage />
<TestimonialPage/>  
  </div>
  );
}

export default App;
