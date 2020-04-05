import React, {useEffect} from "react";
import BlockUi from "react-block-ui";

import css from 'dan-styles/comic.scss';
import Title from "../components/Title";
import Body from "../components/Body";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import {FormattedMessage} from "react-intl";

const Container = ({fetchLatestComic, fetchRandomComic, updateRate, dataInit, branch, ...others}) => {

  useEffect( () => {
    fetchLatestComic(dataInit, branch);
  },[]);

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

export default Container;
