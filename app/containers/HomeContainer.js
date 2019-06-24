import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import {Grid, Paper, Chip, TextField, Typography, Button, Divider} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import classnames from 'classnames';
import {addSearchTerm, deleteSearchTerm, setCredentials, openModal} from '../actions/MenuAcitons';
import Modal from '../components/Modal';
import List from '../components/List';

function mapStateToProps(state) {
  const {menu} = state;
  return {
    terms: menu.get("terms"),
    defaultMessage: menu.get("defaultMessage"),
    open: menu.get('open')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSearchItem: (terms)=> dispatch(addSearchTerm(terms)),
    deleteSearchItem: (index)=> dispatch(deleteSearchTerm(index)),
    setCrentialsFromFields: (field, value) => dispatch(setCredentials(field,value)),
    openModalAction: () => dispatch(openModal())
  };
}

const styles = theme => ({
  centerContent: {
    display: 'flex',
    alignItems: 'start',
    padding: 10
  },
  paper: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 30
  },
  heading: {
    marginBottom: 20
  },
  button: {
    marginLeft: 10,
    marginTop: 16,
    background: "#3f51b5",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    color: "#fff",
    height: "70%",
    width: 80,
    '&:hover':{
      background: "#2a42ca",
    }
  },
  chip:{
    margin: 5,
    padding:10
  },
  multiline: {
    height: 60,
    marginTop: 50
  },
  searchButton: {
    marginLeft: 10,
    marginTop: 16,
    background: "#3f51b5",
    boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    color: "#fff",
    height: "70%",
    width: "80%",
    '&:hover':{
      background: "#2a42ca",
    }
  },
  center:{
    justifyContent: 'center',
  }
});

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleAdd(evt){
    const {addSearchItem} = this.props;
    const {term} = this.state;
    addSearchItem(term)
    this.setState({term: ''})
  }

  handleChange(evt){
    this.setState({term: evt.target.value});
  }

  handleOnKeyUp(evt){
    if(evt.keyCode == 13){
      const {addSearchItem} = this.props;
      const {term} = this.state;
      addSearchItem(term)
      this.setState({term: ''})
    }
  }

  handleChangeMessage(evt){
    const field = evt.target.getAttribute('name');
    const value = evt.target.value;
    this.props.setCrentialsFromFields(field, value);
  }

  render() {
    const {classes,terms} = this.props;
    return (
      <div className={classes.centerContent}>
        <Grid container>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={classes.heading}>
                Search Terms
              </Typography>
              <Grid container>
                <Grid item sm={10}>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Search Terms"
                    placeholder="Term"
                    fullWidth
                    margin="normal"
                    value={this.state.term}
                    onKeyUp={this.handleOnKeyUp}
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={2}>
                <Button variant="contained" component="span" onClick={this.handleAdd} className={classes.button}>
                  Add <AddIcon fontSize="small" />
                </Button>
              </Grid>
                <Grid item sm={12}>
                  {
                    terms.map((item,index) => {
                      return <Chip
                        size="small"
                        key={item + index}
                        label={item}
                        onDelete={(index)=> this.props.deleteSearchItem(index)}
                        className={classes.chip}
                        color="primary"
                      />
                    })
                  }
                </Grid>
                <Grid item sm={12}>
                <TextField
                  label="Default Message"
                  placeholder="Default Message"
                  className={classes.multiline}
                  multiline
                  fullWidth
                  margin="normal"
                  name="defaultMessage"
                  value={this.props.defaultMessage}
                  onChange={this.handleChangeMessage}
                  variant="outlined"
                />
              </Grid>
              <Grid className={classnames(classes.centerContent, classes.center)}  item sm={12}>
                <Button variant="contained" component="span" onClick={this.props.openModalAction} className={classes.searchButton}>
                  Search <SearchIcon fontSize="large" />
                </Button>
              </Grid>
              </Grid>
              <Modal open={this.props.open} handleClose={this.props.openModalAction}>
                  <List />
              </Modal>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(HomeContainer);
