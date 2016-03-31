function curry(fn){
  //Step 2: Return the fuction for curry
  return function(){
	//Step 4: Executing the function
    if(fn.length > arguments.length) {
     var slice = Array.prototype.slice;
	 //Step 4.1: Trasnforming arguments in an array.
	 //Because arguments object it is similar to an Array, but does not have any Array properties except length.
     var args = slice.apply(arguments);
	 //Step 4.2: Return the function that our array.map will execute
     return function() {
		 //Step 5: Execute our mapping function on each element of an array,
		 //this function it's a closure, so it remember our args (name) that was passed early in execution
		 //and concat with the arguments [currentValue, index, Array] given by the map function.
       return fn.apply(
         null, args.concat(slice.apply(arguments)));
     };

    }
   return fn.apply(null, arguments);
  }
}

//Step 1: Calling curry for currying our function.
var get = curry(function getWithoutMagic(prop, obj){
  return obj[prop];
});

var people = [{'name': 'Bruno', 'age': 25},{'name': 'Sofia', 'age': 23}];

//Step 3: Mapping an array of people for get name property
var names = people.map(get('name'));
