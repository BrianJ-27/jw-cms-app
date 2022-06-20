import HeroImage from "../../assets/images/hero-image.jpeg";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

const HeroImg = () => {
  return <StyledImage src={HeroImage} alt="" />;
};

export default HeroImg;
