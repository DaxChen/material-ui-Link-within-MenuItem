import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
          <AppBar title="Title" onLeftIconButtonTouchTap={this.toggleDrawer} />
          <MenuItem primaryText="home" containerElement={<Link to="/" />} />
          <MenuItem primaryText="about" containerElement={<Link to="/about" />} />
        </Drawer>

        {this.props.children}

        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.toggleDrawer}
        />
      </div>
    )
  }
}

export default App
