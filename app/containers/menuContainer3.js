import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
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

class MenuContainer3 extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div style={{ padding: 10 }}>
        <Paper className={classes.fullPaper}>
          <Typography variant="h3" color="textPrimary"> hello from container 3</Typography>
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
)(MenuContainer3);
