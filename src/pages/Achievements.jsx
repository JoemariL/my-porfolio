import React from 'react';

import AchievementsTab from "./achievementsComponents/achievements";
import CertificationsTab from './achievementsComponents/certifications';

const Achievements = () => {
  return (
    <div className="mx-auto place-content-center text-gray-50">
        <AchievementsTab />
        <CertificationsTab />
    </div>
  )
}

export default Achievements;