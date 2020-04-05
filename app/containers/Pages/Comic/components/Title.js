import React from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Proptypes from 'prop-types';

import css from 'dan-styles/comic.scss';
import {FormattedMessage} from "react-intl";

const Title = ({comic, max, fetchRandomComic, updateRate, branch, rate, messages}) => {

  /**
   * Handle click event to get random number
   */
  const handleClick = () => {
    const number = randomNumber(1, max);
    fetchRandomComic(number, branch);
  };

  /**
   * Return random number
   * @param {*} min 
   * @param {*} max 
   */
  const randomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
  };

  return (
    <div className={css.comic_title}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <h1>{comic.safe_title}</h1>
        <div>
          <Rating
            name="simple-controlled"
            value={rate}
            size="large"
            className={css.w_100}
            onChange={(event, newValue) => {
              updateRate(newValue, branch);
            }}
          />
        </div>
        <label onClick={handleClick} className={css.change}>
          <FormattedMessage {...messages.change} />
        </label>
        <h1>
          <FormattedMessage {...messages.click} />
        </h1>
      </Box>
    </div>
  )
};

Title.propTypes = {
  comic: Proptypes.object.isRequired,
  max: Proptypes.number.isRequired, 
  fetchRandomComic: Proptypes.func.isRequired,
  updateRate: Proptypes.func.isRequired,
  branch: Proptypes.string.isRequired,
  rate: Proptypes.number.isRequired, 
  messages: Proptypes.object.isRequired
};

export default Title;
