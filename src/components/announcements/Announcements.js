import React from "react";
import styled from "styled-components";
import StyledButton from "../button/button";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ClipboardBulletListLtr } from "@styled-icons/fluentui-system-regular/ClipboardBulletListLtr";

const Clipboard = styled(ClipboardBulletListLtr)`
  width: 50px;
  padding-right: 5px;
  fill: var(--clr-primary-color);
  border-radius: 50%;
  padding: 5px;
`;

const AlertContainer = styled.div`
  padding-bottom: 0.5rem;
  opacity: 0.85;
  button {
    margin-left: auto;
  }
`;

const Divider = styled.hr`
  width: 85%;
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
        <div className="flex__container--v-center">
          <Clipboard aria-hidden />
          <div>
            <p className="content">
              On July 8th we will open up a new cart location
            </p>
            <p className="content">3hrs ago</p>
          </div>
          <StyledButton svg_interactive>
            <CloseButton aria-hidden />
          </StyledButton>
        </div>
        <Divider />
      </AlertContainer>
    </React.Fragment>
  );
};

export default Announcements;
