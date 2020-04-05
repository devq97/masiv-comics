import React, { Fragment } from 'react';

import Header from "./components/Header";
import 'react-block-ui/style.css';
import Container from "./modules/Container";
import injectSaga from "utils/injectSaga";

import useComic from "./useComic";
import { rootSaga } from "./saga";
import { compose } from "redux";

import messages from "./messages";

const branch = 'comic';
const withSaga = injectSaga({ key: 'Index', saga: rootSaga });
const Index = () => {

  const { comic, fetchLatestComic, fetchRandomComic, updateRate } = useComic();

  return (
    <Fragment>
      <Header messages={messages} />
      <Container
        comic={comic}
        fetchLatestComic={fetchLatestComic}
        fetchRandomComic={fetchRandomComic}
        updateRate={updateRate}
        branch={branch}
        dataInit={[]}
        messages={messages}
      />
    </Fragment>
  )
};

export default compose(
  withSaga,
)(Index);
