import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import FileIcon from '@material-ui/icons/FileCopy';
import { blockStatement } from '@babel/types';

type Props = {
  classes: Map<*, *>,
  menuList: Array<Map>
};

const styles = () => ({
  container: {
    height: '100%',
    width: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center'
  },
  logoContainer: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    maxWidth: 80
  },
  menuContainer: {
    height: 'calc(100% - 150px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  menuItemIcon:{
    display: 'block'
  },
  menuItem: {
    flex: 1,
    width: '100%',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  }
});
const logo = require('../assets/blk.png');

class SideNavigation extends Component<Props> {
  props: Props;

  render() {
    const { classes, menuList, changeMenu, selectedMenu } = this.props;
    return (
      <div
        className={classnames(
          classes.container,
          'fixed',
          'inset-y-0',
          'left-0',
          'bg-white',
          'text-gray-900',
          'shadow-xl'
        )}
      >
        <div className={classnames(classes.logoContainer, 'text-gray-900')}>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography color="inherit">My Company</Typography>
        </div>
        <ul className={classnames(classes.menuContainer)}>
          {menuList.map((item, index) => {
            let activeClass = [];
            if (index === selectedMenu) {
              activeClass = ['bg-blue-100', 'text-blue-600'];
            }
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                className={classnames(
                  classes.menuItem,
                  'text-gray-700',
                  'hover:bg-gray-200',
                  ...activeClass
                )}
                key={item.name}
                onClick={() => changeMenu(index)}
              >
              <span className={classes.menuItemIcon}>
                {
                  item.icon === "home" ? <HomeIcon fontSize="large" /> : item.icon === "settings"? <SettingsIcon fontSize="large" />: <FileIcon fontSize="large" />
                }
              </span>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(SideNavigation);
