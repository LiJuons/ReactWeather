// function getTempCallback (location, callback) {
//   callback(undefined, 20);
//   callback('City not found');
// }
//
// getTempCallback('Vilnius', function(err, temp){
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function (){
//       resolve (20);
//       reject ('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Vilnius').then(function (temp){
//   console.log('promise success', temp);
// }, function (err){
//   console.error('promise error', err);
// })

//Challenge Area
function addPromise (a,b){
  return new Promise(function(resolve,reject){
    if (typeof a == 'number' && typeof b == 'number'){
      resolve (a+b);
    }
    reject ('Both symbols must be numbers.');
  });
}
addPromise(2,'b').then(function(sum){
  console.log('promise success',sum);},
function (err){
  console.error('promise error', err);
})
