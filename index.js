var Quotes =[
    'Be yourself; everyone else is already taken.',
    'So many books, so little time.',
    'A room without books is like a body without a soul.',
    'Be the change that you wish to see in the world.',
    'You only live once, but if you do it right, once is enough.',
    'Without music, life would be a mistake.',
    'We accept the love we think we deserve.'
]
function quote(){
    var randomNumber = Math.floor(Math.random()*(Quotes.length));
    document.getElementById("result").innerHTML=Quotes[randomNumber]
}