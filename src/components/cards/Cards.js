import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";
import DummyCardImage from "../../assets/images/hero-image-2.jpeg";
import { CalendarEdit } from "@styled-icons/fluentui-system-regular/CalendarEdit";

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  position: relative;
  max
`;

const CardImage = styled.div`
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  font-size: 0;
  height: auto;
  @media only screen and (min-width: 768px) {
    width: 42%;
    border-radius: 0px 10px 10px 0px;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    @media only screen and (min-width: 768px) {
      background-color: var(--clr-bg-light);
    }
  }
`;

const CardContainer = styled.div`
  background-color: var(--clr-bg-light);
  line-height: 1.6;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  p {
    color: var(--clr-bg-dark);
    font-size: clamp(0.9rem, 3vw, 1.2rem);
  }
  @media only screen and (min-width: 768px) {
    width: 58%;
  }
`;

const CardBody = styled.ul`
  padding-top: 0.5rem;
`;

const CardIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
`;

const EditShift = styled(CalendarEdit)`
width 30px;
margin-right: .3rem;
fill: var(--clr-primary-color);
&:hover{
  background: none;
}
`;
const Cards = () => {
  return (
    <React.Fragment>
      <CardWrapper className="flex__container--row-reverse">
        <CardIconContainer className="flex__container--h-end">
          <StyledButton svg_interactive>
            <EditShift aria-hidden />
          </StyledButton>
        </CardIconContainer>
        <CardImage>
          <img src={DummyCardImage} alt="" loading="eager" />
        </CardImage>
        <CardContainer className="flex__container--column-center">
          <p className="content--bold">Library District</p>
          <p>*Plese arrive to your shift 15mins early</p>
          <div className="flex__container--between">
            <CardBody>
              <li className="content--bold">Shift Period</li>
              <li className="content">8am - 11am</li>
            </CardBody>
            <CardBody>
              <li className="content--bold">Shift Hrs</li>
              <li className="content">3hrs</li>
            </CardBody>
            <StyledButton full_details>Full Details</StyledButton>
          </div>
        </CardContainer>
      </CardWrapper>
    </React.Fragment>
  );
};

export default Cards;
