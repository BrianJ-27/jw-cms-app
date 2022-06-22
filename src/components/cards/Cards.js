import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Edit } from "@styled-icons/feather/Edit";

const CardWrapper = styled.section`
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
`;

const CardBody = styled.ul`
  padding-top: 0.5rem;
`;

const AddShift = styled(Add)`
 width 20px;
 margin-right: .5rem;
`;

const EditShift = styled(Edit)`
width 20px;
margin-right: 1rem;
`;
const Cards = () => {
  return (
    <>
      <div className="flex__container--between">
        <h2 className="title__secondary">Upcoming Shifts </h2>
        <div className="flex__container--v-end">
          <AddShift />
          <EditShift />
        </div>
      </div>

      <CardWrapper>
        <CardImage>
          <img src={require("../../assets/images/hero-image-2.jpeg")} alt="" />
        </CardImage>
        <CardContainer>
          <p class="content__card-heading">Library District</p>
          <div className="flex__container--between">
            <CardBody>
              <li className="content__card-body">Shift Period</li>
              <li className="content__card-body">8am - 11am</li>
            </CardBody>
            <CardBody>
              <li className="content__card-body">Shift Hrs</li>
              <li className="content__card-body">3hrs</li>
            </CardBody>
            <StyledButton full_details>Full Details</StyledButton>
          </div>
        </CardContainer>
      </CardWrapper>
    </>
  );
};

export default Cards;
