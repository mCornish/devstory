import React from 'react';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const CTAStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  padding: 1em 1.5em;
  border: 3px solid rgb(198, 219, 236);
  background-color: rgb(217, 231, 242);

  > * {
    width: 100%;
    text-align: center;
  }

  h2 {
    margin: 0;
  }

  p {
    text-indent: 0;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    text-align: left;
  }

  .input-row {
    display: flex;
    justify-content: stretch;
    align-items: flex-end;
    width: 100%;
    margin-top: 0.5em;
  }
`;

export default function EmailSignup() {
  return (
    <CTAStyles>
      <h2>I'm making stuff for you</h2>
      <p>
        This year, I'm making 6 projects and launching them. Follow me on
        Twitter to keep up with all the action.
      </p>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="MikeWCornish"
        options={{ height: 500 }}
      />
    </CTAStyles>
  );
}
