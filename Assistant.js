const Discord = require('discord.js')
const assis = new Discord.Client() 
var prefix = (">")
var sleep = require('sleep');

//PreSense Assistant Security//
assis.on('message', message => {
    if (message.content.startsWith(prefix + "eval process.env.NONEOFYOURBUISNESS")) {
	    message.channel.send("**System:** Access Denied ")

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
    message.channel.send("Lockdown Sequence Started")
	  assis.user.setActivity("Shutdown Sequence Initated | Contact Owners Now.") 
	   assis.user.setStatus("dnd")
	    message.channel.send("Shutdown Sequence has been Initated Bye Bye!")
	   sleep.sleep(1)
    }
});



/////////////////////////




//Eval///
assis.on('message', message => {
	if (message.author.id === "498186211249225728") {
		let msg = message.content;

		if (msg.startsWith(">eval")) {
   		msg = msg.substring(">eval ".length)
   		msg = msg.replace(/```js/gi, "")
   		msg = msg.replace(/```/gi, "")

   		try {
   			let result = eval(msg)

    		if (typeof(result) == "undefined") {
    			message.channel.send({
    				embed: {
    					description: "This code didn't return any value",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: ":outbox_tray: Output",
    							value: "Nothing here :innocent:"
    						}
  	  				],
  	  				footer: {
  	  					text: "PhoenixEval"
  	  				}
  	  			}
  	  		})
  	  	} else {
  	  		message.channel.send({
  	  			embed: {
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
	    						name: ":outbox_tray: Output",
  	  						value: "```" + result + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
    		}
   		} catch (e) {
   			message.channel.send({
  	  			embed: {
  	  				description: ":dizzy_face: Something went wrong",
    					fields: [
    						{
    							name: ":inbox_tray: Input",
    							value: "```" + msg + "```"
    						},
    						{
    							name: "Error content",
    							value: "```" + e + "```"
    						}
    					],
    					footer: {
    						text: "PhoenixEval"
    					}
	    			}
  	  		})
   		}
  	}
	}
})



/////



assis.login(process.env.NONEOFYOURBUISNESS)
