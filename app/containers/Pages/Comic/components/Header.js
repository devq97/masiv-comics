import React from "react";
import { FormattedMessage } from "react-intl";

const Header = ({messages}) => {
  return (
    <nav>
      <a href="#!">
        <FormattedMessage {...messages.title} />
      </a>
    </nav>
  )
};

export default Header;
