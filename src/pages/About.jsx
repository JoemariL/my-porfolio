import React from 'react';

// Pages import
import ProfileTab from "./aboutComponents/profile";
import SkillsTab from "./aboutComponents/skills";
import ExperienceTab from "./aboutComponents/experience";
import ContactTab from "./aboutComponents/contact";

const About = () => {
  return (
    <div className="mx-auto place-content-center text-gray-50">

      {/* Picture and description section */}
      <ProfileTab />

      {/* Skills section */}
      <SkillsTab />

      {/* Experience section */}
      <ExperienceTab />
      {/* About section */}
      <ContactTab />

    </div>
  )
}

export default About;