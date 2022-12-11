const ports = [];

let basket;
export default (() => {
  /* eslint-disable-next-line no-restricted-globals */
  self.onconnect = (e) => {
    console.log(e);
    ports.push(e.ports[0]);

    const port = e.ports[0];
    for (var i = 0; i < ports.length; i++) {
      ports[i].postMessage(basket);
    }

    port.addEventListener(
      "message",
      function (e) {
        console.log(e);
        basket = JSON.stringify(e.data);
        for (var i = 0; i < ports.length; i++) {
          ports[i].postMessage(basket);
        }
      },
      true
    );
    port.start();
  };
})();
