import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  const developerInfo = {
    name: "Daniel Tsagli",
    description: "A passionate web developer with experience in React, JavaScript, and modern web technologies.",
    hobbies: "Exploring new tech trends, contributing to open source, an MC for hire, or enjoying a good book.",
    portfolio: [
      {
        title: "Personal Blog",
        image: "/images/blogimage.png",
        deployedLink: "https://web.us.edusercontent.com/p67muukhjn5bbet7v1djhn2ckg/index.html",
        githubLink: "#"
      },
      {
        title: "Employee Tracker",
        image: "/images/employeetrackerimage.jpg",
        deployedLink: "#",
        githubLink: "https://github.com/dtsagli/employee-tracker"
      }
    ],
    contact: {
      email: "danieltsagli@gmail.com",
      phone: "123-456-7890"
    },
    resume: "/src/assets/uploads/DanielTsaglicv.pdf",
    proficiencies: ["React", "JavaScript", "CSS", "Node.js", "MongoDB"]
  };

  return (
    <div>
      <Header name={developerInfo.name} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        <section id="about" className={activeTab === "about" ? "active" : ""}>
          <h2>About Me</h2>
          <AboutMe bio={developerInfo} />
        </section>
        <section id="portfolio" className={activeTab === "portfolio" ? "active" : ""}>
          <h2>Portfolio</h2>
          <Portfolio projects={developerInfo.portfolio} />
        </section>
        <section id="contact" className={activeTab === "contact" ? "active" : ""}>
          <h2>Contact</h2>
          <Contact contactInfo={developerInfo.contact} />
        </section>
        <section id="resume" className={activeTab === "resume" ? "active" : ""}>
          <h2>Resume</h2>
          <Resume resume={developerInfo.resume} proficiencies={developerInfo.proficiencies} />
        </section>
      </main>

      <Footer name={developerInfo.name} />
    </div>
  );
}

export default App;
