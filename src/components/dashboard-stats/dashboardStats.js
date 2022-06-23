import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  margin: 2rem 1rem 0rem;
  background-color: var(--clr-bg-light);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  /* rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px; */
`;

const StatsWrapper = styled.div`
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
`;

const DashBoardStats = styled.div`
  padding: 20px 15px;
`;

const dashboardStats = () => {
  let today = new Date().toDateString();
  let currrentTime = new Date().toLocaleTimeString(); // for now
  return (
    <React.Fragment>
      <StatsContainer>
        <StatsWrapper className="flex__container--around">
          <DashBoardStats>
            <p className="content--bold">Congregation</p>
            <p className="content">East Tampa</p>
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
