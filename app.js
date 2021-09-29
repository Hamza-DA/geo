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
// const x = document.querySelector('body');
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function showPosition(position) {
  document.querySelector('.speed').innerHTML = position.coords.speed;
  document.querySelector('.longitude').innerHTML = position.coords.longitude;
  document.querySelector('.latitude').innerHTML = position.coords.latitude;
}
getLocation();

// const minutes = document.querySelector('.timer-minutes');
// const seconds = document.querySelector('.timer-seconds');
// secs = 1;
// setInterval(() => {
//   seconds.innerHTML = secs++;
// }, 500);
