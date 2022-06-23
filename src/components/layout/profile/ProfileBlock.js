import React from "react";
import ProfilePicture from "./ProfilePicture";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const ProfileGreeting = styled.p`
  --fp-weight-main: 700;
  font-size: clamp(0.8rem, 4vw, 1.5rem);
  color: var(--clr-primary-color);
  font-weight: var(--fp-weight-main);
`;

const ProfileName = styled.p`
  --fp-weight-main: 800;
  font-size: clamp(0rem, 6vw, 1.6rem);
  text-align: left;
  font-weight: var(--fp-weight-main);
  line-height: 1.4;
  /* color: var(--clr-primary-color); */
`;

const ProfileCaption = styled.div`
  padding-left: 6px;
`;

export default function ProfileBlock({ userProfile }) {
  const firstName = `${userProfile.firstName}`;

  return (
    <ProfileContainer>
      <ProfilePicture profilePicture={userProfile.profilePicture} />
      <ProfileCaption>
        <ProfileGreeting>Welcome Back!</ProfileGreeting>
        <ProfileName data-testid="name">{firstName}</ProfileName>
      </ProfileCaption>
    </ProfileContainer>
  );
}
