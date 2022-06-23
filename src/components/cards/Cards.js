import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Edit } from "@styled-icons/feather/Edit";

const CardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const CardImage = styled.div`
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  max-height: 100%;
  max-width: 100%;
  font-size: 0;
  height: auto;
  img {
    object-fit: contain;
    height: auto;
    width: 100%;
  }
`;

const CardContainer = styled.div`
  background-color: var(--clr-bg-light);
  line-height: 1.6;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  p {
    color: var(--clr-bg-dark);
  }
`;

const CardBody = styled.ul`
  padding-top: 0.5rem;
`;

const CardIconContainer = styled.div`
  padding-bottom: 0.5rem;
`;

const AddShift = styled(Add)`
 width 25px;
 margin-right: .5rem;
 fill: var(--clr-bg-dark);
`;

const EditShift = styled(Edit)`
width 25px;
margin-right: 1rem;
fill: var(--clr-bg-dark);
&:hover{
  background: none;
}
`;
const Cards = () => {
  return (
    <React.Fragment>
      <CardWrapper>
        <CardIconContainer className="flex__container--h-end">
          <StyledButton svg_interactive>
            <AddShift aria-hidden />
          </StyledButton>
          <StyledButton svg_interactive>
            <EditShift aria-hidden />
          </StyledButton>
        </CardIconContainer>
        <CardImage>
          <img
            src={require("../../assets/images/hero-image-2.jpeg")}
            alt=""
            loading="lazy"
          />
        </CardImage>
        <CardContainer>
          <p className="content--bold">Library District</p>
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
