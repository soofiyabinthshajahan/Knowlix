import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CountUp from "react-countup";

const HomeSection = styled.div`
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;

  background-image: url("/Home.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 768px) {
   height: 85vh; 
  }
 
  @media only screen and (max-width: 480px) {
    background-image: url("https://images.pexels.com/photos/8923045/pexels-photo-8923045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 65vh; /* reduced height for smaller screens */
  }
`;


const HeroWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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

    &:hover {
      background-color: #158a68;
    }
  }

  @media (max-width: 768px) {
    width: 90%;

    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 0.95rem;
      padding: 10px 20px;
    }
  }
`;

const ImpactSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  /* padding: 20px 0; */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ImpactCard = styled.div`
  background: rgba(255, 255, 255, 0.76);
  border-radius: 16px;
  padding: 30px 20px;
  min-width: 220px;
  text-align: center;
  flex: 0 0 auto;
  max-width: 220px;
  margin-left: 10px;
  scroll-snap-align: start;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 20px;
  }

  svg {
    font-size: 2.5rem;
    color: #004c34;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 2rem;
    color: #006c45;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1.05rem;
    color: #006c45;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
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
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Curriculum</p>
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
