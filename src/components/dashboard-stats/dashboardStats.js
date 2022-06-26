import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  margin: 2rem 1rem 0rem;
  background-color: var(--clr-bg-light);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (min-width: 768px) {
    box-shadow: none;
    background-color: transparent;
  }
`;

const StatsWrapper = styled.div`
  padding: 0.5rem;
`;

const DashBoardStats = styled.div`
  padding: 20px 25px;
  @media only screen and (min-width: 768px) {
    background-color: var(--clr-bg-light);
    border-radius: 15px;
    width: 300px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const dashboardStats = ({ congregation }) => {
  let today = new Date().toDateString();
  let currrentTime = new Date().toLocaleTimeString(); // for now
  return (
    <React.Fragment>
      <StatsContainer>
        <StatsWrapper className="flex__container--around ctr__txt">
          <DashBoardStats>
            <p className="content--bold">Congregation</p>
            <p className="content">{congregation}</p>
          </DashBoardStats>
          <DashBoardStats>
            <p className="content--bold">Today</p>
            <p className="content">{today}</p>
          </DashBoardStats>
          <DashBoardStats>
            <p className="content--bold">Now</p>
            <p className="content">{currrentTime}</p>
          </DashBoardStats>
        </StatsWrapper>
      </StatsContainer>
    </React.Fragment>
  );
};

export default dashboardStats;
