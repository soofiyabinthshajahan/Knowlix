// About.tsx
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

const AboutWrapper = styled.section`
  width: 100%;
  padding: 6% 8%;
  background: rgb(255 245 238);
  color: #0c2f24;
  font-family: "Inter", sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div``;

const Heading = styled.h2`
  font-size: 2.7rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Subtext = styled.p`
  font-size: 1.1rem;
  color: #2d4236;
  line-height: 1.8;
  max-width: 500px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 500;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;

    span:first-child {
      font-size: 1.6rem;
      font-weight: bold;
      color: #004c34;
    }

    span:last-child {
      color: #444;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  img {
    border-radius: 15px;
    object-fit: cover;
    width: 100%;
    height: 220px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-top: 40px;
  background: none;
  border: none;
  font-size: 1rem;
  color: #004c34;
  font-weight: 600;
  cursor: pointer;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

function AboutSection() {
  return (
    <AboutWrapper>
      <Grid>
        <TextBlock>
          <span
            style={{
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#006c45",
            }}
          >
            Our Story
          </span>
          <Heading>Cultivating a space where learning blooms.</Heading>
          <Subtext>
            Knowlix wasn’t born in a classroom, but from a shared mission. A
            group of passionate educators and learners came together to break
            traditional boundaries. We created an environment that supports
            flexible learning, expert mentorship, and skill-building for every
            student.
          </Subtext>
        </TextBlock>
        <Stats>
        <div>
            <span>10+</span>
            <span>Countries </span>
          </div>
          <div>
            <span>15+</span>
            <span>states across India</span>
          </div>
          <div>
            <span>2+</span>
            <span>years of tutoring experience</span>
          </div>
          <div>
            <span>400+</span>
            <span>dedicated mentors</span>
          </div>
          <div>
            <span>10+</span>
            <span>Curriculum</span>
          </div>
          <div>
            <span>4.5k+</span>
            <span>students enrolled</span>
          </div>
          <div>
            <span>15+</span>
            <span>live interactive courses</span>
          </div>
        </Stats>
      </Grid>

      <ImageGrid>
        <img src="/Home.png" alt="About 1" />
        <img src="/About2.jpg" alt="About 2" />
        <img src="/About3.png" alt="About 3" />
      </ImageGrid>

      <Button>
        View More Photos <FaArrowRight />
      </Button>
    </AboutWrapper>
    
  );
}

export default AboutSection;
