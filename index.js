const Discord = require("discord.js");
const config = require("./config.json") 
const prefix = config.prefix
const bot = new Discord.Client();

//dm bot cmd

   bot.on("message", message => {
 
             var args = message.content.substring(prefix.length).split(" ");

       bot.on('message', message => {
                                      if (message.content.split(' ')[0] == '/b')
                                                message.guild.members.forEach( member => {
                                        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                                         member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                        
                                          message.delete();
            
});
            
});



               if (message.content.startsWith(prefix + "dm")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
                           var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
              m.send(`${argresult}\n ${m}`);
 
})


                          if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone')
                                    
                                    .setColor("#2ecc71")
                                    .setTitle ('Message Has been Sent.')
                                    .setFooter (`${bot.user.username} | Developer: SphrRiker#3393` , 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {
                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone')
                                                                .setColor("#2ecc71")
                                                                .setFooter (`${bot.user.username} | Developer: SphrRiker#3393`)
                                                                .setTitle ('Message Has been Sent.')
                                                                
                               
                                                                message.channel.sendEmbed(embed4);
                            }
                          }
						
//dmhelp
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "help")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
						                            if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription("Baraye ersal payam az dastor ro bero peyravi konid : | !dm <payam delkhah> | !Shoma baraye ersal payam niaz be dastaresi ADMINISTRATOR darid ")
                                     .setTitle ('Help!')
                                     .setImage ('')
                                       .setColor("#f1c40f")
									                     .setFooter ("BOT DEVELOPER : SphrRiker#3393")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                                                      message.delete();
                            }
                          }



                                        
});
// login token  
module.exports = bot;