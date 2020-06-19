// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
// @stormbot hi , yo , hello , what can you do, welcome to QA, have fun , yes ,no, hahahaha, git cheat sheet, exit class
// I do like Jokes, I don't like jokes, you are funny, type another joke,another joke,make me laugh

// Start up

module.exports = function (bot) {
  bot.respond(/hi|hello/i, function (msg) {
    return msg.send( "Hey, there what's your name?");
  });
  bot.respond(/My name is (.*)/i, function (msg) {
    let intro;
    intro = msg.match[1];
    return msg.send( "Hello, " +intro+ ". What can i do for you today? Need help with work? or can I make you laugh?");
  });

  bot.respond(/what can you do?/i, function (msg) {
    return msg.reply("Type @Stormbot wki for work wikis or make me laugh");
  });
// link to work wiki-may not be able to connect for class- welcomes team member
  bot.hear(/welcome to the QA team (.*)/i, function (msg) {
    let name;
    name = msg.match[1];
    return msg.send("Hi " +name+ ", welcome to the team check out one of our wikis:  " + msg.random(scribdWikis));
  });
  //responds with a git cheat sheet
  bot.respond(/git cheat sheet/i, function (msg) {
    return msg.send("https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf  " + "<----Try this!");
  });
  bot.respond(/exit class/i, function (msg) {
    return msg.reply("https://docs.google.com/forms/d/110rch9yaoimhehaVWSwEiw1hAToBl4X0MPyyMDdAmBo/viewform?edit_requested=true");
  });

  //Joke section tell random joke, lets try to add three more responses to this good  one response
  bot.respond(/you are funny/i, function(msg) {
    return msg.send(" I have more jokes. Want more? Just type: another joke");
  });
  bot.respond(/type another joke/i, function(msg) {
    return msg.send(" We have a comedian here, Let me tell the jokes:");
  });
  bot.hear(/another joke/i, function(msg) {
    return msg.reply(msg.random(jokes));
  });
  // joke option with yes or no option -yes tells a joke - no sends a funny image
  bot.respond(/make me laugh/i, function (msg) {
    return msg.reply("Ok Do you like jokes?, I find there are two types those who do and those who don't");
  });
  bot.respond(/I (.*) like jokes/i, function (msg) {
    let option;
    option = msg.match[1];
    if (option === "do") {
      return msg.reply(msg.random(jokes));
    } else if (option === "don't"|| "dont") {
      
      // set of random gifs to send back
      let notFunny = [      
        "https://i.imgur.com/6Rbwrthh.jpg",
        "https://imgur.com/NnT909P",
        "https://i.imgur.com/vskKxp7.gif",
      ];
      return msg.reply(msg.random(notFunny));
    }
  });

  // travel not working as expected come back to debug
 /* const travel = {
    europe:  "Paris, France",
    southAsia: "Bali, Indonesia",
    northAsia: "Phuket, Thailand",
    asia: "Tokyo, Japan",
    america: "Tulum, Mexico"
};
  bot.respond(/travel/i, function (msg) {
    for(let key in travel) {
      return msg.send(travel[key]);
      
      
    };
    
  });  */
  
// array of jokes to pick from at random
  const jokes = [
    "What did the duck say when she bought a lipstick? Put it on my bill!",
    "What do you call a man with a rubber toe?.... Roberto!",
    "Where did the computer go dancing?.... The disc-o!",
    "What do bees do if they need a ride?..... Wait at the buzz stop!",
    "What do you give to a sick lemon?..... Lemon aid!",
    "What did the little mountain say to the bigger mountain? .... Hi Cliff!",
    "What do you call a monkey that loves Doritos?.... A chipmunk!",
    "Why did the can crusher quit his job?.... Because it was soda pressing!",
    "Why are there gates around cemeteries?.... Because people are dying to get in!",
    "What do you call a cow with two legs?... Lean beef!",
    "Do you remember that joke I told you about my spine?.... It was about a weak back!",
    "I just went to an emotional wedding.... Even the cake was in tiers.",
    "When's the best time to go to the dentist?.... Tooth-hurtie!",
    "What do you call a dangerous sun shower?.... A rain of terror!",
    "Why did the droid cross the road?.... it was programmed by a chicken.",
    "What do you call a farm that makes bad jokes?....Corny!",
    "Why do fish live in salt water?... Because pepper makes them sneeze!",
    "What streets to ghosts haunt?....Dead ends!",
    "What do you tell actors to break a leg?.....Because every play has a cast!",
    "What kind of dogs love car racing?....Lap dogs!",
    "What did Winnie the Pooh say to his agent?....'Show me the honey!''",
    "What do you call birds who stick together?....Vel-crows.",
    "Today I gave my dead batteries away.....They were free of charge.",
    "What did the doctor tell his patient with a bug in his eye?.....Wash your face"
  ];
//array of work wikis to return for new team members
  const scribdWikis = [
    "https://scribdjira.atlassian.net/wiki/spaces/QA/pages/421331247/Testing+Debugging+on+the+Production+Builds",
    "https://scribdjira.atlassian.net/wiki/spaces/QA/pages/421331247/Testing+Debugging+on+the+Production+Builds#Testing+DebuggingontheProductionBuilds-HowtosendinaBugReport",
    "https://scribdjira.atlassian.net/wiki/spaces/QA/pages/116883504/Mobile%2BQA",
    "https://scribdjira.atlassian.net/wiki/spaces/QA/pages/30540609/Viewing+Testing+Analytics+or+Crashes",
  ];






};
