function Validator(options) {
  function validate(inputElement, rule) {
    inputElement.onblur = function () {
      var errorMessage = rule.test(inputElement.value);

      var errorElement =
        inputElement.parentElement.querySelector(".form-message");
      var el = inputElement.parentElement.querySelector(".icon");
      if (errorMessage) {
        errorElement.innerText = errorMessage;
        errorElement.style.color = "red";
        inputElement.style.border = "1px solid red";
        el.style.margin = "-23px 0 0 17px ";
      } else {
        errorElement.innerText = "";
        errorElement.style.color = "while";
        inputElement.style.border = "1px solid while";
      }
    };
  }
  //lấy element của form cần validate
  var formElement = document.querySelector(options.form);
  if (formElement) {
    options.rule.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      var errorElement =
        inputElement.parentElement.querySelector(".form-message");
      var el = inputElement.parentElement.querySelector(".icon");
      console.log("el ", el);
      if (inputElement) {
        validate(inputElement, rule);
        console.log("inputElement ", inputElement.value);
      }
    });
  }
}

function checkValid() {}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};
