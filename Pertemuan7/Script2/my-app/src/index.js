import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, compose } from "redux";
// import MainReducer from "./reducers/MainReducer";
import * as serviceWorker from "register-service-worker";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(rootReducer);
// const store = compose(
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// )(createStore)(MainReducer);

SignInForm = reduxForm({
  form: "signIn",
})(SignInForm);

SignInForm = reduxForm({
  form: "signIn",
  validate,
})(SignInForm);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="control">
      <label className="field">{label}</label>
      <input className="input" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) || (warning && <span>{waring}</span>))}
    </div>
  </div>
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
// registerServiceWorker();
