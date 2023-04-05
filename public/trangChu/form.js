function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let info = JSON.parse(this.responseText);
        document.getElementById("founder-name").innerText = info.founder;
        document.getElementById("address").innerText = info.address;
        document.getElementById("email").innerText = info.email;
        document.getElementById("fanpage").innerText = info.fanpage;
      }
    };
    xhttp.open(
      "GET",
      "https://kfcpage-fd141-default-rtdb.firebaseio.com//info.json",
      true
    );
    xhttp.send();
  }
  
  getInfo();
  
  var cusName = document.getElementById("name");
  var cusEmail = document.getElementById("user-email");
  var cusSelect = document.getElementById("support-select");
  var cusPhone = document.getElementById("phone");
  var cusComment = document.getElementById("cus-comment");
  
  var nameError = document.getElementById("name-error");
  var phoneError = document.getElementById("phone-error");
  var emailError = document.getElementById("email-error");
  var submitError = document.getElementById("submit-error");
  
  function validateName() {
    var name = document.getElementById("name").value;
  
    if (name.length == 0) {
      nameError.innerHTML = "Name is required";
      return false;
    }
    nameError.innerHTML = "valid";
    return true;
  }
  
  function validatePhone() {
    var phone = document.getElementById("phone").value;
  
    if (phone.length == 0) {
      phoneError.innerHTML = "Phone is required";
      return false;
    }
  
    if (phone.length !== 10) {
      phoneError.innerHTML = "Phone number should be 10 digits";
      return false;
    }
  
    if (!phone.match(/^[0-9]{10}$/)) {
      phoneError.innerHTML = "Phone is required";
      return false;
    }
  
    phoneError.innerHTML = "valid";
    return true;
  }
  
  function validateEmail() {
    var email = document.getElementById("user-email").value;
  
    if (email.length == 0) {
      emailError.innerHTML = "Email is required";
      return false;
    }
  
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      emailError.innerHTML = "Email is required";
      return false;
    }
  
    emailError.innerHTML = "valid";
    return true;
  }
  
  // function validateForm() {
  //   if (!validateEmail() || !validateName() || !validatePhone()) {
  //     submitError.innerHTML = "Please fix errors to submit";
  //     return false;
  //   }
  // }
  
  function saveFormData() {
    var xhttp = new XMLHttpRequest();
    var params = {
      name: cusName.value,
      email: cusEmail.value,
      phone: cusPhone.value,
      comment: cusComment.value,
      kindOfSupport: cusSelect.value,
    };
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = this.responseText;
      }
    };
    xhttp.open(
      "POST",
      "https://kfcpage-fd141-default-rtdb.firebaseio.com//customer.json"
    );
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(params));
  }
  
  var form = document.getElementById("info-form");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(0);
    if (
      
      validateEmail()&&
      validateName()&&
      validatePhone()
    ) {
      saveFormData();
      alert("Information Successfully Saved");
     
    } else {
      
      alert("Please Fix The Errors");
    }
  });
  