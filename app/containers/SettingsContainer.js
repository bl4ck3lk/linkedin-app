import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import { Paper,Typography } from '@material-ui/core';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

const styles = theme => ({
  fullPaper:{
    minHeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class SettingsContainer extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div style={{ padding: 10 }}>
      <Paper className={classes.fullPaper}>
        <Typography variant="h3" color="textPrimary">hello from the settings container</Typography>
      </Paper>
    </div>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  withStyles(styles)
)(SettingsContainer);

