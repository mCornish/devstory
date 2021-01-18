import React from 'react';
import styled from 'styled-components';

const FormStyles = styled.form`
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
    <FormStyles
      action="https://gmail.us7.list-manage.com/subscribe/post"
      method="POST"
      _lpchecked="1"
    >
      <h2>I'm making stuff for you</h2>
      <p>
        This year, I'm making 6 projects and launching them. I'll email you
        every couple of months to let you know when they're ready.
      </p>
      <input type="hidden" name="u" value="c24fe90c4d10a0eb9eb6ae24a" />
      <input type="hidden" name="id" value="4307d542f9" />

      <div className="input-row">
        <label htmlFor="MERGE0">
          <div>Your email address</div>
          <input
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            defaultValue=""
            placeholder="sendmestuff@gmail.com"
          />
        </label>

        <button type="submit" className="formEmailButton" name="submit">
          Subscribe
        </button>
      </div>

      <input
        type="hidden"
        name="ht"
        value="54cb245e5c57246d81af1b336c1986669a6cd57f:MTYxMDUwMTEzNC40Njk0"
      />
      <input type="hidden" name="mc_signupsource" value="hosted" />
    </FormStyles>
  );
}
