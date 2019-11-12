import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize, transparentize } from 'polished';
import { TYPOGRAPHY, COMMON } from './constants';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const Base = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <GlobalStyle />
      {children}
    </div>
  );
};

const BaseStyles = styled(Base)`
  ${TYPOGRAPHY};
  ${COMMON};
  ::-moz-selection,
  ::selection {
    background: ${props => transparentize(0.7, props.theme.colors.primary)};
  }
`;

BaseStyles.defaultProps = {
  fontSize: '2',
  fontFamily: 'sansSerif',
  color: 'text',
  bg: 'background',
  theme,
};

BaseStyles.propTypes = {};

export default BaseStyles;
