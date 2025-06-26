import styled from "styled-components";

const testimonials = [
  {
    quote:
      "They brought incredible value to our agency marketplace. With a focus on usability and scalability, they crafted a design system that allows us to easily onboard new agencies.",
    name: "Sophia Chang",
    company: "Microsoft",
    image: "https://via.placeholder.com/300x300",
    feedbacks: [
      {
        name: "Ryan Lee",
        comment:
          "Their approach to our marketplace redesign was spot-on. They crafted a solution that accommodates our platform's growth while providing an intuitive experience for users.",
        stars: 5
      },
      {
        name: "Grace Bell",
        comment:
          "They brought clarity and sophistication to our marketplace design. Now, clients can effortlessly connect with agencies, creating a smoother experience and driving better engagement. We couldn't be happier with the outcome.",
        stars: 5
      },
      {
        name: "Noah Kim",
        comment:
          "Their design transformed our user journey. The platform is now clean, efficient, and visually appealing, making it easier for clients to find the right agencies. Their insights on scalability were a huge plus for our team.",
        stars: 5
      },
      {
        name: "Emily Nguyen",
        comment:
          "From initial concept to final design, they were instrumental in shaping a cohesive, user-friendly platform. Their expertise in marketplace dynamics helped us attract more clients and agencies alike. A game-changer for PartnerMarket!",
        stars: 5
      }
    ]
  }
];

const Wrapper = styled.section`
  background: #062e26;
  color: #fff;
  padding: 60px 5%;
  font-family: sans-serif;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Quote = styled.blockquote`
  flex: 1;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Author = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const Image = styled.img`
  max-width: 300px;
  border-radius: 10px;
`;

const FeedbackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeedbackCard = styled.div`
  background: #0a3e33;
  padding: 20px;
  border-radius: 10px;
  color: #dff5f0;
`;

const StarRating = styled.div`
  color: gold;
  font-size: 1.2rem;
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
        {testimonials.map((t, idx) => (
          <div key={idx}>
            <Header>
              <Quote>
                "{t.quote}"
                <Author>
                  – {t.name}, <span style={{ color: "#9ee3d8" }}>{t.company}</span>
                </Author>
              </Quote>
              <Image src={t.image} alt={t.name} />
            </Header>
            <FeedbackGrid>
              {t.feedbacks.map((fb, i) => (
                <FeedbackCard key={i}>
                  <StarRating>{"★".repeat(fb.stars)}</StarRating>
                  <p style={{ marginTop: "10px" }}>{fb.comment}</p>
                  <p style={{ fontWeight: "bold", marginTop: "12px" }}>{fb.name}</p>
                </FeedbackCard>
              ))}
            </FeedbackGrid>
          </div>
        ))}
      </Wrapper>

      <Footer>
        <FooterLinks>
          <a href="/">Home</a> | <a href="/courses">Courses</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </FooterLinks>
        <Address>
          NEOSPACE II BUILDING KINFRA TECHONO INDUSTRIAL PARK,<br />
          Calicut University, Malappuram, Tirurangadi,<br />
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
