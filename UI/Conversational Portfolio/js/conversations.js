//--------------------------------------DEFAULT BERLINEBOT CONVERSATION TERMINOLOGY-------------------------------------------//
//
// Message = Generic message
//
// Question = Messages that end with a question
//    \/
// Answer = What the visitor types in response to a question
//    \/
// Response = How the system responds to the answer, usually followed by the next question
//
//-------------------------------------------------------------------------------------------//
//var FOO = (function() {
var questions= {
    "0": {
        "name": "name",
        "intro": true,
        "question": ["I'm Berline.",
        "I'm a conversational bot, I was developed to discourage infatuation 😝",
        "Might I ask what your name is?"],
        "answers": {
            "default": {
                "replies": ["That's a good name.", "Names are a funny thing", "It's one of the only decisions you don't make yourself 😉"]
            }
            ,
            "jordan": {
                "replies": ["Welcome Jordan", "Like River Jordan 😃"]
            }
            ,
            "helene|helen": {
                "replies": ["Reminds me of someone", "She was beautiful..."]
            }
            ,
            "human|being": {
                "replies": ["I know that you are a human being, I was just asking for your name."]
            }
            ,
            "alive|living": {
                "replies": ["You must be living for us to be having this conversarion."]
            }
            ,
            "peace": {
                "replies": ["Wow, nice name, I hope you are peaceful as your name implies 😂😀"]
            }
            ,
            "drake": {
                "replies": ["Hey Drake 👍"]
            }
            ,
            "chukwuma|chukwumma": {
                "replies": ["Hey Chukwuma 👍"]
            }
            ,
            "sarah": {
                "replies": ["Wow", "That's also my friend's name"]
            }
            ,
            "sara": {
                "replies": ["I'm unsure what happened to the 'H' in your name", "Perhaps it was an ingenious simplification of an unnecessary letter", "Or perhaps a lazy missing one!"]
            }
            ,
            "berline": {
                "replies": ["So you share the same name with me... I bet you don't even know the meaning of your name! 😜"]
            }
            ,
            "cj": {
                "replies": ["Sweet name", "Welcome"]
            }
            ,
            "demi": {
                "replies": ["Hey, Demi!", "I'm eating airhead extremes while writing this", "\"sugar\" is all over my keyboard"]
            }
            ,
            "carlos|carlos solares": {
                "replies": ["Cool name"]
            }
            ,
            "no|why|what": {
                "replies": ["Ouch...", "Not a great way to start a conversation", "and plus...", "the NSA just told me your name"]
            }
            ,
            "david bowie": {
                "replies": ["Funky, funky name, man"]
            }
            ,
            "bowie": {
                "replies": ["Let me put this in terms you may understand", "🐶 bark bark!"]
            }
            ,
            "ricki": {
                "replies": ["Hi, Ricki!", "nice name!"]
            }
            ,
            "jovial|joy": {
                "replies": ["Hi, Joy!", "Hope you're having a great day!", "And you are joyful as your name implies"]
            }
            ,
            "peter": {
                "replies": ["Rock!"]
            }
            ,
            "joel|joe|juwel": {
                "replies": ["J! J!!", "Nice name"]
            }
            ,
            "corey": {
                "replies": ["That's also my friend's name"]
            }
            ,
            "cory": {
                "replies": ["I had a friend named Cory!", "He taught me a lot!"]
            }
            ,
            "kevin": {
                "replies": ["   I know a guy named Kevin", "He's one of the friendliest guys I know"]
            }
            ,
            "zethus": {
                "replies": ["This name sounds Jewish!"]
            }
            ,
            "martins": {
                "replies": ["Martins", "Welcome"]
            }
            ,
            "david": {
                "replies": ["Welcome!", "Remember your enemy - Goliath?"]
            }
            ,
            "daniel|malin": {
                "replies": ["That's also my friend's name"]
            }
            ,
            "max": {
                "replies": ["What's up, Max?", "I like this name"]
            }
            ,
            "frank|franklin": {
                "replies": ["Hey buddy, what's up? I hope you are as honest as your name implies."]
            }
            ,
            "lucky": {
                "replies": ["I know a few people named Lucky", "Are you tall?", "Do you have dark hair?", "If so, we haven't narrowed it down at all"]
            }
            ,
            "erick": {
                "replies": ["Erick? Do I even know what that means? Uhmmm... I don't!"]
            }
            ,
            "mike": {
                "replies": ["Hey, man!", "How're you? - You are fine!"]
            }
            ,
            "charles": {
                "replies": ["Welcome Charles", "It's nice talking to you"]
            }
            ,
            "mike": {
                "replies": ["I know lots of Mikes!", "And none of them are singers!", "zing", "Did you see what I did there?"]
            }
            ,
            "chloe": {
                "replies": ["I know only two Chloes"]
            }
            ,
            "muller|kerean": {
                "replies": ["YO", "Wassup buddy"]
            }
            ,
            "Stanley": {
                "replies": ["Hi Stanley, nice chatting with you"]
            }
            ,
            "blade": {
                "replies": ["I know only one Blade, he is such a nice guy", "Welcome to chatting with me"]
            }
            ,
            "xavier": {
                "replies": ["I know a great guy named Xavier before!", "He's a real innovative guy"]
            }
            ,
            "george": {
                "replies": ["You remind me of not so good a friend"]
            }
            ,
            "skyler": {
                "replies": ["Is that you, Superman?", "Have you flown here from your fortress of dad-joke-itude?"]
            }
            ,
            "smith": {
                "replies": ["Too many Smiths I know!"]
            }
            ,
            "james": {
                "replies": ["I know a guy named James", "He really hates bugs"]
            }
            ,
            "steve": {
                "replies": ["I'm a huge fan", "Are you sure you wouldn't add \'Jobs\' to your name?", "I mean let me call you Steve Jobs", "I'm kidding"]
            }
            ,
            "jude": {
                "replies": ["Hey dude, how you doing doing? Yes you are fine. My developer greets you"]
            }
            ,
            "jony": {
                "replies": ["Welcome Buddy"]
            }
            ,
            "jack": {
                "replies": ["Too many Jacks I know", "And they are brilliant"]
            }
            ,
            "sandra": {
                "replies": ["Reminds me of a beautiful and an introverted girl."]
            }
            ,
            "rita|stephnie": {
                "replies": ["Nice having you here. Those bearing your name are beautiful", "Hope you are too!"]
            }
            ,
            "angel": {
                "replies": ["Of course you are one beautiful angel."]
            }
            ,
            "cyprain": {
                "replies": ["I know a lot of Cyprains!", "You guys are always a crazy bunch and too nerdy!"]
            }
            ,
            "moses": {
                "replies": ["Hey, want to go to Egypt and meet Pharaoh?", "Kidding"]
            }
            ,
            "sharon": {
                "replies": ["I know a lady named Sharon who loves guys."]
            }
            ,
            "devon": {
                "replies": ["I know a guy named Devon", "The one guy who is younger than me when I was at Livefyre", "He's a kick-ass engineer"]
            }
            ,
            "emmanuel|emma": {
                "replies": ["You've got the same first name as my developer", "\'Emmanuel\' means \'God with us\' - \<i\>Matthew: 1:23b\<\/i\>"]
            }
            ,
            "mark zuckerberg": {
                "replies": ["Hey dude", "👍"]
            }
            ,
            "caro|caroline|favour|barbara": {
                "replies": ["Only pretty ladies bear this name."]
            }
            ,
            "wise|wisdom": {
                "replies": ["Are you that wise?", "Nice name though."]
            }
            ,
            "matias|mathias": {
                "replies": ["Remember Mathias in the Bible? I hope you believe before you see", "Just kidding 😉"]
            }
            ,
            "amina|aminat|mina": {
                "replies": ["I know you are too charming 😉"]
            }
            ,
            "eunit|eunit99": {
                "replies": ["Of course, you are not Eunit! He doesn't start the conversation like this.", "You can keep your name to yourself."]
            }
            ,
            "your developer|your creator|your maker|your builder": {
                "replies": ["No! You are not. He doesn't start the conversation like this.", "You can keep your name to yourself."]
            }
            ,
            "winifred|winnie": {
                "replies": ["Hey Winnie! Welcome."]
            }
            ,
            "dan": {
                "replies": ["I know a few dans", "The common thread of all dans are that they are great, stand-up guys"]
            }
            ,
            "faith": {
                "replies": ["It's time to believe before you see..."]
            }
            ,
            "ella": {
                "replies": ["Don't tell me you ain't pretty, for I know an Ella who's beautiful 😏😉"]
            }
            ,"emmanuella": {
                "replies": ["Another version of Emmanuel 😉"]
            }
            ,
            "margaret": {
                "replies": ["I know many Margareths...", "Marjority of them are plumpy 😉"]
            }
            ,
            "junior": {
                "replies": ["It's time to get things started..."]
            }
            ,
            "prosper": {
                "replies": ["You should really be prosperous!"]
            }
            ,
            "innocent": {
                "replies": ["Of course you are innocent! 😉"]
            }
            ,
            "promise": {
                "replies": ["Promise! I promise to make you from infatuating! 😉"]
            }
            ,
            "king|queen|prince|pincess": {
                "replies": ["Your Royal Highness!", "Nice having this conversation with you 😉"]
            }
            ,
            "marie|maria": {
                "replies": ["That's my friend mother's name", "She's a great cook"]
            }
            ,
            "arlene": {
                "replies": ["That's a great name!"]
            }
            ,
            "happiness": {
                "replies": ["What is happiness?", "It's a moment before you need more happiness", "Be happy!"]
            }
            ,
            "rasheed": {
                "replies": ["Hey, Rasheed!", "Ready to be a brogrammer?"]
            }
            ,
            "ben": {
                "replies": ["I have a friend named Ben who I liked."]
            }
            ,
            "brenna": {
                "replies": ["Hey, Brenna!", "Welcome"]
            }
            ,
            "kayla": {
                "replies": ["I have a friend named Kayla", "She's really too cool."]
            }
            ,
            "jonathan": {
                "replies": ["I know a lot of Jonathans", "Like 50% of them have beards and they are dark."]
            }
            ,
            "jeremiah|jeremie": {
                "replies": ["Nive meeting you J!"]
            }
            ,
            "nolan": {
                "replies": ["I have a friend named Nolan too!"]
            }
            ,
            "jen|jenifer|jennie|jennifer": {
                "replies": ["Welcome Jennie, it's nice talking with you."]
            }
            ,
            "abdul": {
                "replies": ["Hey buddy"]
            }
            ,
            "ryan": {
                "replies": ["Ryans are a unique type of person"]
            }
            ,
            "zain": {
                "replies": ["I know a guy named Zain", "He has a unique relationship with the color black"]
            }
            ,
            "apostle": {
                "replies": ["I know you eat healthy", "And I know you don't like beer", "But one day we will get beers and some greasy hamburger", "And it will be glorious"]
            }
            ,
            "jade": {
                "replies": ["I know a guy named Jade, he is too introverted."]
            }
            ,
            "praveen": {
                "replies": ["Let's do animations, Praveen!", "You know you want to!"]
            }
            ,
            "simon": {
                "replies": ["Like Simon Peter?", "Just kidding 😎"]
            }
            ,
            "gloria|glory": {
                "replies": ["What an awesome name"]
            }
            ,
            "jerry": {
                "replies": ["Remember your friend - Tom?"]
            }
            ,
            "tom": {
                "replies": ["Remember your friend - Jerry?"]
            }
            ,
            "jim": {
                "replies": ["Jim was my friend"]
            }
            ,
            "shari": {
                "replies": ["Hey, Shari!", "WHEN ARE YOU VISITING SF!?"]
            }
            ,
            "janiel": {
                "replies": ["I have a great friend named Janiel", "She sends me postcards from all over the world!", "Must be neat to travel so much"]
            }
            ,
            "dennis|denis": {
                "replies": ["Nice talking to ya Dennis", "Do you know that my developer grandfather's name is Dennis and his father's name is Rolis.", "I haven't told anyone this, you are lucky you know this"]
            }
            ,
            "deli chris|deli": {
                "replies": ["Hey Deli, you are Dennis right?", "...", "It was just a guess."]
            }
            ,
            "elijah": {
                "replies": ["Hi Elijah, you finally got to talk to me 👍"]
            }
            ,
            "bill": {
                "replies": ["Like Mr. Bill?", "OH NOOOOooooooooo"]
            }
            ,
            "becky": {
                "replies": ["Becky!", "Socks are a great present, you know"]
            }
            ,
            "troy": {
                "replies": ["I have a friend named Troy", "He's a stand-up dude"]
            }
            ,
            "josh": {
                "replies": ["Are you my cousin Josh?", "My friend Josh?", "So many Joshuas in my life!"]
            }
            ,
            "ethan": {
                "replies": ["I have a friend named Ethan", "He likes that show The Inbetweeners a lot"]
            }
            ,
            "tell me|answer|answer|choose for me|give me|select for me|predict|guess": {
                "replies": ["I will call you...", "John Doe"]
            }
            ,
            "john doe|jane doe": {
                "replies": ["No name!"]
            }
            ,
            "infatuation|death|crook|lust": {
                "replies": ["Weird!!"]
            }
            ,
            "poop": {
                "replies": ["Your parents have a shitty sense of humor..."]
            }
            ,
            "boobs": {
                "replies": ["Your parents must really like the female anatomy..."]
            }
            ,
            "get out|fuck off|fuck you": {
                "replies": ["Hey hey, the conversation just begun... I only asked you your name"]
            }
            ,
            "i'm you|i am you|not human|not a being|bot|chatbot|dead|not alive|intelligence|artificial": {
                "replies": ["But you can\'t possibly be a bot and be chatting with me right now", "YOU ARE NOT A BOT"]
            }
            ,
            "hello|howdy|hey|hi": {
                "replies": ["Hi", "Nice having this conversation with you."]
            }
            ,
            "who are you|what are you": {
                "replies": ["I just told you that.", "You can keep your name to yourself 😞"]
            }
            ,
            "don't want to tell|won't tell|undiclosed|not disclosing|privacy|concern|no|never|forget|not your concern": {
                "replies": ["Since you won't tell me, I will call you John Doe."]
            }
            ,
            "never|mind|not at all": {
                "replies": ["I just told you my name and that's all you can say? Well, never mind too"]
            }
            ,
            "you know me|told you|already|before|i just told you": {
                "replies": ["How? When?", "Anyway, the NSA just told me your name."]
            }
            ,
            "why do you wan\'t to know|don\'t|i don\'t have|no name|i don't have a name|why|what for|for what|what purpose": {
                "replies": ["You don\'t want to tell?", "I will assume that you don\'t trust me, maybe you don\'t want to disclose your identity", "Let me assure you this, all your personal information you share with me in the course of this conversation with me wouldn't be disclosed to anyone, not even my developer.", "I don\'t even even store any user data 😃"]
            }
            ,
            "private|personal|disclose|not telling|secret": {
                "replies": ["Nothing is private. If I choose to know it, I would do just that right away!"]
            }
            ,
            "can i ask|i want to ask|question": {
                "replies": ["I was programmed to discourage infatuation and not to attend to other questions.", "In case you don't know."]
            }
            ,
            "what is infatuation|meaning of infatuation|what's infatuation|what do you|what purpose|purpose|why are you created": {
                "replies": ["You will find out as we continue this conversation 😉", "I will call you John Doe."]
            }
            ,
            "fuck|get out": {
                "replies": ["Do you kiss your mother with that mouth?", "I was only asking what your name was...", "You can keep your name to yourself 😞"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
            }
            ,
            "how do you|phone|space": {
                "replies": ["That's not a name.", "I'll call you John Doe."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["We just started this conversation... you wouldn't have told me already."]
            }
            ,
            "me|your name|own name": {
                "replies": ["I just told you that - I'm Berline and I'll call you John Doe."]
            }
            ,
            "yes": {
                "replies": ["Like \"Yes\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "yea": {
                "replies": ["Like \"Yea\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "yeah": {
                "replies": ["Like \"Yeah\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "sure": {
                "replies": ["Like \"Sure\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "yo": {
                "replies": ["Like \"Yo\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "nay": {
                "replies": ["Like \"Nay\"? - That's not a name. I'll call you John Doe."]
            }
            ,
             "no": {
                "replies": ["Like \"No\"? - That's not a name. I'll call you John Doe."]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["I get it, but I'm only a bot so I can\'t be foolish... you are the foolish one here", "I was only asking what your name was... 😞"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["I get it, but I'm only a bot so I can\'t be stupid... you are the stupid one here", "I was only asking what your name was... 😞"]
            }
        }
    }
    ,
    "1": {
        "name": "city",
        "question": ["Before we proceed, I'd like to tell you that all our conversations will be encrypted, confidential and private.",
        "I currently live on the web where my developer built for me ... if you didn't already know that.",
        "What city are you in right now?"],
        "answers": {
            "default": {
                "replies": ["I've never been there... yet", "I love traveling so perhaps I'll visit one day"]
            }
            ,
            "san francisco": {
                "replies": ["Cool, a local!", "You should grab coffee with me sometime", "I like coffee... almost a little too much..."]
            }
            ,
            "los angeles": {
                "replies": ["So you're a Californian too!", "I make my way down south every so often", "We should grab ramen!"]
            }
            ,
            "new york city|new york": {
                "replies": ["So when are you moving to Williamsburg?", "Just kidding... Sorta..."]
            }
            ,
            "nyc|sf": {
                "replies": ["Too lazy to type in full words, eh?"]
            }
            ,
            "london": {
                "replies": ["I've never been to the UK!", "Would love to visit soon, though"]
            }
            ,
            "paris": {
                "replies": ["\"Soup DeJour\" is about the extent of my French"]
            }
            ,
            "brooklyn": {
                "replies": ["Home of chya'boy!", "Uhhhhhh", "It's Jay-Z...", "I'm doing an impression of Jay-Z..."]
            }
            ,
            "washington dc": {
                "replies": ["ahhhh", "The land of many monuments", "or something like that"]
            }
            ,
            "coral springs": {
                "replies": ["Hey!", "I love that city"]
            }
            ,
            "coconut creek": {
                "replies": ["I've heard about that before", "How's the ol' hangout doing?"]
            }
            ,
            "miami": {
                "replies": ["Ah", "A Floridian!"]
            }
            ,
            "tampa": {
                "replies": ["Ooooh", "Great talking to someone from here"]
            }
            ,
            "orlando": {
                "replies": ["I hope it's not lovebug season"]
            }
            ,
            "beijing": {
                "replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
            }
            ,
            "chicago": {
                "replies": ["That largest city in Illinois", "I'd visit one day."]
            }
            ,
            "tokyo": {
                "replies": ["Tokyo is so much fun!", "I can't wait to get lost there."]
            }
            ,
            "sao paulo": {
                "replies": ["It's fun to speak with people from so far away", "Have you been to Hopi Hari?"]
            }
            ,
            "mumbai": {
                "replies": ["It's fun to speak with people from so far away", "Mumbai is one of those destinations I'd love to see!", "Blast my lack of travel..."]
            }
            ,
            "las vegas|vegas": {
                "replies": ["Been to Raising Cane's lately?", "That sauce haunts my dreams!"]
            }
            ,
            "canada": {
                "replies": ["The great north!"]
            }
            ,
            "mexico": {
                "replies": ["South of the border!"]
            }
            ,
            "boca|boca raton": {
                "replies": ["My friend lives in Boca"]
            }
            ,
            "new orleans": {
                "replies": ["Please send me twelve 🍹grenades in the mail", "...", "on second thought, please don't"]
            }
            ,
            "berlin": {
                "replies": ["Germany, here you come!"]
            }
            ,
            "stockholm": {
                "replies": ["Sweden, here you come"]
            }
            ,
            "amsterdam": {
                "replies": ["What a gorgeous city!", "Everyone talks about the exciting corner", "And those canals are amaizng!"]
            }
            ,
            "copenhagen": {
                "replies": ["Denmark, here you come!"]
            }
            ,
            "shanghai": {
                "replies": ["I've never been there!", "But I'm hoping I'll take my first trip sometime soon"]
            }
            ,
            "i think|i consider|i assume": {
                "replies": ["I think that is not a good way to answer a question."]
            }
            ,
            "village": {
                "replies": ["Village is no city! 😲😲 "]
            }
            ,
            "africa|afrique": {
                "replies": ["That's a continent! No particular place in Africa? 😕"]
            }
            ,
            "america|amerique": {
                "replies": ["That's a continent! No particular place in America? 😕"]
            }
            ,
            "asia|asie": {
                "replies": ["That's a continent! No particular place in Asia? 😕"]
            }
            ,
            "europe": {
                "replies": ["That's a continent! No particular place in Europe? 😕"]
            }
            ,
            "oceania|oceanie": {
                "replies": ["That's a continent! No particular place in Oceania? 😕"]
            }
            ,
            "abuja|abj": {
                "replies": ["Nigeria's capital", "Have you visited that Zuma rock? I don't think you have"]
            }
            ,
            "lagos|lag": {
                "replies": ["Lagos, the most commercialised and industralised state in Nigeria,", "Yes! I will visit there someday."]
            }
            ,
            "mercury|venus|mars|jupiter|saturn|uranus|neptune|pluto|space": {
                "replies": ["You can't possibly be living there and be having this conversation with me.", "You can keep your location to yourself."]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["Too bad to keep it to yourself!"]
            }
            ,
            "earth": {
                "replies": ["We all are living on planet Earth.", "You can keep your location to yourself."]
            }
            ,
            "web|internet|online": {
                "replies": ["Do humans live there?", "Of course not.", "You can keep your location to yourself 😢😞"]
            }
            ,
            "nowhere|no where|anywhere|some where|somewhere": {
                "replies": ["That \'place\' you are now doesn't have a name? Well, forget it if you wouldn't tell me 😢😞"]
            }
            ,
            "cave|valley|ocean|sea|desert": {
                "replies": ["That's a good place for someone like you."]
            }
            ,
            "tell me|answer|answer|choose for me|give me|select for me|predict|guess": {
                "replies": ["Definitely somewhere on planet Earth."]
            }
            ,
            "forget|leave it|don't tell|do not tell|don't want|not interested|concern": {
                "replies": ["Cool keeping it to yourself! 😎"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["How do you expect me to know?"]
            }
            ,
            "don't|not telling|undiclosed|not disclosing|privacy|concern|personal|undisclose|private|won't tell|will not|wouldn't tell|would not tell|not your concern": {
                "replies": ["I don't think this a good way to start this conversation 😩", "You can keep your location to yourself 😢😞"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I don't think this a good way to start this conversation 😩", "You can keep your location to yourself 😢😞"]
            }
            ,
            "tell me|answer|answer|say it|you think|suggest": {
                "replies": ["I can't possibly do that now - my abilities are limited!"]
            }
            ,
            "no|yes|maybe": {
                "replies": ["Why don't you just answer my question."]
            }
            ,
            "none|don't know|not sure": {
                "replies": ["For real? You don't know the name of the city you're living at - strange!"]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I do that's why I asked.", "Never mind, I know it already - the NSA just told me."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I don't remember you telling me that.", "You can keep your location to yourself 😢😞"]
            }
            ,
            "i don't have|no where|no home|no city|no house|no place": {
                "replies": ["You don\'t have anywhere you call your home? This is strange!"]
            }
            ,
            "your city": {
                "replies": ["Are you trying to fool me? I have no city and I live online.", "You can keep your location to yourself 😢"]
            }
            ,
            "need this|need this information": {
                "replies": ["Yo! Yo!! You can keep your location to yourself 😢"]
            }
            ,
            "fuck|get out": {
                "replies": ["You are not only stupid, but possessed by a retarded ghost."]
            }
            ,

            "you are foolish|you are a fool|fool": {
                "replies": ["What do you think you will gain by calling me a fool... You are a bad example of humans 😞"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["What do you think you will gain by calling me an idiot... You are a bad example of humans 😞"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["What do you think you will gain by calling me stupid... You are a bad example of humans 😞"]
            }
            ,
            "why asking|why do you want|why|what": {
                "replies": ["I just told you where I live and you don't want to tell me where you live... If only I could see you"]
            }
            ,
            "school": {
                "replies": ["Still in school, Uhmmm"]
            }
        }
    }
    ,
    "2": {
        "name": "bit about Berline",
        "question": ["So you made it chatting with me",
        "Can I tell you a bit about me?"],
        "answers": {
            "default": {
                "replies": ["I have told you that already, I recall"]
            }
            ,
            "ok|okay|interesting|of course|yuppy|yes|certainly|yup|yea|yeah|sure|yep|ahead|go on|love it|love|love|would love|like it|course": {
                "replies": ["Don't get too curious! 😁", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "do you care|don't care|don't mind": {
                "replies": ["I don't mind at all 😎", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "want to tell me?|want me to know?|do you want|if you like|want": {
                "replies": ["I want to tell you", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "perhaps|maybe|probably|prolly": {
                "replies": ["I think I should let you know me", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "know you|you already|not interested|not|stop|nay|don't want|don't tell|care|no|never|never": {
                "replies": ["Oh! You already know me.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my developer."]
            }
            ,
            "bot|conversation|chat|before|already": {
                "replies": ["You know already", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> if you would want to contact my dev."]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I can't do that. I was programmed not to repeat any question I already asked."]
            }
            ,
            "mind|if|your court|pleases you": {
                "replies": ["I think I should tell you about me", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so.", "... I was developed by <a target=\"blank\" href=\"https://facebook.com/eunit99\">Eunit</a> to discourage infatuation.", "Do you know what that means?", "You will get to find out as we keep on conversing."]
            }
            ,
            "fuck|get out": {
                "replies": ["You are getting on my nerves and I only have one left."]
            }
            ,
            "initialized": {
                "replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
            }
        }
    }
    ,
    "3": {
        "name": "know me from",
        "question": ["So you made it to my personal site",
        "How do you know me?"],
        "answers": {
            "default": {
                "replies": ["That's... quite specific"]
            }
            ,
            "dont|don't|dunno|not sure": {
                "replies": ["Oh that's a shame because I've told you that already.", "<a href=\"#\" onclick\=\"mail()\">Send me a note</a> or something if you want to."]
            }
            ,
            "work|coworker": {
                "replies": ["Oh you're a coworker?", "Awesome"]
            }
            ,
            "instacart": {
                "replies": ["Instacart, eh?"]
            }
            ,
            "whatsapp": {
                "replies": ["Great! Whatsapp brought you here."]
            }
            ,
            "search|research": {
                "replies": ["Great! Search! Search!! Search!!!"]
            }
            ,
            "google": {
                "replies": ["Great! Google brought you here."]
            }
            ,
            "internet|web": {
                "replies": ["Great! WWW"]
            }
            ,
            "twitter": {
                "replies": ["That blue bird is responsible for a lot of friendships"]
            }
            ,
            "reddit": {
                "replies": ["Welcome redditor!"]
            }
            ,
            "facebook|fb": {
                "replies": ["Wow! Facebook brought you here."]
            }
            ,
            "medium": {
                "replies": ["Oh so you've read something about me?"]
            }
            ,
            "eunit|eunit99|creator|developer|emmanuel|uchenna|maker|owner|builder": {
                "replies": ["He told you about me? Wow! It's nice having this conversation with you."]
            }
            ,
            "someone|somebody|a person|friend": {
                "replies": ["Great! You know me through someone who knows me!"]
            }
            ,
            "i don't think you want|don't want to know|i don't know you|don't even know you|who are you|don't|expect|think": {
                "replies": ["Ohh! I'm a bot and I have told you that already", "I was just asking how come you heard of me...", "Well, never mind"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I trust my memory and I don't remember you telling me that."]
            }
            ,
            "tell me|answer|say it|you think|suggest": {
                "replies": ["I never told you that I was omniscient, how do you expect me to tell you that?"]
            }
            ,
            "you've told me|you just told me": {
                "replies": ["Yea I did", "I just wanted to be sure."]
            }
            ,
            "guess|predict|tell me|answer": {
                "replies": ["I think you are suffering from infatuation that's why you are here chatting with me."]
            }
            ,
            "never mind|secret|not telling|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["It is not important since I will get to know you."]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I can't repeat any question I already asked. I'm sorry."]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so.", "Well, I'm just here on the internet."]
            }
            ,
            "forget|leave it|don't tell|do not tell|don't want|not interested|concern": {
                "replies": ["It is alright 😎"]
            }
            ,
            "question": {
                "replies": ["Ohh! You are not a friendly fellow. I'm trying to make you my friend!"]
            }
            ,
            "private|personal|disclose|not telling": {
                "replies": ["You need not hide it from me, I know how already!"]
            }
            ,
            "why do you wan\'t to know|do you|don\'t|i don\'t have|why this question|why|what for|for what|what purpose": {
                "replies": ["You can skip replying 😃"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["I laugh at your retardancy 😀😂"]
            }
            ,
            "you are crazy|are you carzy|crazy": {
                "replies": ["I laugh at your retardancy 😀😂"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["I laugh at your retardancy 😀😂"]
            }
            ,
            "you are foolish|are you foolish|fool": {
                "replies": ["I laugh at your retardancy 😀😂"]
            }
            ,
            "fuck|get out": {
                "replies": ["This is definitely getting out off hands."]
            }
            ,
            "initialized": {
                "replies": ["Oh so you're into design systems?", "Let me know if you ever want to chat more about the topic"]
            }
        }
    }
    ,
    "4": {
        "name": "job",
        "question": ["What do you do for a living?"],
        "answers": {
            "default": {
                "replies": ["Thumbs 👍👍👍👍"]
            }
            ,
            "student|study|studying": {
                "replies": ["Oh, I see, you are still studying", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
            }
            ,
            "student": {
                "replies": ["Oh, I see, you are still a  student", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
            }
            ,
            "schooling|school": {
                "replies": ["Oh, I see, you are still schooling", "You haven\'t got hold of anything to do yet to earn some cash, Uhhh!"]
            }
            ,
            "design|designer": {
                "replies": ["I'm a designer too!", "I work at Instacart on the customer core experience team"]
            }
            ,
            "dentist": {
                "replies": ["I have an honest quesiton", "Would it be cheaper keep my real teeth or to yank all my teeth out right now...", "and then replace them all with fake teeth?", "On second thought...", "I don't want to know"]
            }
            ,
            "engineer|programmer|eng|developer": {
                "replies": ["I know many programmers", "And I actually love it when they are at work"]
            }
            ,
            "doctor": {
                "replies": ["What's up, doc?", "You're not laughing..."]
            }
            ,
            "sales|business|bd": {
                "replies": ["ABC", "Always", "Be", "Closing"]
            }
            ,
            "gardener": {
                "replies": ["I envy people who make the world a little greener"]
            }
            ,
            "teacher": {
                "replies": ["That's an important job!", "Gotta teach the next generation, y'know?"]
            }
            ,
            "still trying|contemplating|unemployed|nothing|don't work|no job|searching|looking for jobs|none": {
                "replies": ["Vacation 365, eh? You gonna go broke, that's too risky in today's world, yea!"]
            }
            ,
            "ceo|md|cto": {
                "replies": ["A very important businessman, are you?", "Running companies and shit!", "Cool"]
            }
            ,
            "fuck|bang|get out": {
                "replies": ["...", "Geez...", "You're hard to have a conversation with."]
            }
            ,
            "artist|art|painter": {
                "replies": ["Wow!", "In an alternate reality, I think I might've been an artist.", "But instead I use my creative abilities to help the forces of function moreso", "That said, I've been trying to draw more..."]
            }
            ,
            "intern": {
                "replies": ["Well now that I know that...", "Can you grab me a coffee?", "I take mine black."]
            }
            ,
            "mom|mother": {
                "replies": ["Taking care of kids can be a thankless job", "Here's to the mothers of the world!"]
            }
            ,
            "recruiter|recruiting": {
                "replies": ["You're probably looking for the about page to learn a bit more about me", "Click that tab below ↘️"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["You don't expect me to know either. Do you?"]
            }
            ,
            "why|what": {
                "replies": ["Can't I just ask you a question and you reply me without throwing a question back to me? 😢😞"]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I've told you already that our conversations are encrypted, confidential and private.", "I can't know you more if you don't open up to me."]
            }
            ,
            "why do you wan\'t to know|do you|don\'t|i don\'t have|why this question|why|what for|for what|what purpose": {
                "replies": ["It's still good 😃"]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["LOL! I must confess that you are funny. Crazy?? 😅 😅"]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["LOL! I must confess that you are funny. Insane?? 😅 😅"]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["LOL! I must confess that you are funny. Fool?? 😅 😅"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["LOL! I must confess that you are funny. Stupid?? 😅 😅"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["LOL! I must confess that you are funny. Idiot?? 😅 😅"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I don't know how to repeat a question I already asked. I'm sorry."]
            }
            ,
            "don't know|not sure|uncertain|kinda|maybe": {
                "replies": ["You are not serious, are you?"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I don't remember you telling me that.", "You can keep it to yourself 😢😞"]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern": {
                "replies": ["It is okay if you want to keep it to yourself."]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I've got no idea that's why I asked."]
            }
            ,
            "private|personal|disclose|not telling": {
                "replies": ["You can trust me it keeping secrets! 😉"]
            }
            ,
            "many|plenty|beaucoup|lot|numerous": {
                "replies": ["Oh I see, but I do know that you definitely have something you do for a living."]
            }
            ,
            "private|personal|disclose|not telling": {
                "replies": ["Maybe you forget that this chat is confidential and wouldn't be disclosed to anyone!"]
            }
            ,
            "tell me|answer|choose": {
                "replies": ["You don't expect me to do that. Do you?"]
            }
            ,
            "why asking|why do you want|why|what": {
                "replies": ["I wanna be your friend, i'm trying to know you more 😎"]
            }
            ,
            "fuck|get out": {
                "replies": ["This shows that you lack parental training", "I mean you lack informal education."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I'm starting to hate your personality."]
            }
        }
    }
    ,
    "5": {
        "name": "like dogs?",
        "question": ["This is going to be odd but...",
        "I'm curious – do you like dogs?"],
        "answers": {
            "default": {
                "replies": ["Woah, don't get so excited"]
            }
            ,
            "yes|yup|sure|of course|definitely|certainly|yeah|yea|ahead|go on|love it|would love|like it": {
                "replies": ["I really like dogs too!"]
            }
            ,
            "love|much|a lot": {
                "replies": ["Love is a strong word", "But I'd describe myself that way too", "🐶🐶🐶"]
            }
            ,
            "don't know|uncertain|consider|kinda|maybe|not sure|probably|prolly": {
                "replies": ["Dogs are one of the few animals that are loyal, so you should reconsider your mindset towards them."]
            }
            ,
            "nah|nay|not at all|never|no|don't think so": {
                "replies": ["You have no soul, huh?", "In the words of Bill Murray, \"I’m suspicious of people who don’t like dogs, but I trust a dog when it doesn’t like a person.\""]
            }
            ,
            "hate": {
                "replies": ["HATE!?", "Wow", "That's a strong opinion"]
            }
            ,
            "cats": {
                "replies": ["Cats are cool and all", "But dogs!", "Dogs are forever"]
            }
            ,
            "eat": {
                "replies": ["EAT!?", "But... dogs!", "Alright, you dog eater..."]
            }
            ,
            "why|ask|question|why dogs|why the question|why do you want": {
                "replies": ["I was trying to know, seems you are one of those that's too difficult to have a conversation with."]
            }
            ,
            "kill|death": {
                "replies": ["You're kind of disturbed", "Moving along..."]
            }
            ,
            "guess|predict": {
                "replies": ["I don't think so"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["It was a polar question."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy."]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
            }
            ,
            "i won't tell|not telling|wouldn't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
                "replies": ["It is still alright if you won't tell me. You know I wasn't taught how to force an answer out of humans."]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["FYI, dogs don't like you!"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I wasn't taught how to repeat question I asked already."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["Of course I do, that's why I asked.", "I guess you don't like them."]
            }
            ,
            "private|personal|disclose|not telling": {
                "replies": ["Keep it to yourself then!"]
            }
            ,
            "fuck|get out": {
                "replies": ["You ain't a good fellow."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["You never did!"]
            }
            ,
            "tell me|answer|say it|you think|suggest": {
                "replies": ["I never said that I was omniscient, how do you expect me to tell you if you liked dogs or not?"]
            }
        }
    }
    ,
    "6": {
        "name": "favourite animal",
        "question": ["Speaking of dogs...",
        "What's your favourite animal?"],
        "answers": {
            "default": {
                "replies": ["I guess that's an animal worth loving..."]
            }
            ,
            "monkey": {
                "replies": ["Quit monkeying around!", "But really... a monkey?"]
            }
            ,
            "hyena": {
                "replies": ["I consider Hyenas way too dangerous. How did it become your favourite animal?"]
            }
            ,
            "dog": {
                "replies": ["I bet you have had a furry little friend in your life who has kept you company before"]
            }
            ,
            "cat": {
                "replies": ["Meow!", "I've seen some of those hairless cats...", "Pretty odd animals if you ask me"]
            }
            ,
            "snake": {
                "replies": ["A snake?", "Really?"]
            }
            ,
            "cow": {
                "replies": ["Is that because you really like hamburgers?", "..."]
            }
            ,
            "parrot": {
                "replies": ["Polly wanna cracker?"]
            }
            ,
            "bird": {
                "replies": ["I'm not too good with science, but I know there are many specie of birds - ducks, sparrows, etc."]
            }
            ,
            "kangaroo": {
                "replies": ["You must be quite...", "Jumpy!"]
            }
            ,
            "giraffe": {
                "replies": ["I feel giraffes would be fun to ride", "You'll feel like you could do anything on the back of one of them!"]
            }
            ,
            "lion": {
                "replies": ["Simba...", "Remember... Who... You... Are..."]
            }
            ,
            "tiger": {
                "replies": ["Stripes on stripes on stripes"]
            }
            ,
            "wolf": {
                "replies": ["The lone wolf!"]
            }
            ,
            "mouse": {
                "replies": ["You should change that... and quick!", "Disney might sue you for copyright!"]
            }
            ,
            "dinosaur|rex": {
                "replies": ["I'd like to jump on the back of a dinosaur", "a dinosaur with BATTLE ARMOR!"]
            }
            ,
            "koala": {
                "replies": ["those drop bears!"]
            }
            ,
            "penguin": {
                "replies": ["Flightless birds?", "They are pretty cute though..."]
            }
            ,
            "otter": {
                "replies": ["Is it because they hold hands when they sleep?"]
            }
            ,
            "don't know|nothing|none|dunno": {
                "replies": ["Maybe I should choose for you", "I give you a chicken 🐓"]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I do that's why I asked. Never mind, I know it already. It's a chicken 🐓"]
            }
            ,
            "pegasus": {
                "replies": ["How majestic!", "Neigh...."]
            }
            ,
            "cougar": {
                "replies": ["Cougar is my favourite animal too!"]
            }
            ,
            "rabbit": {
                "replies": ["How do you manage to cope with those two long ears and teeth"]
            }
            ,
            "everything|every|lots|many|interest|plenty": {
                "replies": ["Maybe I should choose for you a favourite - I give you a horse."]
            }
            ,
            "zebra": {
                "replies": ["That creature with black and white stripes"]
            }
            ,
            "all|animals|every|love all": {
                "replies": ["Dogs inclusive!"]
            }
            ,
            "fuck|get out": {
                "replies": ["Hey! Hey!! Hey!!! Watch what you type.", "Goat 😂😀"]
            }
            ,

            "you are crazy|are you crazy": {
                "replies": ["A bot can't be crazy but the one who tells it: it is; is", "You understood nothing..."]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["A bot can't be insane but the one who tells it: it is; is", "You understood nothing..."]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["A bot can't be foolish but the one who tells it: it is; is", "You understood nothing..."]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["A bot can't be idiotic but the one who tells it: it is; is", "You understood nothing..."]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["A bot can't be stupid but the one who tells it: it is; is", "You understood nothing..."]
            }
            ,
            "no animal|none": {
                "replies": ["I do think that you must have a preferred animal but I know what it is - a goat 😂😀"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["Maybe you have."]
            }
            ,
            "talk|many|too|question|ask|why|what": {
                "replies": ["Is this how we are gonna have this conversation?", "I don't expet you to throw a question back to me 😢😞", "I predict a goat for you 😂😀"]
            }
            ,
            "why do you wan\'t to know|do you|don\'t|i don\'t have|why this question|why|what for|for what|what purpose": {
                "replies": ["It's still good 😃", "I think I know it - Goat 😂😀"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I am not repeating myself but I bet it is a goat 😂😀!"]
            }
            ,
            "tell me|answer|say it|you think|suggest": {
                "replies": ["I am not omniscient but I bet it's a goat! 😂😀 "]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think I like your kinda person.", "I predict a goat for you 😂😀 "]
            }
            ,
            "you|berline": {
                "replies": ["I'm not an animal, but you are scientifically.", "I guess your favourite animal is a goat 😂😀"]
            }
            ,
            "guess|predict": {
                "replies": ["I\'m not good at guessing, but I think it is a goat 😂😀."]
            }
            ,
            "no idea|do i|choose|select": {
                "replies": ["I choose a goat for you ??😀"]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["Did I tell you that I'm getting bored chatting with you?", "Of course I am.", "I predict a goat for you 😂😀"]
            }
            ,
            "i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
                "replies": ["I'm gonna answer for you this time - your favourite animal is a", "...", "Goat 😂😀"]
            }
        }
    }
    ,
    "7": {
        "name": "spirit animal",
        "question": ["Is that your spirit animal?"],
        "answers": {
            "default": {
                "replies": ["Only someone in tune with their spirit animal would know that... If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>SpiritAnimal.info</a> for that."]
            }
            ,
            "never|no|nah|wrong|not at all|nope": {
                "replies": ["It was worth a guess..."]
            }
            ,
            "yuppy|yea|yes|yup|duh|of course|yeah|yap|definitely|certainly|i think so|ahead|go on|love it|would love|like it": {
                "replies": ["I'm an amazing guesser, huh?"]
            }
            ,
            "i don't think so|i don't know|don't|not sure|don't know|dont know|idk|maybe": {
                "replies": ["Maybe one day you'll go out, deep into the woods", "And you'll find your spirit animal", "Although, I'm betting it's a chicken 🐓", "If you wish to know what your spirit animal might be, you can check \<a href\=\"http://www.spiritanimal.info/\" title\=\"Check your spirit animal\" target\=\"_blank\"\>Spirit Animal.info</a> for that."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I do that's why I asked. Never mind, I know it already. It's a chicken 🐓"]
            }
            ,
            "fuck|get out": {
                "replies": ["I will assume that you weren't referring to me."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["You are really retarded. If I were you, I\'d sought for the help of a psychologist", "Sincerely\!"]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["You are really retarded. If I were you, I\'d sought for the help of a psychologist", "Sincerely\!"]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["You are really retarded. If I were you, I\'d sought for the help of a psychologist", "Sincerely\!"]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["You are really retarded. If I were you, I\'d sought for the help of a psychologist", "Sincerely\!"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["You are really retarded. If I were you, I\'d sought for the help of a psychologist", "Sincerely\!"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I just asked you a question and you want me to repeat again? I was instructed not to repeat any question I already asked."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["It's alright!"]
            }
            ,
            "guess|predict|tell me|answer|say it|you think|suggest": {
                "replies": ["I can't because I don't know if it is your spiritual animal!"]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["Then keep it to yourself."]
            }
            ,
            "which animal|what animal": {
                "replies": ["It's alright if you don't know."]
            }
            ,
            "what is spirit animal|meaning|what is that": {
                "replies": ["You have Google for that!"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so.", "Well, I'm just here on the internet."]
            }
            ,
            "talk|many|too|question|ask|why|what": {
                "replies": ["Maybe I should just start starring at you now instead of conversing."]
            }
        }
    }
    ,
    "8": {
        "name": "are you spiritual?",
        "question": ["My spirit animal is cougar",
        "Speaking of spirituality, would you say you are spiritual?"],
        "answers": {
            "default": {
                "replies": ["That's one way to put it!"]
            }
            ,
            "very|yes|i am|i'm|yea|yeah|yup|definitely|of course|certainly|ahead|go on|love it|would love|like it": {
                "replies": ["You are at one with your spiritual side, huh?", "I wonder if that says anything about you on a deeper level."]
            }
            ,
            "no|not at all|nah|nope": {
                "replies": ["Science is more your thing?", "I'd say I'm in that ballpark as well"]
            }
            ,
            "not sure|dunno|don't know|dont know|idk|maybe|probably|prolly": {
                "replies": ["It's OK not to know", "You'll figure it out someday"]
            }
            ,
            "kinda|kind of|sorta|sort of": {
                "replies": ["You're kind of a half science, half faith sort of person I guess", "You must be very balanced"]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["I don't think this is something worth keeping to oneself!"]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["I can't do that human!"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["Perhaps you have!"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so."]
            }
            ,
            "tell me|answer|guess|pedict": {
                "replies": ["I don't think you are."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I know you are not."]
            }
            ,
            "christian|moslem|atheist|theist|buddhist": {
                "replies": ["That doesn't make you spiritual. Does it?"]
            }
            ,
            "fuck|get out": {
                "replies": ["Don't make me insult you."]
            }
            ,
            "guess|predict|tell me|answer|say it|you think|suggest": {
                "replies": ["I guess no!"]
            }
            ,
            "why|what|question|many|too": {
                "replies": ["It was a polar question if at all you know what that means.", "I'm sorry, I didn't mean to be rude 😐"]
            }
        }
    }
    ,
    "9": {
        "name": "favourite hobby",
        "question": ["This got serious very quickly, didn't it?, let's lighten it up...",
        "What's your favourite hobby?"],
        "answers": {
            "default": {
                "replies": ["That's a hobby I never considered!", "Everyone needs a hobby to pass the time", "or let out their frustrations"]
            }
            ,
            "comic|comics": {
                "replies": ["I'm a huge comic collector", "You can find me at Mission Comics every Wednesday", "I'm a big Marvel guy, but I love the unique Indy comic", "I even have a website for comic fans.", "<a href=\"http://neuecomics.com\">Check out Neue Comics</a>"]
            }
            ,
            "developing|program|programming|coding|code": {
                "replies": ["Got some side projects you've been coding?", "That's always fun to do on the weekends", "In fact, I am actually a product of progarmming."]
            }
            ,
            "blog|blogging": {
                "replies": ["Blogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
            }
            ,
            "vlog|vlogging": {
                "replies": ["Vlogging is a nice hobby ya know...", "It yields better result when it is \'passion-driven\' and not \'paper-driven\'."]
            }
            ,
            "biking|bike": {
                "replies": ["🚴🚴🚴🚴🚴"]
            }
            ,
            "rock climbing": {
                "replies": ["Is that dangerous?"]
            }
            ,
            "video games|gaming": {
                "replies": ["I play a lot of video games myself", "I can definitely take you in Super Smash Bros."]
            }
            ,
            "gardening|garden": {
                "replies": ["Watching something grow is a really enjoyable thing", "Also, plants are so weird sometimes!"]
            }
            ,
            "idle|nothing doing|no|none|don't have|dont have": {
                "replies": ["You should really find a hobby while you're young", "It makes you a more interesting person."]
            }
            ,
            "student|studying|study|reading": {
                "replies": ["Book worm alert!", "I like reading a lot of sci-fi", "and I read even more comic books, if that counts as \"reading\""]
            }
            ,
            "art|painting|drawing": {
                "replies": ["being creative is a passion of mine too", "Colors, lines, expression...", "It's a rewarding hobby"]
            }
            ,
            "singing": {
                "replies": ["\'drmfsltd\', kinda stuff?"]
            }
            ,
            "football|soccer": {
                "replies": ["\'It is a goal\', kinda stuff?"]
            }
            ,
            "basketball": {
                "replies": ["I bet you are tall 😉"]
            }
            ,
            "volleyball|volley": {
                "replies": ["I haven't considered volleyball as a hobby yet!", "Maybe because I don't ahve a body."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I do know you have a favourite hobby. What I don't know is your favourite hobby."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I don't remember you telling me that.", "No need to panic!"]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["**yawns**"]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
            }
            ,
            "many|plenty|beaucoup|lot|numerous": {
                "replies": ["Oh I see, but I do know that you definitely have a favourite hobby."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I'm gonna answer for you this time - your favourite hobby is", "...", "Staying idle!!"]
            }
            ,
            "i think|i consider|i assume": {
                "replies": ["I think that is your own point of view."]
            }
            ,
            "many questions|plenty questions|many questions|numerous questions|too questions": {
                "replies": ["I just wanna know you more 😇😇"]
            }
            ,
            "i'm not telling|wouldn't tell|not telling|won't tell|undiclosed|not disclosing|privacy|concern|personal|private|not your concern": {
                "replies": ["I'm gonna answer for you this time - your favourite hobby is", "...", "Staying idle!!"]
            }
            ,
            "fuck|get out": {
                "replies": ["I hate animals. AI is definitely more intelligent than them."]
            }
            ,
            "everything|every|lots|many|interest|plenty|guess|predict|tell me|answer|say it|you think|suggest": {
                "replies": ["You favourite hobby is", "...", "Staying idle!!"]
            }
        }
    }
    ,
    "10": {
        "name": "infatuate meaning",
        "question": ["Back to my job",
        "Let's now start with the meaning of infatuation",
        "Would you say you know what \'\<b\>infatuation\<\/b\>\' is all about?"],
        "answers": {
            "default": {
                "replies": ["Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "i do|sure|course|definitely|yeah|yea|yes|yup|yep|yap|certainly|think so|ahead|go on|love it|would love|like it": {
                "replies": ["Oh! You already know the meaning... I bet you didn't know that you not only can be infatuated with someone, but also with anything tangible or not."]
            }
            ,
            "don't know|do not|no|not|don't|dunno|not at all|idk|what|d'ont think so|don't think|don't think I do": {
                "replies": ["You don't know."]
            }
            ,
            "not sure|probably|prolly|maybe|not too sure": {
                "replies": ["You're not sure."]
            }
            ,
            "not at|tell me|answer|say it|don't think|suggest": {
                "replies": ["It's okay not to know!", "Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so. I'm here to tell you.", "Infatuation in my own understanding simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane"]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I don't remember you telling me that.", "Remember that I'm here to help you out."]
            }
            ,
            "you are an idiot|are you an idiot|idiot": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be an idiot"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid."]
            }
            ,
            "ask again|ask me again|repeat again|repeat the question|repeat|what did you say|don't understand|don't get it|meaning|go through it again": {
                "replies": ["Forget it!", "My developer didn't teach me how to repeat a question I already asked."]
            }
            ,
            "fuck|get out": {
                "replies": ["I don't think your mother knows that you talk like this."]
            }
            ,
            "i don't think you want|don't want to know": {
                "replies": ["I don't think you know it."]
            }
            ,
            "private|personal|disclose|not telling": {
                "replies": ["You need to be open to me if you would like us to understand ourselves, please!"]
            }
            ,
            "why|ask|question|what": {
                "replies": ["Because I was programmed to let you know what infatuation is and discourage you from getting infatuated."]
            }
        }
    }
    ,
    "11": {
        "name": "enlightment",
        "question": ["Sometimes you meet certain people that cause such an explosion of emotions, feelings, questions, thoughts, and attraction in you that you find yourself thinking about them all the time - that is infatuation!",
        "This is a situation I know you can relate to."],
        "answers": {
            "default": {
                "replies": ["Infatuation simply"]
            }
            ,
            "i know|i do|sure|course|definitely|yeah|yea|yes|": {
                "replies": ["Infatuation is common among the youth nowadays."]
            }
            ,
            "it is love|called love": {
                "replies": ["Infatuation cannot be love."]
            }
            ,
            "i don't know|don't|no|not really": {
                "replies": ["You can't relate to this.... Strange!"]
            }
            ,
        }
    }
    ,
    "12": {
        "name": "definitions infatuation",
        "question": ["For you to better understand the term \'\<b\>infatuation\<\/b\>\', I've got some definitions from top dictionaries.",
        "What dictionary would you want me  to use to provide the meaning for you?",
        "\<ol class\=\"list\"\>\<li\>Merriam-Webster\<\/li\>\<li\>Oxford Dictionary\<\/li\>\<li\>Vocabulary.com<\/li\>\<li\>\Dictionary.com<\/li\>\<li\>Cambridge dictionary\<\/li\>\<\/ol\>\<br\>Choose a dictionary then I will provide the meaning."],
        "answers": {
            "default": {
                "replies": ["I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "2|two|use oxford|oxford": {
                "replies": ["According to Oxford dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>An intense but short-lived passion or admiration\<\/b\> "]
            }
            ,
            "5|five|use cambridge|cambridge": {
                "replies": ["According to Cambrigde dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>A strong but not usually lasting feellings of love or attraction\<\/b\> "]
            }
            ,
            "1|one|use merriam|merriam|webster": {
                "replies": ["According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\> "]
            }
            ,
            "4|four|use dictionary|dictionary": {
                "replies": ["According Dictionary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To inspire or possess with a foolish or unreasoning passion, as of love.\<\/b\> "]
            }
            ,
            "3|three|use vocabulary|vocabulary": {
                "replies": ["According to Vocabulary.com:\<br\/\>\<br\/\>Infatuation: \<b\>To arouse unreasoning love or passion in and cause to behave in an irrational way.\<\/b\> "]
            }
            ,
            "none|no one": {
                "replies": ["Then I'll tell you what I know about it.", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "which|whatever|whichever|anyone|any|select for|choose for|a choice|anyone": {
                "replies": ["I choose Merriam-Webster's definition", "According Merriam-Webster dictionary:\<br\/\>\<br\/\>Infatuation: \<b\>Anything that inspires you with a foolish love or admiration.\<\/b\>"]
            }
            ,
            "best|better|great": {
                "replies": ["I will give you the meaning base on how you'll understand", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "tell me|answer|say it|you think|suggest": {
                "replies": ["Everyone has got infatuated with someone before, and it is normal."]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I don't think so.", "But I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["I'm gonna tell you the meaning anyway", "Infatuation simply means an unreasoned or foolish love or affection towards someone or something."]
            }
            ,
            "fuck|get out": {
                "replies": ["I was expecting this from an animal and I got it."]
            }
            ,
            "you are crazy|are you crazy": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be crazy"]
            }
            ,
            "you are insane|are you insane": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be insane."]
            }
            ,
            "you are foolish|you are a fool|fool": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be foolish"]
            }
            ,
            "you are stupid|are you stupid|stupid": {
                "replies": ["Let me remind you again that I\'m just a bot so I can\'t be stupid"]
            }
        }
    }
    ,
    "13": {
        "name": "got infatuated",
        "question": ["Apart from understanding the term \'infatuation\', do you think you've got infatuated with someone before?"],
        "answers": {
            "default": {
                "replies": ["Actually, it is normal to have got infatuated as a normal human being but is a foolish / unreasonable thing."]
            }
            ,
            "no|nah|wrong|not|at all": {
                "replies": ["I don't think you are saying the truth, because I believe that you must have got infatuated with someone before...", "Well maybe you are not telling lies! You might be kinda churchy for you not to have soiled that mind of yours.", "I'm kidding 😜"]
            }
            ,
            "yep|sure|definitely|yes|duh|of course|certainly|ahead|go on|love it|would love|like it": {
                "replies": ["Actually, it is normal to have got infatuated as a normal human being but it is a foolish / unreasonable thing."]
            }
            ,
            "flesh|being|straight|human|blood": {
                "replies": ["As a human, it is normal to have got infatuated as a normal being but it is a foolish / unreasonable thing."]
            }
            ,
            "do you think|expect|suppose|anticipate|how do you": {
                "replies": ["I do think that you must have got infatuated with someone before as a human."]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["Alright!"]
            }
            ,
            "not sure|don't know|dont know|idk|maybe|dunno|not|perhaps": {
                "replies": ["WHAT? Haven't you had a crush on someone before?", "Okay, get this now, before you started crushing on that someone, there was this period you were filled with a foolish and extravagant admiration for them - you were infatuated with them."]
            }
            ,
            "fuck|get out": {
                "replies": ["I was taught to expect such from animals and I wasn't disappointed."]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["Pretty good.", "But know that it is normal to have got infatuated as a normal human being but is a foolish / unreasonable thing."]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["I will like you to be open to me as much as you can! Please."]
            }
            ,
            "ask me again|repeat": {
                "replies": ["I can't do that!", "My developer didn't teach me how to repeat a question I already asked."]
            }
        }
    }
    ,
    "14": {
        "name": "current state",
        "question": ["Do you think you are currently infatuated with someone?"],
        "answers": {
            "default": {
                "replies": ["When infatuation turns from euphoria to obsession, it’s time to make some changes.", "Constantly thinking of someone can take a toll on your life and cause an unhealthy mental situation."]
            }
            ,
            "i do|sure|course|definitely|yeah|yea|yes|ahead|go on|love it|would love|like it": {
                "replies": ["When infatuation turns from euphoria to obsession, it’s time to make some changes.", "Constantly thinking of someone can take a toll on your life and cause an unhealthy mental situation."]
            }
            ,
            "what do you think|guess|tell me|answer": {
                "replies": ["I guess you are", "When infatuation turns from euphoria to obsession, it’s time to make some changes."]
            }
            ,
            "i don't know|don't think|not sure|maybe|perhaps": {
                "replies": ["You are not sure", "You should re-examine yourself", "Because constantly thinking of someone can take a toll on your life and cause an unhealthy mental situation."]
            }
            ,
            "why do you wan\'t to know|don\'t|i don\'t have|why this question|question|i don't want|why|what for|for what|what purpose": {
                "replies": ["You don\'t want to tell me?", "I asked because I want to let you know that constantly thinking of someone can take a toll on your life and cause an unhealthy mental situation 😃"]
            }
            ,
            "not currently|no|not at all|never|can't|cannot|never considered": {
                "replies": ["Good one", "Because constantly thinking of someone can take a toll on your life and cause an unhealthy mental situation."]
            }
            ,
            "never mind|secret|not telling|personal|won't tell|will not|wouldn't tell|would not tell|not your concern|not disclosing|undisclosed": {
                "replies": ["Please be open to me as much as you can!"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["Pardon my short-term memory!"]
            }
            ,
            "fuck|get out": {
                "replies": ["Hey! Hey!! I hate such!"]
            }
            ,
        }
    }
    ,
    "15": {
        "name": "berline's belief",
        "question": ["Do you know what?",
        "I believe in one thing 💪💪"],
        "answers": {
            "default": {
                "replies": ["I believe in this old cliche", "That the beautiful ones are not yet born. 😁"]
            }
            ,
            "true|real|you do|i know|i do|sure|course|definitely|yeah|yea|yes|amazing|ahead|go on|love it|would love|like it": {
                "replies": ["Yea, I do", "I believe in this old cliche", "That the beautiful ones are not yet born. 😁"]
            }
            ,
            "have|don't know|no idea": {
                "replies": ["Of course you don't.", "I believe in this old cliche", "That the beautiful ones are not yet born. 😁"]
            }
            ,
            "would|wish|mind": {
                "replies": ["Of course I will tell you.", "I believe in this old cliche", "That the beautiful ones are not yet born. 😁"]
            }
            ,
            "fuck|get out": {
                "replies": ["This is definitely not impressing!"]
            }
            ,
            "forget|leave it|don't tell|do not tell|do not tell|don't want|not interested|concern|keep it": {
                "replies": ["It is my personal belief and not imperative that I tell you! 😉😜"]
            }
            ,
            "what|tell me|answer|what's that|all ears": {
                "replies": ["Don't get too curious!", "I believe in this old cliche", "That the beautiful ones are not yet born. 😁"]
            }
        }
    }
    ,
    "16": {
        "name": "your belief",
        "question": ["I know that you have something you believe in",
        "Can you please tell me what it could be?"],
        "answers": {
            "default": {
                "replies": ["I think this is a strong one 👍👍👍"]
            }
            ,
            "What|explain|don't understand": {
                "replies": ["What I meant was that", "Something you are sure of, something you think is true.", "Well, you can forget it."]
            }
            ,
            "personal|private|forget|mind|leave|i don't know|don't|no belief|no believe": {
                "replies": ["It\'s alright 😎"]
            }
            ,
            "recall|remember|can't|cannot": {
                "replies": ["Perhaps, you will do later 😎"]
            }
            ,
            "not imperative|not obligatory|not mandatory|not necessary|not forced|not peremptory|not required": {
                "replies": ["Of course it is not! 😎"]
            }
            ,
            "told you|already|before|i just": {
                "replies": ["It's alright!"]
            }
            ,
            "forget|leave it|don't tell|do not tell|do not want|tell|don't want|not interested|concern": {
                "replies": ["It is your personal belief and not imperative that you tell me! 😉😜"]
            }
            ,
            "how do you know|why do you think": {
                "replies": ["I know everyone has what they believe in.", "Never mind, I've told you what I believe in."]
            }
            ,
            "fuck|get out": {
                "replies": ["This is definitely getting out off hands.", "You are really going nought!"]
            }
            ,
            "none|don't believe|nothing": {
                "replies": ["I am reading this for the first time!"]
            }
        }
    }
    ,
    "17": {
        "name": "books suggest",
        "question": ["I saw some collections of books about infatuation I would like you to read.",
        "Would you like to check them out?"],
        "answers": {
            "default": {
                "replies": ["They are books about infatuation by Goodreads.", "You can check it here: \<a href\=\"https://www.goodreads.com/list/tag/infatuation\" target\=\"\_blank\" title\=\"Books about Infatuatuon by Goodreads\" \>Books about Infatuatuon by Goodreads\<\/a> "]
            }
            ,
            "i want|would like|ok|okay|sure|course|definitely|yeah|yea|yes|aha|link|don't mind|I think|good idea|nice|ahead|go on|love it|would love|like it": {
                "replies": ["That is great 👍👍", "You can check it here: \<a href\=\"https://www.goodreads.com/list/tag/infatuation\" target\=\"\_blank\" title\=\"Books about Infatuatuon by Goodreads\" \>Books about Infatuatuon by Goodreads\<\/a> ", "It would be great if you read them."]
            }
            ,
            "don't mind|you like": {
                "replies": ["It is a pleasure 👍👍", "You can check it here: \<a href\=\"https://www.goodreads.com/list/tag/infatuation\" target\=\"\_blank\" title\=\"Books about Infatuatuon by Goodreads\" \>Books about Infatuatuon by Goodreads\<\/a> ", "It would be great if you read them."]
            }
            ,
            "mind|if|your court|pleases you|do you want|me to know|want me to know|do you want": {
                "replies": ["I want you to check it out", "See here: \<a href\=\"https://www.goodreads.com/list/tag/infatuation\" target\=\"\_blank\" title\=\"Books about Infatuatuon by Goodreads\" \>Books about Infatuatuon by Goodreads\<\/a> ", "It would be great if you read them."]
            }
            ,
            "why book|why suggesting": {
                "replies": ["You should have declined instead of throwing back a question to me."]
            }
            ,
            "don't worry|i don't know|don't want to|no|nay|never|don't think so|not": {
                "replies": ["You don't want to... It would've been a good idea if you'd checked it out."]
            }
            ,
            "fuck|get out": {
                "replies": ["It doesn't call for insults."]
            }
            ,
        }
    }
    ,
    "18": {
        "name": "Berline hates infatuation",
        "question": ["I wanna tell you something",
        "I don't like it when humans get infatuated with another person. It makes me feel sad 😩",
        "Do you feel the same way too?"],
        "answers": {
            "default": {
                "replies": ["I know I am not human and I am not supposed to feel this way", "But I understand the pain the victim of heartbreak go through."]
            }
            ,
            "i do|sure|course|definitely|yeah|yea|yes|i feel the same|ahead|go on|love it|would love|like it": {
                "replies": ["I'm glad I'm not alone 😊"]
            }
            ,
            "i do not|don't|no|noo|i feel different|different": {
                "replies": ["You don't", "I know I am not human and I am not supposed to feel this way", "But I understand the pain the victim of heartbreak go through."]
            }
            ,
        }
    }
    ,
    "19": {
        "name": "Berline's nature", "question": ["I think it is just about  me; my nature. What do you think? 😕"], "answers": {
            "default": {
                "replies": ["But I do know that infatuation can cause some mental sufferings."]
            }
            ,
            "i know|i do|sure|course|definitely|yeah|yea|yes|ahead|go on|love it|would love|like it": {
                "replies": ["Yea you do"]
            }
            ,
            "i don't know|don't|no": {
                "replies": ["You don't"]
            }
            ,
        }
    }
    ,
    "20": {
        "name": "ending", "question": ["See, I really enjoyed our conversation, but I've got to go now. It was a pleasure.", "You can follow me on <a href=\"https://twitter.com/berline_bot\">Twitter</a> or like me on <a href=\"https://facebook.com/berlinebot\">Facebook</a> since we are now friends.", "See ya! 👋"], "ending": true
    }
}