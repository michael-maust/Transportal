/**
 * Ionic React Tutorial
 * ====================
 * Learn how to use Ionic 4 with React.
 * This tutorial focuses on Tab navigation and routing with React Router
 *
 * Video: https://youtu.be/1XA2m4bAaSA
 * Part 1: https://codesandbox.io/s/ionic-react-tutorial-getting-started-nze4s
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

ReactDOM.render(<App />, document.getElementById("root"));
