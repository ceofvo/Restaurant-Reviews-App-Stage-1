if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration => console.log("Service Worker registered Successfully", registration))
      .catch(e => console.log("Service Worker Registration failed", e));
}