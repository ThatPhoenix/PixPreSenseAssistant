const Discord = require('discord.js')
const assis = new Discord.Client() 
var prefix = (">")

//PreSense Assistant Security//
assis.on('message', message => {
    if (message.content.startsWith(prefix + "eval process.env.NONEOFYOURBUISNESS")) {
	    message.channel.send("**System:** Access Denied ")
sleep.sleep(3)
    message.channel.send("Lockdown Sequence Started")
	  assis.user.setActivity("Shutdown Sequence Initated | Contact Owners Now.") 
	   assis.user.setStatus("dnd")
	    message.channel.send("Shutdown Sequence has been Initated Bye Bye!")
	    process.exit();
    }
});

assis.on('message', message => {
    if (message.content.startsWith(prefix + "eval assis.token")) {
	    message.channel.send("**System:** Access Denied ")
sleep.sleep(3)
    message.channel.send("Lockdown Sequence Started")
	  assis.user.setActivity("Shutdown Sequence Initated | Contact Owners Now.") 
	   assis.user.setStatus("dnd")
	    message.channel.send("Shutdown Sequence has been Initated Bye Bye!")
	    process.exit();
    }
});


///



assis.login(process.env.NONEOFYOURBUISNESS)
