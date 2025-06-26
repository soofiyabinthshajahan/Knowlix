// ServiceSection.tsx
import styled from "styled-components";
import { FiZap, FiUsers, FiMonitor } from "react-icons/fi";

const Section = styled.section`
  background-color: #10382d;
  padding: 80px 10%;
  color: #e4f2ec;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  color: #e4f2ec;
`;

const SubTitle = styled.h4`
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #a8d3c1;
  font-size: 0.9rem;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const ServiceGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

const ServiceCard = styled.div`
  flex: 1 1 30%;
  min-width: 250px;
  padding: 20px;
  border-left: 2px solid #a8d3c1;
  transition: all 0.3s ease;

  &:hover {
    border-color: #56c598;
  }

  svg {
    color: #56c598;
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #e4f2ec;
    margin-bottom: 12px;
  }

  p {
    font-size: 0.95rem;
    color: #cce8dc;
    line-height: 1.6;
  }
`;

export default function ServiceSection() {
  return (
    <Section>
      <SubTitle>WHY CHOOSE US?</SubTitle>
      <Title>Find your perfect fit & grow with us</Title>
      <ServiceGrid>
        <ServiceCard>
          <FiMonitor />
          <h3>Focus & Productivity</h3>
          <p>
            Escape distractions in our thoughtfully crafted digital spaces,
            where clarity meets creativity.
          </p>
        </ServiceCard>
        <ServiceCard>
          <FiZap />
          <h3>Spark Innovation</h3>
          <p>
            Collaborate and build with minds alike in our coding labs and
            interactive workshops.
          </p>
        </ServiceCard>
        <ServiceCard>
          <FiUsers />
          <h3>Supportive Community</h3>
          <p>
            Get mentored by industry experts and connect with peers to scale
            your skills and success.
          </p>
        </ServiceCard>
      </ServiceGrid>
    </Section>
  );
}
