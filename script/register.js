import { emailValidation, phoneValidation, passwordValidation } from "../script/validate.js"

(function ($) {
  const userInfo = {
    username: "",
    email: "",
    phone: "",
    password: ""
  }
  //function validation
  const passwordValidate = (passwordElm) => {
    const isValidPassword = passwordValidation(userInfo.password);
    //const isMatchesPassword = userInfo.password === userInfo.confirmPassword;
    // if (confirmPasswordErrorRef) {
    //   if (!isMatchesPassword && isValidPassword) {
    //     confirmPasswordErrorRef.innerHTML = "Confirm password does not match.";
    //   }
    //   else {
    //     confirmPasswordErrorRef.innerHTML = "";
    //   }
    // }
    if (passwordElm) {
      if (!userInfo.password) {
        passwordElm.html("Password field require.")
        return
      }
      if (!isValidPassword) {
        passwordElm.html("Password incorrect format.")
      } else {
        passwordElm.html("")
      }
    }
    // && isMatchesPassword
    return isValidPassword && userInfo.password;
  }

  const emailValidate = (emailElm) => {
    const isValidEmail = emailValidation(userInfo.email);
    if (emailElm) {
      if (!userInfo.email) {
        emailElm.html("Email field require.")
      }
      else if (!isValidEmail && userInfo.email) {
        emailElm.html("Email incorrect format.")
      }
      else {
        emailElm.html("")
      }
    }
    return isValidEmail && userInfo.email
  }

  const phoneValidate = (phoneElm) => {
    const isValidPhone = phoneValidation(userInfo.phone);
    if (phoneElm) {
      if (!userInfo.phone) {
        phoneElm.html("Phone field require.")
      }
      else if (!isValidPhone && userInfo.phone) {
        phoneElm.html("Phone incorrect format.")
      }
      else {
        phoneElm.html("")
      }
    }
    return isValidPhone && userInfo.phone
  }

  const usernameValidate = (usernameElm) => {
    if (usernameElm) {
      if (!userInfo.username) {
        usernameElm.html("Username field require.")
      }
      else {
        usernameElm.html("")
      }
    }
    return !!userInfo.username;
  }

  const handleRegisterUser = (usernameElm, emailElm, phoneElm, passwordElm) => {
    const isUsernameValid = usernameValidate(usernameElm);
    const isEmailValid = emailValidate(emailElm);
    const isPhoneNumber = phoneValidate(phoneElm);
    const isPasswordValid = passwordValidate(passwordElm);
    if (!isUsernameValid || !isEmailValid || !isPhoneNumber || !isPasswordValid) {
      return false;
    }
    return true;
  }

  $(window).on('load', function () {
    // $(".loader").fadeOut();
    // $("#preloder").delay(200).fadeOut("slow");
    // $.get("http://127.0.0.1:5501/subpage/header.html", function (data) {
    //   $(".header").html(data);
    // });
    // $.get("http://127.0.0.1:5501/subpage/footer.html", function (data) {
    //   $(".footer").html(data);
    // });
  });

  $(document).ready(function () {

    const userInputElm = $('#username');
    const phoneInputElm = $('#phone');
    const passwordInputElm = $('#password');
    const emailInputElm = $('#email');
    // const policyInputElm = $('#policy');

    const usernameErrorElm = $('#usernameError');
    const phoneErrorElm = $('#numberphoneError');
    const emailErrorElm = $('#emailError');
    const passwordErrorElm = $('#passwordError');
    // const policyErrorElm = $('#policyError');

    userInputElm.on('input', function () {
      userInfo.username = this.value;
      usernameErrorElm.html("")
    })
    phoneInputElm.on('input', function () {
      userInfo.phone = this.value;
      phoneErrorElm.html("")
    })
    passwordInputElm.on('input', function () {
      userInfo.password = this.value;
      passwordErrorElm.html("")
    })
    emailInputElm.on('input', function () {
      userInfo.email = this.value;
      emailErrorElm.html("")
    })

    $('form[name="register-form"]').on('submit', function (event) {
      event.preventDefault();

      const isValidUserInfo = handleRegisterUser(usernameErrorElm, emailErrorElm, phoneErrorElm, passwordErrorElm);
      if (isValidUserInfo) {
        window.location.href = "http://127.0.0.1:5501/index.html"
      }
    });
  })


})(jQuery);