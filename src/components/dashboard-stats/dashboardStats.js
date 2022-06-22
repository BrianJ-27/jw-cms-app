import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
  background-color: var(--clr-bg-light);
`;

const DashBoardStats = styled.div`
  padding: 20px 15px;
`;

const dashboardStats = () => {
  let today = new Date().toDateString();
  let currrentTime = new Date().toLocaleTimeString(); // for now
  return (
    <React.Fragment>
      <StatsContainer className="flex__container--around">
        <DashBoardStats>
          <p className="content__header-dash">Congregation</p>
          <p className="content__stats">East Tampa</p>
        </DashBoardStats>
        <DashBoardStats>
          <p className="content__header-dash">Today</p>
          <p className="content__stats">{today}</p>
        </DashBoardStats>
        <DashBoardStats>
          <p className="content__header-dash">Now</p>
          <p className="content__stats">{currrentTime}</p>
        </DashBoardStats>
      </StatsContainer>
    </React.Fragment>
  );
};

export default dashboardStats;
