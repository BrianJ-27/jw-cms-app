import React from "react";
import ProfilePicture from "./ProfilePicture";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const ProfileName = styled.p`
  --fp-weight-main: 800;
  font-size: clamp(0.5rem, 4vw, 1.1rem);
  font-weight: var(--fp-weight-main);
  line-height: 1.4;
  padding-right: 5px;
`;

const ProfileCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0rem 0.4rem;
`;

const ProfileCongregation = styled.div`
  --fp-weight-main: 600;
  font-weight: var(--fp-weight-main);
  color: var(--clr-bg-dark);
  font-size: clamp(0.5rem, 4vw, 0.7rem);
`;

const Separator = styled.span`
  color: var(--clr-primary-color);
`;

export default function ProfileBlock({ userProfile }) {
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;
  const congregation = `${userProfile.congregation}`;

  return (
    <ProfileContainer>
      <ProfileCaption>
        <ProfileName data-testid="name">{fullName}</ProfileName>
        <ProfileCongregation data-testid="name">
          {congregation} <Separator>|</Separator> Congregation
        </ProfileCongregation>
      </ProfileCaption>
      <ProfilePicture profilePicture={userProfile.profilePicture} />
    </ProfileContainer>
  );
}
