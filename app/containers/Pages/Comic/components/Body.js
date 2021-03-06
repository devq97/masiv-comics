import React from "react";
import ModalImage from "react-modal-image";
import css from 'dan-styles/comic.scss';
import Proptypes from 'prop-types';

const Body = ({comic}) => {
  return (
    <div  className={css.comic}>
      <ModalImage className={css.comic_img} alt={comic.alt} small={comic.img} large={comic.img} />
    </div>
  )
};

Body.propTypes = {
  comic: Proptypes.object.isRequired
};

export default Body;
