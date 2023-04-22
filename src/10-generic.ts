// This is a generic function named 'showGeneric' that takes a type parameter 'T'.
// The function takes one argument called 'parameter' of type 'T'.
function showGeneric<T>(parameter: T) {
  return parameter;
}

// The type of 'T' in this case is inferred to be 'string'.
console.log(showGeneric("Hello there").replace("Hello", "Goodbye"));

// The type of 'T' in this case is inferred to be 'number'.
console.log(showGeneric(24).toFixed(3));

// The type of 'T' in this case is inferred to be 'boolean'.
console.log(showGeneric(true).valueOf());
