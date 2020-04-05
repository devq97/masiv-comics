import React from "react";
import { FormattedMessage } from "react-intl";
import Proptypes from 'prop-types';

const Header = ({messages}) => {
  return (
    <nav>
      <a href="#!">
        <FormattedMessage {...messages.title} />
      </a>
    </nav>
  )
};

Header.propTypes = {
  messages: Proptypes.object.isRequired
};

export default Header;
