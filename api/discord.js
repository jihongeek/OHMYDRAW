import fetch from 'node-fetch'

async function createDMChannel(discordRecipientId,discordBotToken) {
    const apiURL = "https://discord.com/api/v10/users/@me/channels"
    let options = {
        method : "POST",
        headers : {
            "User-Agent" : `DiscordBot (${apiURL}, 10)`,
            "Content-Type" : "application/json",
            "Authorization" : "Bot " + discordBotToken
        },
        body : JSON.stringify({recipient_id : discordRecipientId})
    
    }
    const response = await fetch(apiURL, options);
    const dataJson = await response.json();
    if (response.status === 200)
    {
        return { "isSuccess" : true  ,"dmChannelId" : dataJson['id'] };
    }
    else
    {
        return { "isSuccess" : false  ,"dmChannelId" : null };
    }
}


async function createMessage(discordChannelId,messageObject,discordBotToken)
{
    const apiURL = `https://discord.com/api/v10/channels/${discordChannelId}/messages`;
    let options = {
        method : "POST",
        headers : {
            "User-Agent" : `DiscordBot (${apiURL}, 10)`,
            "Content-Type" : "application/json",
            "Authorization" : "Bot " + discordBotToken
        },
        body : JSON.stringify(messageObject)
    }
    const response = await fetch(apiURL, options);
    const dataJson = await response.json();
    if (response.status === 200)
    {
        return { "isSuccess" : true};
    }
    else
    {
        return { "isSuccess" : false };
    }
}

export {createDMChannel,createMessage}