import React from "react";
import styled, { keyframes } from "styled-components";

const SyllabusWrapper = styled.section`
  width: 100%;
  background: rgb(248, 248, 248);
  padding: 40px 0;
  overflow: hidden;
  font-family: "Inter", sans-serif;
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SyllabusSlider = styled.div`
  display: flex;
  width: 200%;
  animation: ${scroll} 30s linear infinite;
`;

const SyllabusTrack = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

const Image = styled.img`
  width: 300px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

function Syllabus() {
  // Add or replace with your syllabus image paths
  const syllabusImages = [
    "/Syllabus1.png",
    "syllabus7.png",
    "/syllabus6.png",
    "/Syllabus2.jpg",
    "/Syllabus3.jpeg",
    "Syllabus4.png",
    "/Syllabus8.jpg",
    "/syllabus5.png",
    "Syllabus9.png",
    "syllabus10.jpg",
    "syllabus11.jpeg",
    "syllabus12.png"
  ];

  // Duplicate array to make the loop seamless
  const scrollingImages = [...syllabusImages, ...syllabusImages];

  return (
    <SyllabusWrapper>
      <div style={{ overflow: "hidden" }}>
        <SyllabusSlider>
          <SyllabusTrack>
            {scrollingImages.map((src, index) => (
              <Image src={src} alt={`Syllabus ${index + 1}`} key={index} />
            ))}
          </SyllabusTrack>
        </SyllabusSlider>
      </div>
    </SyllabusWrapper>
  );
}

export default Syllabus;
