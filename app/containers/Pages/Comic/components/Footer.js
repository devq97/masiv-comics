import React from "react";
import css from 'dan-styles/comic.scss';
import {FormattedMessage} from "react-intl";

const Footer = ({comic, messages}) => {
  return (
    <div className={css.comic_footer}>
      <p>
        <strong>
          <FormattedMessage {...messages.year} />:
        </strong>
        {' ' + comic.month}
      </p>
      <p>
        <strong>
          , <FormattedMessage {...messages.month} />:
        </strong>
        {' ' + comic.year}
      </p>
      <p>
        <strong>
          , <FormattedMessage {...messages.day} />:
        </strong>
        {' ' + comic.day}
      </p>
    </div>
  )
};

export default Footer;
