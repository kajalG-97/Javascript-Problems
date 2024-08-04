const obj = {
  name: "test",
  fun: function () {
    console.log("this", this, this.name);
    this.abc();
  },
  abc: () => {
    console.log("arrow this", this, this.name);
  },
};

const check = obj.fun();
obj.abc();
console.log("check", obj.fun());

function outerFunction() {
  const outerThis = this;
  console.log("Outer this:", outerThis); // Output: the global object (window in browsers)

  function innerFunction() {
    const innerThis = this;
    console.log("Inner this:", innerThis); // Output: the global object (window in browsers)
  }

  const arrowInnerFunction = () => {
    const arrowInnerThis = this;
    console.log("Arrow inner this:", arrowInnerThis); // Output: the outerThis (lexical this from outerFunction)
  };

  innerFunction();
  arrowInnerFunction();
}

outerFunction();
