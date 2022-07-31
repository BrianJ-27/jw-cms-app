import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";

const PublisherBar = styled.div`
  background-color: var(--clr-bg-light);
  padding: 1rem 0.5rem;
  border-radius: 10px 10px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const PubisherHeader = () => {
  return (
    <React.Fragment>
      <h2 className="title__secondary">Publishers</h2>
      <PublisherBar className="flex__container--between-center">
        <div>
          <label htmlFor="group_id">Publisher </label>
          <select id="group_id" name="filter_publisher">
            <option defaultValue="" hidden="" disabled="">
              Sort by
            </option>
            <option value="lastName">Last Name</option>
            <option value="firstName">First Name</option>
            <option value="groupOverseer">Group Overseer</option>
            <option value="gender">Gender</option>
            <option value="role">Role</option>
            <option value="status">Status</option>
          </select>
        </div>

        <div>
          <StyledButton publisher>Add Publisher</StyledButton>
          <StyledButton publisher>Send Invite</StyledButton>
        </div>
      </PublisherBar>
    </React.Fragment>
  );
};

export default PubisherHeader;
