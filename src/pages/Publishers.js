import React from "react";
import PublisherData from "../data/data";
import Publisher from "../components/publisher/Publisher";
import PublisherHeader from "../components/publisher/PubisherHeader";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem 1rem;
`;

const StyledSection = styled.section`
  @media only screen and (min-width: 768px) {
    overflow-x: auto;
  }
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  background-color: var(--clr-bg-light);
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  text-align: center;
  width: 100%;
`;

const StyledTheader = styled.th`
  --fp-weight-main: 700;
  background-color: var(--clr-bg-light);
  color: var(--clr-bg-smoke);
  font-weight: var(--fp-weight-main);
  font-size: 0.75rem;
  padding: 1rem;
  vertical-align: middle;
`;

const StyledColumnHeader = styled.tr`
  box-shadow: rgb(0 0 0 / 15%) 0px 0.25px 2.6px;
`;

const Publishers = () => {
  return (
    <main className="main">
      <Container>
        <header>
          <PublisherHeader />
        </header>
        <StyledSection>
          <StyledTable
            border="0"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
          >
            <thead>
              <StyledColumnHeader>
                <StyledTheader>Last Name</StyledTheader>
                <StyledTheader>First Name</StyledTheader>
                <StyledTheader>Group Number</StyledTheader>
                <StyledTheader>Group Overseer</StyledTheader>
                <StyledTheader>Gender</StyledTheader>
                <StyledTheader>Email</StyledTheader>
                <StyledTheader>Role</StyledTheader>
                <StyledTheader>Status</StyledTheader>
              </StyledColumnHeader>
            </thead>
            <tbody>
              {PublisherData.map(({ id, ...otherPublisherData }) => (
                <Publisher key={id} {...otherPublisherData} />
              ))}
            </tbody>
          </StyledTable>
        </StyledSection>
      </Container>
    </main>
  );
};

export default Publishers;
