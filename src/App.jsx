import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import Cookies from "js-cookie";
import { useSelector } from 'react-redux';

import toast, { Toaster } from 'react-hot-toast';

import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';

import axios from "axios";
import { API_URI } from "./constants/api.url";

const App = () => {
  const state = useSelector(s => s)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onBoarding, setIsOnBoarding] = useState(true);


  const dispatch = useDispatch()

  const { setUser } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    let uid = Cookies.get('uid');

    if (uid != null) {
      axios.get(`${API_URI}/users/club/single/${uid}`)
        .then(res => {
          console.log("user data", res.data)
          setUser(res.data)
        }).catch(err => {
          console.log(err)
        })
    }

  }, [])
  useEffect(() => {
    let uid = Cookies.get('uid');

    if (uid != null) {
      axios.get(`${API_URI}/users/student/single/${uid}`)
        .then(res => {
          console.log("user data", res.data)
          setUser(res.data)
        }).catch(err => {
          console.log(err)
        })
    }

  }, [])
  useEffect(() => {
    let uid = Cookies.get('uid');

    if (uid != null) {
      axios.get(`${API_URI}/users/faculty/single/${uid}`)
        .then(res => {
          console.log("user data", res.data)
          setUser(res.data)
        }).catch(err => {
          console.log(err)
        })
    }

  }, [])

  useEffect(() => {
    console.log("Redux State", state)
    if (state.user != null) {
      setIsLoggedIn(true)
      const status = state.user.isComplete;
      console.log("status", status)
      if (status == false) {
        setIsOnBoarding(true)
      } else {
        setIsOnBoarding(false)
      }
    }
    else {
      setIsLoggedIn(false)
      setIsOnBoarding(false)
    }
  }, [state])

  return (
    <>
      <Toaster position="top-right"
        toastOptions={{
          style: {
            width: "20vw",
            border: '1px solid #000000',
            padding: '16px',
            color: '#000000',
            duration: 10000,
          },
        }} />
      <Navigation isLoggedIn={isLoggedIn} onBoarding={onBoarding} />
    </>
  );
};

export default App;
