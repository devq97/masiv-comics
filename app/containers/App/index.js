import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import NotFound from 'containers/Pages/Standalone/NotFoundDedicated';
import ContainerLayout, {AppContext} from "./ContainerLayout";
import Index from "../Pages/Comic";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class App extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <AppContext.Consumer>
          {(changeMode) => (
            <Switch>
              <Route path="/" exact component={Index} />
            </Switch>
          )}
        </AppContext.Consumer>
      </ContainerLayout>
    );
  }
}

export default App;
