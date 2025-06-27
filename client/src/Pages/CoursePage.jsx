import { useState, useEffect } from "react";
import styled from "styled-components";

const categories = [
  "Languages",
  "Science",
  "Creative",
  "Technology",
  "Religious",
];

const courses = [
  {
    title: "Python & Django",
    audience: "UG / HS / PG",
    boards: "6 Months",
    students: 400,
    rating: 4.9,
    category: "Technology",
    image:
      "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Data Analytics with Generative AI",
    audience: "UG / HS / PG",
    boards: "6 Months",
    students: 300,
    rating: 4.8,
    category: "Technology",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Prompt Engineering",
    audience: "College Students & Professionals",
    boards: "",
    students: 1200,
    rating: 4.8,
    category: "Technology",
    image:
      "https://fortune.com/img-assets/wp-content/uploads/2024/03/Prompt-engineering-courses-GettyImages-1498577422-e1709762465348.jpg",
  },
  {
    title: "English",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 1200,
    rating: 4.5,
    category: "Languages",
    image:
      "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Malayalam",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 800,
    rating: 4.2,
    category: "Languages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1kaF1gKj-obNogxjiuiIUKvz2rm3ESIwrBA&s",
  },
  {
    title: "Hindi",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 900,
    rating: 4.3,
    category: "Languages",
    image:
      "https://img.freepik.com/free-vector/hindi-font-letters-open-book-hindi-diwas-day-celebration_1017-54685.jpg?semt=ais_hybrid&w=740",
  },
  {
    title: "Maths",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 1500,
    rating: 4.7,
    category: "Science",
    image:
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Physics",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 1100,
    rating: 4.6,
    category: "Science",
    image:
      "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?cs=srgb&dl=pexels-pixabay-60582.jpg&fm=jpg",
  },
  {
    title: "Chemistry",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 1000,
    rating: 4.4,
    category: "Science",
    image:
      "https://images.pexels.com/photos/3825379/pexels-photo-3825379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Arabic",
    audience: "KG to +2",
    boards: "STATE / CBSE / ICSE / IGCSE",
    students: 700,
    rating: 4.1,
    category: "Languages",
    image:
      "https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Drawing Course",
    audience: "All Ages",
    boards: "",
    students: 600,
    rating: 4.0,
    category: "Creative",
    image:
      "https://images.pexels.com/photos/1767016/pexels-photo-1767016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Handwriting Course",
    audience: "All Ages",
    boards: "",
    students: 650,
    rating: 4.2,
    category: "Creative",
    image:
      "https://images.pexels.com/photos/110473/pexels-photo-110473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Qur'an Tuition",
    audience: "All Ages",
    boards: "",
    students: 550,
    rating: 4.6,
    category: "Religious",
    image:
      "https://images.pexels.com/photos/9127603/pexels-photo-9127603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const PageWrapper = styled.section`
  padding: 60px 5%;
  background: #f6fdfc;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #004c3f;
  text-align: center;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 70%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Select = styled.select`
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const ResponsiveCourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: white;
  padding: 16px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0, 64, 32, 0.08);
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
`;

const CourseTitle = styled.h3`
  font-size: 1.2rem;
  color: #002f26;
  margin-bottom: 8px;
`;

const Info = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 2px 0;
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  margin-top: 15px;
  width: 40%;
  background-color: #00735c;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005c49;
  }
`;

const ShowMoreButton = styled.button`
  padding: 12px 24px;
  background-color: #00735c;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 30px auto 0;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005c49;
  }
`;

function CoursePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [visibleCourses, setVisibleCourses] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Reset visible courses when switching between mobile and desktop
      if (window.innerWidth > 768) {
        setVisibleCourses(courses.length);
      } else {
        setVisibleCourses(3);
      }
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "KG-12" &&
        /(KG|\+2|12|STATE|CBSE|ICSE|IGCSE)/i.test(course.audience)) ||
      (filter === "UG/PG" &&
        /(UG|HS|PG|College|Professional)/i.test(course.audience)) ||
      (filter === "All Ages" && /All Ages/i.test(course.audience));

    const matchesCategory = category === "All" || course.category === category;

    return matchesSearch && matchesFilter && matchesCategory;
  });

  const displayCourses = isMobile 
    ? filteredCourses.slice(0, visibleCourses)
    : filteredCourses;

  const handleShowMore = () => {
    setVisibleCourses(prev => prev + 3);
  };

  return (
    <PageWrapper>
      <Title>Our Courses</Title>

      <FilterWrapper>
        <Input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="KG-12">KG to +2</option>
          <option value="UG/PG">UG / PG</option>
          <option value="All Ages">All Ages</option>
        </Select>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </FilterWrapper>

      {filteredCourses.length === 0 ? (
        <Title>No courses found. Try a different search or filter.</Title>
      ) : (
        <>
          <ResponsiveCourseGrid>
            {displayCourses.map((course, index) => (
              <Card key={index}>
                <Image src={course.image} alt={course.title} />
                <CourseTitle>{course.title}</CourseTitle>
                {course.audience && (
                  <Info>
                    <strong>Audience:</strong> {course.audience}
                  </Info>
                )}
                {course.boards && (
                  <Info>
                    <strong>Details:</strong> {course.boards}
                  </Info>
                )}
                <Info>
                  <strong>Students Enrolled:</strong> {course.students}
                </Info>
                <Info>
                  <strong>Rating:</strong> ⭐ {course.rating}
                </Info>
                <Info>
                  <strong>Category:</strong> {course.category}
                </Info>
                <ButtonGroup>
                  <ActionButton>View Details</ActionButton>
                  <ActionButton>Enroll</ActionButton>
                </ButtonGroup>
              </Card>
            ))}
          </ResponsiveCourseGrid>
          
          {isMobile && visibleCourses < filteredCourses.length && (
            <ShowMoreButton onClick={handleShowMore}>
              Show More Courses ({filteredCourses.length - visibleCourses} remaining)
            </ShowMoreButton>
          )}
        </>
      )}
    </PageWrapper>
  );
}

export default CoursePage;