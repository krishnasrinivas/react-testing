import React from 'react';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors'
import { RouteHandler } from 'react-router';


// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
  , LeftNav = mui.LeftNav
  , MenuItem = mui.MenuItem;

class App extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({});
    });
  }
  render() {
    return (
      <div>
        <AppBar
        title='Minio Controller'
        showMenuIconButton={false}
        style={{marginBottom:'4px'}}
        />
        <div style={{width:'1024px', margin:'auto', minHeight:window.innerHeight - 64 + "px"}} >
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

App.contextTypes = {
  router: React.PropTypes.func
};

module.exports = App;
