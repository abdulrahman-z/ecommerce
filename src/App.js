import React from "react";
import HomePage from "./Pages/homepage/HomePage";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./Pages/signin-signup/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userAction";
import { connect } from "react-redux";

class App extends React.Component {
  unSubscribe = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route
              exact
              path="/signin"
              render={() => (user ? <Redirect to="/" /> : <SignInSignUp />)}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
