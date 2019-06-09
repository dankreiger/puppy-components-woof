import styled, { createGlobalStyle } from 'styled-components';

export const TextGlobalStyles = createGlobalStyle`
/* reset tags */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  transition: all 250ms;
  }
`;
