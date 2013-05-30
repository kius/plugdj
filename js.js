API.addEventListener(API.USER_JOIN, join);
function join(user)
{
API.sendChat("@" + user.username + " Enjoy your stay in the FiM room!")
}
 
API.addEventListener(API.USER_LEAVE, leave);
function leave(user)
{
API.sendChat(user.username + " left the room")
}
 
API.addEventListener(API.MOD_SKIP, skip);
function skip(user)
{
API.sendChat("Sorry, your song has violated one of the room's rules.")
}
