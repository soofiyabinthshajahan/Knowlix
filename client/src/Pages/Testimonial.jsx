import styled from "styled-components";

const testimonials = [
  {
    quote:
      "My Tutor’s guidance proved to be a game-changer, and we're grateful for their support.",
    name: "Adil S/O Muhammad",
    company: "Commerce Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Adil S/O Muhammad",
        comment:
          "My son faced challenges in Accountancy, but My Tutor’s helpful tutors helped him improve remarkably. He gained confidence within days!",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "We are so grateful to My Tutor for making this incredible transformation possible!",
    name: "Adhila D/O Sajna",
    company: "Science Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Adhila D/O Sajna",
        comment:
          "Physics was tough for my daughter, but thanks to My Tutor's expert tutors and their 24x7 support, she now loves the subject and excels in it.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "After a few days, he mastered the subject’s basics, and now he is able to write and read Hindi easily.",
    name: "Aflah S/O Sulaiman",
    company: "Class 9 Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Aflah S/O Sulaiman",
        comment:
          "My son had a weak base in Hindi, but after joining My Tutor’s Hindi Foundation course, he quickly picked up reading and writing skills.",
        stars: 5,
      },
    ],
  },
  {
    quote:
      "A top-notch educational resource that makes complex topics easy to understand!",
    name: "Fathima",
    company: "Plus One Science Student",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Fathima",
        comment:
          "The platform is excellent! Classes are engaging, instructors are knowledgeable, and everything is simple to navigate. I highly recommend it.",
        stars: 5,
      },
    ],
  },
];

const Wrapper = styled.section`
  background: #062e26;
  color: #fff;
  padding: 60px 2%;
  font-family: sans-serif;
`;

const TestimonialsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background: #0a3e33;
  padding: 30px 20px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.blockquote`
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Author = styled.div`
  font-weight: bold;
  color: #9ee3d8;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #ffffff20;
`;

const Feedback = styled.div`
  background: #113c32;
  padding: 15px;
  border-radius: 10px;
  color: #dff5f0;
  margin-top: auto;
`;

const StarRating = styled.div`
  color: gold;
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

const Footer = styled.footer`
  background: #041f1a;
  color: #cde8e0;
  padding: 30px 5%;
  margin-top: 60px;
  font-size: 0.95rem;
  border-top: 1px solid #0d3b31;
`;

const FooterLinks = styled.div`
  text-align: center;
  margin-bottom: 15px;
  a {
    color: #9ee3d8;
    margin: 0 10px;
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: #ffffff;
    }
  }
`;

const Address = styled.address`
  text-align: center;
  font-style: normal;
  line-height: 1.5;
  color: #a3dcd2;
`;

const TestimonialPage = () => {
  return (
    <>
      <Wrapper>
        <TestimonialsRow>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx}>
              {/* <Image src={t.image} alt={t.name} /> */}
              <Quote>"{t.quote}"</Quote>
              {t.feedbacks.map((fb, i) => (
                <Feedback key={i}>
                  <p>{fb.comment}</p>
                  <Author>
                    {t.name}, {t.company}
                  </Author>
                  <StarRating>{"★".repeat(fb.stars)}</StarRating>
                </Feedback>
              ))}
            </TestimonialCard>
          ))}
        </TestimonialsRow>
      </Wrapper>

      <Footer>
        <FooterLinks>
          <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
          <a href="/about">About</a> | <a href="/contact">Contact</a>
        </FooterLinks>
        <Address>
          NEOSPACE II BUILDING KINFRA TECHONO INDUSTRIAL PARK,
          <br />
          Calicut University, Malappuram, Tirurangadi,
          <br />
          Kerala, India, 673635
        </Address>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          © {new Date().getFullYear()} Knowlix Learning. All rights reserved.
        </div>
      </Footer>
    </>
  );
};

export default TestimonialPage;
