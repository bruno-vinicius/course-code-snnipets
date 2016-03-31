function curry(fn){
  return function(){
    if(fn.length > arguments.length){
     var slice = Array.prototype.slice;
     var args = slice.apply(arguments);
     return function(){
       return fn.apply(
         null, args.concat(slice.apply(arguments)));
     };

    }
   return fn.apply(null, arguments);
  }
}

var get = curry(function(prop, obj){
  return obj[prop];
});

var people = [{'name': 'Bruno'},{'name': 'Sofia'}];

var names = people.map(get('name'));
