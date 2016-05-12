$("div").hide();
console.log (
$('.letter.is-hidden'));


var divs= {

  0:['letter-A', 'letter-B'],
  1:['letter-C', 'letter-D'],
  2:['letter-E', 'letter-F'],
  3:['letter-G', 'letter-H'],
  4:['letter-I', 'letter-J'],
  5:['letter-K', 'letter-L'],
  6:['letter-M', 'letter-N'],
  7:['letter-O', 'letter-P'],
  8:['letter-Q', 'letter-R'],
  9:['letter-S', 'letter-T'],
  10:['letter-U', 'letter-V'],
  11:['letter-W', 'letter-X'],
  12:['letter-Y', 'letter-Z'],
 
}

Chat.onMessage(function (data){
  // console.log(data.value);
  var val=data.value;
  var selectors=divs[val];
  var selector=selectors[Math.floor(Math.random() * selectors.length)]

  var $div = $("." + selector);
  $div.show()
  $div.clone().prependTo('body');
});


i=0;
$(document).ready(function(){

  $(window).keypress(function(e){
    var val= Math.floor(Math.random()*13);

   Chat.sendMessage({
    sender:'letter',
    type:'raw',
    value: val
   });  
  });
})

/*function changeBackground(color) {
   document.body.style.background = color;
}

<BODY onload="changeBackground('red');">*/



var username;

// When the user clicks the submit button, we want to save the 
// username they entered, hide the form, and show the color input
$('.submit-button').keypress (function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.letter-input').removeClass('is-hidden');
});

message.className ='message';
message.innerHTML += 'From: ' + data.sender + '<br>';
message.innerHTML += 'Type: ' + data.type + '<br>';
message.innerHTML += 'Value: ' + data.value;
messageContainer.appendChild(message);


var user=0;
console.log('new user')
users=NumUsers;


