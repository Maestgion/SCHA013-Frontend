import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Cookies from "js-cookie";
// import { useSelector } from 'react-redux';

// import { useDispatch } from "react-redux";
// import { bindActionCreators } from 'redux'
// import { actionCreators } from './state';

// import axios from "axios";
// import { API_URI } from "./constants/api.url";

const App = () => {
  // const state = useSelector(s => s)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onBoarding, setIsOnBoarding] = useState(false);

  // useEffect(() => {
  //   let uid = Cookies.get('uid');

  //   if (uid != null) {
  //     axios.get(`${API_URI}/auth/getUser/${uid}`)
  //       .then(res => {
  //         console.log(res.data)
  //         setUser(res.data.data)
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //   }

  // }, [])

  // useEffect(() => {
  //   console.log("Redux State", state)
  //   if (state.user != null) {
  //     setIsLoggedIn(true)
  //     const userId = state.user.id;
  //     if (userId === null) {
  //       setIsOnBoarding(true)
  //     } else {
  //       setIsOnBoarding(false)
  //     }
  //   }
  //   else {
  //     setIsLoggedIn(false)
  //     setIsOnBoarding(false)
  //   }
  // }, [state])

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
    </>
  );
};

export default App;
