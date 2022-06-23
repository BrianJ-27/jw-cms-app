import React from "react";
import DashboardStats from "../dashboard-stats/dashboardStats";
import Cards from "../cards/Cards";
import styled from "styled-components";
import StyledButton from "../button/button";
import { BellFill } from "@styled-icons/bootstrap/BellFill";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

const BellIcon = styled(BellFill)`
  width: 30px;
  background: var(--clr-bg-light);
  fill: var(--clr-primary-color);
  border-radius: 50%;
  padding: 5px;
`;

const AlertContainer = styled.div`
  margin: 1rem;
  border-bottom: 1px solid var(--clr-bg-dark);
  padding-bottom: 0.5rem;
  opacity: 0.85;
`;

const CloseButton = styled(CloseOutline)`
  width: 30px;
  background: unset;
  fill: var(--clr-primary-color);
`;

const Dashboard = ({ congregation }) => {
  return (
    <main className="main">
      <DashboardStats />
      <div className="main__grid--wrapper">
        <section aria-label="Upcoming Shifts Card">
          <h2 className="title__secondary">Upcoming Shifts </h2>
          <Cards />
        </section>

        <section aria-label="Ministry Announcements">
          <h2 className="title__secondary">Announcements</h2>
          <div>
            <AlertContainer>
              <div className="flex__container--between-center">
                <StyledButton svg_interactive>
                  <BellIcon aria-hidden />
                </StyledButton>
                <p className="content">
                  On July 8th we will open up a new cart location
                </p>
                <StyledButton svg_interactive>
                  <CloseButton aria-hidden />
                </StyledButton>
              </div>

              <div>
                <p className="content">3hrs ago</p>
              </div>
            </AlertContainer>

            <AlertContainer>
              <div className="flex__container--between-center">
                <StyledButton svg_interactive>
                  <BellIcon aria-hidden />
                </StyledButton>
                <p className="content">
                  Come Join us for early morning at the hotels and gas stations
                </p>
                <StyledButton svg_interactive>
                  <CloseButton aria-hidden />
                </StyledButton>
              </div>

              <div>
                <p className="content">1 day ago</p>
              </div>
            </AlertContainer>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
