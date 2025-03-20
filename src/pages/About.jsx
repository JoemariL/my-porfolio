import React from 'react';

// Pages import
import ProfileTab from "./aboutComponents/profile";
import SkillsTab from "./aboutComponents/skills";
import ExperienceTab from "./aboutComponents/experience";
import ContactTab from "./aboutComponents/contact";

const About = () => {
  return (
    <div className="mx-auto place-content-center text-gray-100">
      <ProfileTab />
      <SkillsTab />
      <ExperienceTab />
    </div>
  )
}

export default About;