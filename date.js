console.log(module)

// module.exports = "Hello World"  // console.log(date) in app.js

module.exports.getDate =  function (){
    const today = new Date();
    
    
    const options = {
        weekday: 'long',
        day: 'numeric',
        month:'long',
    }

    return today.toLocaleDateString("en-US", options);
    }

module.exports.getDay= getDay;

var getDay = function (){
    const today = new Date();
    const options = {
        weekday: 'long',
     
    }

    return today.toLocaleDateString("en-US", options);
    
}
console.log(module.exports)
// shortcut for exports
exports.getstringfn = function (){
    
    return "hello all";
    }