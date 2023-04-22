// Define a method decorator that takes a boolean argument "show"
function modifyMessage(show: boolean) {
  // Return a decorator function that will be applied to the method being decorated
  return function info(target: object, propertyKey: string, descriptor: any) {
    if (show) {
      console.log(target); // Log the target object (i.e. the class instance) to the console
      console.log(propertyKey); // Log the property key (i.e. the method name) to the console
      console.log(descriptor); // Log the descriptor object (which contains information about the method) to the console
    } else {
      // Replace the original method with a new method that just logs a message saying it's blocked
      descriptor.value = function () {
        console.log("Blocked method!");
      };
    }
  };
}

// Define a parameter decorator that logs information about a method parameter
function myProperty(
  target: object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(
    "This property is in the class " +
      target.constructor.name + // Get the name of the class from the constructor property of the target object
      " and the property's called: " +
      propertyKey + // Log the property key (i.e. the method name)
      " and the parameter index is: " +
      parameterIndex // Log the index of the parameter being decorated
  );
}

class Computer {
  marca: string = "Asus";
  // Decorate the "on" method with both "modifyMessage" and "myProperty" decorators
  @modifyMessage(true) // Use the "modifyMessage" decorator with the "show" argument set to true
  on(@myProperty message: string) {
    // Use the "myProperty" decorator to log information about the "message" parameter
    console.log("Turning on PC..");
    console.log(message);
  }
}

let pc = new Computer();
pc.on("You're in Juan's PC");
