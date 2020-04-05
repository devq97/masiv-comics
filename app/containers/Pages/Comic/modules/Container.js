import React, {useEffect} from "react";
import BlockUi from "react-block-ui";
import PropTypes from 'prop-types';

import css from 'dan-styles/comic.scss';
import Title from "../components/Title";
import Body from "../components/Body";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {FormattedMessage} from "react-intl";

const Container = ({fetchLatestComic, fetchRandomComic, updateRate, dataInit, branch, ...others}) => {

  /**
   * Call fetch latest comic when component is mounted
   */
  useEffect( () => {
    fetchLatestComic(dataInit, branch);
  },[]);

  /**
   * Destruct others props
   */
  const { comic, messages } = others;

  return (
    <BlockUi tag="div" blocking={comic.get('loading')} renderChildren={false}>
      { comic.get('error') ?
        <Snackbar open={comic.get('error') !== false} autoHideDuration={6000}>
          <Alert severity="error">
            <FormattedMessage {...messages.error} />
          </Alert>
        </Snackbar>
      :
        <div className={css.background}>

          <Title
            comic={comic.get('items').toJSON()}
            max={comic.get('max')}
            fetchRandomComic={fetchRandomComic}
            updateRate={updateRate}
            branch={branch}
            rate={comic.get('rate')}
            messages={messages}
          />
          <Body
            comic={comic.get('items').toJSON()}
          />
          <Info
            comic={comic.get('items').toJSON()}
          />
          <Footer
            comic={comic.get('items').toJSON()}
            messages={messages}
          />

        </div>
      }
    </BlockUi>
  )
};

Container.propTypes = {
  fetchLatestComic: PropTypes.func.isRequired,
  fetchRandomComic: PropTypes.func.isRequired, 
  updateRate: PropTypes.func.isRequired, 
  dataInit: PropTypes.array, 
  branch: PropTypes.string.isRequired
};

export default Container;
