import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  background-color: var(--clr-primary-color);
  margin: 1rem;
  padding: 1rem;
  overflow: hidden;
  border-radius: 15px;

  span p:nth-child(1) {
    --fp-weight-main: 800;
    font-weight: var(--fp-weight-main);
    font-size: clamp(1.5rem, 6vw, 1.8rem);
    letter-spacing: 1.4px;
    color: var(--clr-bg-light);
  }
  p:nth-of-type(1) {
    --fp-weight-main: 300;
    font-weight: var(--fp-weight-main);
    font-size: clamp(1rem, 6vw, 1.4rem);
    color: var(--clr-bg-light);
    margin-bottom: 0.5rem;
  }
  p:nth-of-type(2) {
    --fp-weight-main: 400;
    font-weight: var(--fp-weight-main);
    font-size: clamp(0.5rem, 6vw, 0.8rem);
    color: var(--clr-bg-light);
    line-height: 1.5;
  }
`;

const dashboardStats = ({ userProfile }) => {
  const firstName = `${userProfile.firstName}`;
  let today = new Date().toDateString();
  return (
    <React.Fragment>
      <StatsContainer>
        <span className="flex__container--v-center">
          <p>Hi {firstName}!</p>
        </span>
        <p>Today: {today}</p>
        <p>
          Welcome to the Cart Ministry Scheduler. You will be able to view your
          current cart assignment, cart location and request new assignments.
        </p>
      </StatsContainer>
    </React.Fragment>
  );
};

export default dashboardStats;
