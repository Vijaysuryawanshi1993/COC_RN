import App from "./app/index";
import Container from "./app/components/container";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
const reduxRender = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <App />
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default reduxRender;
