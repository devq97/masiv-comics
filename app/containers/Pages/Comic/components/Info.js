import React from "react";
import css from 'dan-styles/comic.scss';


const Info = ({comic}) => {
  return (
    <div className={css.comic_desc}>
      <p>{comic.alt}</p>
    </div>
  )
};

export default Info;
