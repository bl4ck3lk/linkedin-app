//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import classnames from 'classnames';
import Menu from '../components/SideNavigation';
import { changeMenu,logoutUser } from '../actions/MenuAcitons';
import HomeContainer from './HomeContainer';
import MenuContainer1 from './MenuContainer1';
import MenuContainer2 from './menuContainer2';
import MenuContainer3 from './menuContainer3';
import SettingsContainer from './SettingsContainer';
import AppBar from '../components/AppBar';
import {ipcRenderer} from 'electron';

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
  mainContent:{
    height: '100%',
    width: 'calc(100% - 120px)',
    marginLeft: 120
  }
});

const menu = [{
  name:'Home',
  icon: "home"
}, {
  name: 'Menu-1',
  icon: 'file'
},{
  name: 'Menu-2',
  icon: 'file',
}, {
  name: 'Menu-3',
  icon: 'file'
}, {
  name: 'Settings',
  icon: 'settings',
}];

type Props = {
  classes: Map<String, Map<String, String>>,
  selectedMenu: number,
  changeMenuItem: () => void,
  history: Object,
  auth: Boolean
};

class MainContainer extends Component<Props> {
  props: Props;

  componentDidMount(){
    const { history, auth } = this.props;
    if(!auth){
      history.push('/')
    }
  }
  componentDidUpdate(){
    const { history, auth } = this.props;
    if(!auth){
      history.push('/')
    }
  }

  renderCurrentMenuItem() {
    const { selectedMenu } = this.props;
    if (selectedMenu === 0) {
      return <HomeContainer />;
    }
    if (selectedMenu === 1) {
      return <MenuContainer1 />;
    }
    if (selectedMenu === 2) {
      return <MenuContainer2 />;
    }
    if (selectedMenu === 3) {
      return <MenuContainer3 />;
    }
    if (selectedMenu === 4) {
      return <SettingsContainer />;
    }
  }
  render() {
    const { classes, changeMenuItem, selectedMenu } = this.props;
    return (
      <div
        className={classnames(classes.fullscreen, 'bg-blue-200', 'text-white')}
      >
        <Menu
          menuList={menu}
          changeMenu={changeMenuItem}
          selectedMenu={selectedMenu}
        />
        <div className={classes.mainContent}>
          <AppBar name={this.props.username} logoutAction={this.props.logoutAction} />
          {this.renderCurrentMenuItem()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { menu } = state;
  return {
    selectedMenu: menu.get('selectedMenu'),
    username: menu.get('username'),
    auth: menu.get('auth'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeMenuItem: selectedMenu => dispatch(changeMenu(selectedMenu)),
    logoutAction: ()=> dispatch(logoutUser()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withStyles(styles),
  withConnect
)(MainContainer);
