import React from "react";
import css from 'dan-styles/comic.scss';
import Proptypes from 'prop-types';


const Info = ({comic}) => {
  return (
    <div className={css.comic_desc}>
      <p>{comic.alt}</p>
    </div>
  )
};

Info.propTypes = {
  comic: Proptypes.object.isRequired
};

export default Info;
