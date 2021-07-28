import React from "react";
import classes from "./User.module.css";

class User extends React.Component {
  componentWillUnmount = () => {
    console.log("User unmounting");
  };

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
