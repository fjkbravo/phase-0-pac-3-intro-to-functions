// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  
  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  
  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToGuadalupe()
  sayHelloToLiz()
  sayHelloToSamip()
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  sayHelloTo("Guadalupe");
  sayHelloTo("Jane");
  sayHelloTo("R2-D2");
  sayHelloTo(1);
  
  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  
  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello");
  function add(x, y) {
   return x + y;
  }
  console.log(add(80, 9000));
  console.log(say("Hello", "Liz"));
  console.log(add(1, 2));
  
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
    
  }
  console.log(say("Howdy", "partner"));
  console.log(say(`"I", "love", "Avocados"`))