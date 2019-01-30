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
 botReply('Hello, I am a bot.');
}

//on bot load fail
function botNotReady(err){
 console.log("Bot failed to load", err);
}
