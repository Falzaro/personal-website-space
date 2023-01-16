'use client';

import NetApp from './NetApp';
import SensorDynamix from './SensorDynamix';
import TaborCollege from './TaborCollege';

const Experience = () => (
  <>
    <div className="relative">
      <div className="gradient-03 z-0" />
      <NetApp />
    </div>
    <div className="relative">
      <div className="gradient-04 pointer-events-none z-0" />
      <SensorDynamix />
    </div>
    <div className="relative">
      <TaborCollege />
      <div className="gradient-03 z-0" />
    </div>
  </>
);

export default Experience;
