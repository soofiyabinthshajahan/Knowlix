import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CountUp from "react-countup";

const HomeSection = styled.div`
  width: 100%;
  padding-top: 10vh; 
  background-image: url("/Home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-height: 100vh;
`;

const HeroWrapper = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  gap: 60px;
`;

const HeroContent = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  width: 60%;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    line-height: 1.6;
  }

  button {
    padding: 12px 24px;
    background-color: #477e6a;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const ImpactSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;
  flex-wrap: wrap;
`;

const ImpactCard = styled.div`
  background: rgba(255, 255, 255, 0.76);
  border-radius: 16px;
  padding: 30px 20px;
  min-width: 220px;
  text-align: center;
  flex: 1;
  max-width: 250px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 2.5rem;
    color: #004c34;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2.5rem;
    color: #006c45;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    color: #006c45;
    font-weight: 500;
  }
`;

function Home() {
  return (
    <HomeSection>
      <Header />

      <HeroWrapper>
        <HeroContent>
          <h1>Empowering Students with Smart Online Learning</h1>
          <p>
            Personalized, flexible, and interactive learning designed to help
            students thrive from the comfort of their home.
          </p>
          <button>Grab a Demo &nbsp; →</button>
        </HeroContent>

        <ImpactSection>
          <ImpactCard>
            <h2>
              <CountUp end={4500} duration={3} />+
            </h2>
            <p>Students Enrolled</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={400} duration={3} />+
            </h2>
            <p>Expert Faculties</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Countries</p>
          </ImpactCard>
          <ImpactCard>
        
            <h2>
              <CountUp end={15} duration={3} />+
            </h2>
            <p>States Across India</p>
          </ImpactCard>
          <ImpactCard>
            <h2>
              <CountUp end={2} duration={3} />+
            </h2>
            <p>Years of Experience</p>
          </ImpactCard>
        </ImpactSection>
      </HeroWrapper>
    </HomeSection>
  );
}

export default Home;
