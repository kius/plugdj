API.addEventListener(API.USER_JOIN, join);
function join(user)
{
API.sendChat("@" + user.username + " Seja bem vindo a sala Play4Ever !!!")
}
 
API.addEventListener(API.USER_LEAVE, leave);
function leave(user)
{
API.sendChat(user.username + " saiu da sala...")
}
 
API.addEventListener(API.MOD_SKIP, skip);
function skip(user)
{
API.sendChat("Desculpe, sua musica violou alguma regra da sala.")
}
