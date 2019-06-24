//@flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import routes from '../constants/routes';
import { loginUser,setCredentials } from '../actions/MenuAcitons';

const styles = theme => ({
  centerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  fullscreen: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
    marginTop: 20,
    marginBottom: 20
  },
  imgContainer: {
    padding: 40
  },
  img: {
    maxHeight: 100
  },
  margin: {
    margin: 20,
    paddingLeft: 35,
    paddingRight: 35
  }
});
const logo = require('../assets/blk.png');

type Props = {
  classes: Map<*, *>,
  user: {
    name: String,
    password: String
  },
  auth: Boolean,
  history: Object,
  loginUser: Function,
  setCrentialsFromFields: Function,
};

class LoginContainer extends PureComponent<Props> {
  props: Props;

  componentDidUpdate(){
    if(this.props.auth){
      const {history } = this.props;
      history.push('/main')
    }
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.loginUserAction();
  }
  handleOnChange(evt){
    const field = evt.target.getAttribute('name');
    const value = evt.target.value;
    this.props.setCrentialsFromFields(field, value);
  }
  render() {
    const { classes, user } = this.props;
    return (
      <div className={classnames(classes.fullscreen, 'bg-indigo-700')}>
        <Container className={classes.centerContent} maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <form onSubmit={this.handleOnSubmit.bind(this)}>
                <Paper className={classnames(classes.center)}>
                  <div
                    className={classnames(classes.imgContainer, classes.center)}
                  >
                    <img src={logo} className={classes.img} alt="logo" />
                  </div>
                  <TextField
                    id="username-field"
                    label="Username or Email"
                    className={classes.textField}
                    name="username"
                    value={this.props.username}
                    placeholder="Username"
                    onChange={this.handleOnChange.bind(this)}
                    helperText="Enter Your Linkedin Username or Email"
                    margin="normal"
                    required
                  />
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    value={this.props.password}
                    className={classes.textField}
                    placeholder="Password"
                    onChange={this.handleOnChange.bind(this)}
                    helperText="Enter Your Linkedin Password"
                    autoComplete="current-password"
                    margin="normal"
                    required
                  />
                    <Fab
                      variant="extended"
                      size="large"
                      type="submit"
                      color="primary"
                      aria-label="Add"
                      className={classes.margin}
                    >
                      <Typography variant="h6" color="inherit">Login</Typography>
                    </Fab>
                </Paper>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { menu } = state;
  return {
    username: menu.get('username'),
    password: menu.get('password'),
    auth: menu.get('auth'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUserAction: (data) => dispatch(loginUser(data)),
    setCrentialsFromFields: (field, value) => dispatch(setCredentials(field, value))
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(LoginContainer);
