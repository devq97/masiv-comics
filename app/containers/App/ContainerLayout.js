import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles} from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    minHeight: '100%',
    marginTop: 0,
    zIndex: 1,
  },
};

export const AppContext = React.createContext();

class ContainerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: true
    };
  }

  render() {
    const { classes, children } = this.props;
    return (
        <div className={classes.root}>
          <AppContext.Provider>
            {children}
          </AppContext.Provider>
        </div>
    );
  }
}

ContainerLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

const reducer = 'ui';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  mode: state.getIn([reducer, 'type']),
});

const dispatchToProps = dispatch => ({
  changeMode: bindActionCreators(dispatch),
});

const ContainerLayoutMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ContainerLayout);

export default withStyles(styles)(ContainerLayoutMapped);
