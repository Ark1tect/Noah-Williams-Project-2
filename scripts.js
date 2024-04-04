function displayText() {
	var text = document.getElementById("textField");
	text.style.display = "block";
  }
  
  function displayText2() {
	var text = document.getElementById("textField2");
	text.style.display = "block";
  }
  
  function displayText3() {
	var text = document.getElementById("textField3");
	text.style.display = "block";
  }
  
  function displayText4() {
	var text = document.getElementById("textField4");
	text.style.display = "block";
  }
  $(document).ready(function() {
	$('card1').on('click', function() {
	  $('card1').removeClass('active');
	  $(this).addClass('active');
	});
  });
  