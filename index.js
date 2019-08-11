let sendButton = document.querySelector('button');

function send() {
  let name = $('#nameValue').val();
  let gender = $("input[name='gender']:checked").val();
  let phone = $('#phoneValue').val();

  console.log(name,gender,phone);
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbysksuOfK3oZ0JL0TJJCjgpBktLSlmsuojaz8TUIkA1Teu2VXtA/exec",
    data: {
        "name": name,
        "phone": phone,
        "gender": gender
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);