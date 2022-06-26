import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ClipboardBulletListLtr } from "@styled-icons/fluentui-system-regular/ClipboardBulletListLtr";

const Clipboard = styled(ClipboardBulletListLtr)`
  width: 35px;
  padding-right: 5px;
  fill: var(--clr-primary-color);
  border-radius: 50%;
  padding: 5px;
`;

const AlertContainer = styled.div`
  border-bottom: 1px solid var(--clr-bg-dark);
  padding-bottom: 0.5rem;
  opacity: 0.85;
`;

const CloseButton = styled(CloseOutline)`
  width: 30px;
  background: unset;
  fill: var(--clr-primary-color);
`;

const Announcements = () => {
  return (
    <React.Fragment>
      <AlertContainer>
        <div className="flex__container--between-center">
          <StyledButton svg_interactive>
            <Clipboard aria-hidden />
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
            <Clipboard aria-hidden />
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
    </React.Fragment>
  );
};

export default Announcements;
