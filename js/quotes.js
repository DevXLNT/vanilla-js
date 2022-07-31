const quotes = [
    {quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다.",
    author: "생텍쥐페리"
    },
    {quote:"승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
    author:"매튜슨"
    },
    {quote:"빛을 퍼뜨릴 수 있는 두 가지 방법이 있다. 촛불이 되거나 또는 그것을 비추는 거울이 되는 것이다.",
    author:"이디스 워튼"
    },
    {quote:"두려움 때문에 갖는 존경심만큼 비열한 것은 없다.",
    author:"카뮈"
    },
    {quote:"당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.",
    author:"러셀"
    },
    {quote:"스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.",
    author:"에릭 프롬"
    },
    {quote:"Don’t let the noise of others’ opinions drown out your own inner voice.",
    author:"Steve Jobs"
    },
    {quote:"Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
    author:"Steve Jobs"
    },
    {quote:"Creativity is just connecting things.",
    author:"Steve Jobs"
    },
    {quote:"Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
    author:"Steve Jobs"
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;