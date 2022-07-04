import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  background-color: var(--clr-primary-color);
  margin: -1rem 0rem 2rem;
  padding: 1rem;
  overflow: hidden;
  p {
    color: var(--clr-bg-light);
  }
`;

const dashboardStats = ({ congregation }) => {
  // let today = new Date().toDateString();
  // let currrentTime = new Date().toLocaleTimeString(); // for now
  return (
    <React.Fragment>
      <StatsContainer>
        <p>
          Welcome to the Cart Ministry Scheduler. You will be able to view your
          current cart assignment, cart location and request new assignments.
        </p>
      </StatsContainer>
    </React.Fragment>
  );
};

export default dashboardStats;
