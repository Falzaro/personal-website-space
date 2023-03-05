import styles from '../styles';

const StartSteps = ({ feature }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} rounded-[24px] bg-[#323F5D] p-4`}>
      <p className="font-bold text-[20px] text-white">{feature.title}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {feature.techs.join(', ')}
    </p>
  </div>
);

export default StartSteps;
