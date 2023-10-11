// if (typeof window !== 'undefined' && !window.crypto && !window.msCrypto) {
//   window.crypto = {
//     getRandomValues: function(array) {
//       // Logic to generate random values
//       for (let i = 0, l = array.length; i < l; i++) {
//         array[i] = Math.floor(Math.random() * 256);
//       }
//       return array;
//     }
//   };
// }

if (typeof window !== "undefined" && !window.crypto && !window.msCrypto) {
  window.crypto = window.msCrypto ||
    window.crypto || {
      getRandomValues: function (array) {
        return crypto.getRandomValues(array);
      },
    };
}
