import React from "react";
import styled from "styled-components";

const PublisherRow = styled.tr`
  --fp-weight-main: 600;
  color: var(--clr-bg-smoke);
  &:nth-child(even) {
    background-color: var(--clr-primary-light);
  }
`;
const PublisherCell = styled.td`
  padding: 1rem 0.5rem;
  font-size: clamp(0.5rem, 2vw, 0.8rem);
  border-collapse: collapse;
  vertical-align: middle;
  color: var(--clr-bg-smoke);
`;

const Publisher = ({
  lastName,
  firstName,
  groupNumber,
  groupOverseer,
  gender,
  email,
  role,
  status,
}) => (
  <PublisherRow>
    <PublisherCell>{lastName}</PublisherCell>
    <PublisherCell>{firstName}</PublisherCell>
    <PublisherCell>{groupNumber}</PublisherCell>
    <PublisherCell>{groupOverseer}</PublisherCell>
    <PublisherCell>{gender}</PublisherCell>
    <PublisherCell>{email}</PublisherCell>
    <PublisherCell>{role}</PublisherCell>
    <PublisherCell>{status}</PublisherCell>
  </PublisherRow>
);

export default Publisher;
