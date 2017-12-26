import { Component } from "react";
// import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import jwtDecode from "jwt-decode";
import { getTokenId, saveTokensToLocalStorage } from "../utilities";
// import { loginUser } from '../redux/actions/userActions'

class Login extends Component {
  // static propTypes = {
  //   loginUser: PropTypes.func,
  // };

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  componentDidMount() {
    // check if the window has any parameters (i.e. if they have just logged in)
    debugger
    saveTokensToLocalStorage();
    // Check if the access token and id token are in localStorage (i.e. they are already logged in)
    const tokenId = getTokenId();

    // validate the tokenId and get the user data
    try {
      const decodedToken = jwtDecode(tokenId);

      // Also check state and noche
      // TODO: var isAuthenticated: jwt && (jwt.exp > Date.now() / 1000);

      // this.props.loginUser(decodedToken);
    } catch (InvalidTokenError) {
      console.log("invalid token - not logging you in");
    }
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

// const mapDispatchToProps = dispatch => ({
//   loginUser: decodedToken => dispatch(loginUser(decodedToken))
// });

// export default connect(null, mapDispatchToProps)(withRouter(Login));
export default withRouter(Login);
