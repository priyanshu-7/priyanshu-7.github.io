let bot = new RiveScript();

bot.loadFile('./data.rive').then(botReady).catch(botNotReady);

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 userQuery(input_box.value);
 input_box.value = '';
});

//bot reply
function botReply(message){
 message_container.innerHTML += `<div class="bot">Bot: ${message}</div>`;
 if(message === "GIIIIIIF!")
 {
   console.log('debug');
   gif();
 }
 if(message === "The current date & time is:")
 {
   var date = new Date();
   message_container.innerHTML += `<div class="bot">${date}</div>`;
 }
 if(message === "Clearing chatbox")
 {
   clear();
 }
}

//user query
function userQuery(message){
 message_container.innerHTML += `<div class="user">You: ${message}</div>`;

 bot.reply("local-user", message).then(function(reply) {
 botReply(reply);
 });
}

//on bot successful load
function botReady(){
 bot.sortReplies();
 botReply('Hello, I am a bot. You can chat with me or type in some commands to which I will try to respond. To start, say "hello"!');
}

//on bot load fail
function botNotReady(err){
 console.log("Bot failed to load", err);
}

function randomGIF()
{
  var randomGifArray = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif", "images/5.gif"];
  var gif = Math.floor( Math.random() * randomGifArray.length);
  return randomGifArray[gif];
}
function gif() {
  message_container.innerHTML += `<div class="bot"><img src= ${randomGIF()} "height="100" width="100"/></div>`;
}
function clear()
{
  const div = document.getElementById("main");
  div.classList.remove("messages");
  //document.body.classList.add("messages");
}
