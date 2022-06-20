import React from "react";

import styled from "styled-components";

const CardHeader = styled.h2`
  --fp-weight-main: 600;
  background: var(--clr-accent-color);
  color: var(--clr-header-color);
  padding: 20px !important;
  font-weight: var(--fp-weight-main);
  border-bottom: 1px solid var(--clr-header-color);
`;

const Cards = () => {
  return (
    <div className="main__grid--wrapper">
      <div>
        <CardHeader>Upcoming Shifts </CardHeader>
        <div>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div>
        <CardHeader>Announcements</CardHeader>
        <div>
          <div>
            <p>
              <strong>Recent Updates</strong>
            </p>
            <ul>
              <li>
                On Aug 1st 2022 we will be opening a new cart location at the
                airport
              </li>
              <li>
                Be sure to return your ministry cart back to the kingdom hall
              </li>
              <li>
                Refresher training on Business Witnessing will be on July 25th
                2022
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
