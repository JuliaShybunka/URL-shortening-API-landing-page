import React from "react";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="container">
          <div className="about__top">
            <div className="about__top-title">Advanced Statistic</div>
            <div className="about__top-text">
              Track how your linksare performing across the web with our
              advancsd statistics dashboard.
            </div>
          </div>
          <div className="about__bottom">
            <div className="about__box about__box-1">
              <div className="about__box-title">Brand Recongnition</div>
              <div className="about__box-text">
                Boost your brand recognition with eath click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </div>
            </div>
            <div className="about__box about__box-2">
              <div className="about__box-title">Detailed Records</div>
              <div className="about__box-text">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </div>
            </div>
            <div className="about__box about__box-3">
              <div className="about__box-title">Fully Customizable</div>
              <div className="about__box-text">
                Improve brand awareness and content discoverability throuth
                customizable links, supercharging audience engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
