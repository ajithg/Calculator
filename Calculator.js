let multiply, divide, add, subtract;

fnOnClick = function (event) {
  console.log(event.srcElement.innerText + " clicked");
  let className = event.srcElement.className;
  switch (className) {
    case "number":
      numberFn(event);
      break;
    case "multiply":
      multiplyFn();
      break;
    case "add":
      addFn();
      break;
    case "subtract":
      subtractFn();
      break;
    case "divide":
      divideFn();
      break;
    case "equals":
      equalsFn();
      break;
    case "clear":
      clearFn();
      break;
  }
};

multiplyFn = function () {
  multiply = (function () {
    let x = document.getElementById("output").value;
    return function (y) {
      return parseInt(x) * parseInt(y);
    };
  })();
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
  $("#multiply").addClass("active");
  document.getElementById("output").value = "";
};

addFn = function () {
  add = (function () {
    let x = document.getElementById("output").value;
    return function (y) {
      return parseInt(x) + parseInt(y);
    };
  })();
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
  $("#add").addClass("active");
  document.getElementById("output").value = "";
};

subtractFn = function () {
  subtract = (function () {
    let x = document.getElementById("output").value;
    return function (y) {
      return parseInt(x) - parseInt(y);
    };
  })();
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
  $("#subtract").addClass("active");
  document.getElementById("output").value = "";
};

divideFn = function () {
  divide = (function () {
    let x = document.getElementById("output").value;
    return function (y) {
      return parseInt(x) / parseInt(y);
    };
  })();
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
  $("#divide").addClass("active");
  document.getElementById("output").value = "";
};

numberFn = function (event) {
  if (document.querySelector(".equals.activated")) {
    document.getElementById("output").value = "";
    document.querySelector(".equals.activated").classList.remove("activated");
  }
  let value = document.getElementById("output").value;
  value += event.srcElement.innerText;
  document.getElementById("output").value = parseInt(value);
  console.log("Number clicked");
};

equalsFn = function () {
  let t;
  let computation = document.querySelectorAll(".active")[0].innerText;
  switch (computation) {
    case "+":
      t = add(document.getElementById("output").value);
      break;
    case "-":
      t = subtract(document.getElementById("output").value);
      break;
    case "X":
      t = multiply(document.getElementById("output").value);
      break;
    case "/":
      t = divide(document.getElementById("output").value);
      break;
  }
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
  document.getElementById("output").value = parseInt(t);
  $("#equals").addClass("activated");
};

clearFn = function () {
  document.getElementById("output").value = "";
  document.querySelectorAll(".active").forEach(function (item) {
    item.classList.remove("active");
  });
};

document.addEventListener("click", fnOnClick);
