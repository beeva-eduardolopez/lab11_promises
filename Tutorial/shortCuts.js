

new Promise(function(resolve, reject) {
  resolve('edu');
}).then(function() {
  console.log("Yey");
}, function() {
  console.log("Boo");
});

new Promise(function(resolve, reject) {
  resolve(Promise.reject());
}).catch(function() {
  // This is called
});