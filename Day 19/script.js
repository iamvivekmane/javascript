let myPromise = new Promise(function(myResolve, myReject) {
  myResolve(); 
  myReject();  
});
myPromise.then(
  function(value) {  },
  function(error) { /* code if some error */ }
);
