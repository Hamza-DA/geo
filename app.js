// // var lastTimestamp;
// // var speedX = 0,
// //   speedY = 0,
// //   speedZ = 0;
// // setInterval(() => {
// //   //   window.addEventListener(
// //   //     'devicemotion',
// //   //     function (event) {
// //   //       var currentTime = new Date().getTime();
// //   //       if (lastTimestamp === undefined) {
// //   //         lastTimestamp = new Date().getTime();
// //   //         return; //ignore first call, we need a reference time
// //   //       }
// //   //       //  m/s² / 1000 * (miliseconds - miliseconds)/1000 /3600 => km/h (if I didn't made a mistake)
// //   //       speedX +=
// //   //         ((event.acceleration.x / 1000) *
// //   //           ((currentTime - lastTimestamp) / 1000)) /
// //   //         3600;
// //   //       //... same for Y and Z
// //   //       lastTimestamp = currentTime;
// //   //     },
// //   //     false
// //   //   );
// //   //   document.querySelector('body').innerHTML +=
// //   //     ` ${speedX}` + `,${speedY}` + `,${speedY} `;
// //   document.querySelector('body').innerHTML +=
// //     geolocationCoordinatesInstance.speed;
// // }, 1000);
const x = document.querySelector('body');
setInterval(() => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }

  function showPosition(position) {
    setInterval(() => {
      x.innerHTML += 'Speed: ' + position.coords.speed + '<br>';
    }, 500);
  }
  window.addEventListener('load', () => getLocation());
}, 500);

////////////////////

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(success, fail);
// } else {
//   alert('Sorry, your browser does not support geolocation services.');
// }

// function success(position) {
//   x.innerHTML =
//     position.coords.latitude +
//     'lon=' +
//     position.coords.longitude +
//     'accuracy' +
//     position.coords.accuracy;
// }

// function fail() {
//   //
//   x.innerHTML = 'Could not obtain location';
// }
