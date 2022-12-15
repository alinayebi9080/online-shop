import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./asset/css/font.css";
import "./asset/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    console.log("onUpdate");

    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });

      waitingServiceWorker.addEventListener("statechange", (event) => {
        console.log(event.target.state);
        if (event.target.state === "activated") {
          console.log("dialog");
          let s = document.getElementById("update-service-worker-dialog");
          s.classList.remove("hidden");
          //   s.classList.add("show-sw");
          document
            .getElementById("update-service-worker-btn")
            .addEventListener("click", () => {
              window.location.href = "https://localhost:3000";
              window.location.reload();
            });
        }
      });
    }
  },
});
