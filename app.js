//Collection of quotes

const quotes=[
    {
        quote: `There is no country in the world with 
        the diversity, confidence and talent and black pride like Nigeria.`,
        author: `- Binyavanga Wainaina`
    },
    {
        quote: `The trouble with Nigeria is simply and squarely a failure of 
        leadership. There is nothing basically wrong with the Nigerian land or 
        climate or water or air or anything else. The Nigerian problem is the 
        unwillingness or inability of its leaders to rise to the responsibility, to the 
        challenge of personal example which are the hallmarks of true leadership.`,
        author: `- Chinua Achebe`
    },
    {
        quote: `Nigeria is what it is because its leaders are not what they should be.`,
        author: `- Chinua Achebe`
    },
    {
        quote: `Change Won’t Happen Immediately, as Nigeria’s Problems Didn’t Start Overnight`,
        author: `- Mo Abudu`
    },
    {
        quote: `Sometimes a people lose their right to remain silent when pressured to remain silent.`,
        author: `- Anonymous`
    },
    {
        quote: `Foreign investors should ignore Boko Haram and invest in Nigeria`,
        author: `- Goodluck Jonathan`
    },
    {
        quote: `Even Jesus Christ cannot conduct a free and fair election in Nigeria`,
        author: `- Chief Olusegun Obasanjo`
    },
    {
        quote: `There is plenty of room at the bottom because very few 
        people care to travel beyond the average route. 
        And so most of us seem satisfied to remain within the confines of mediocrity.`,
        author: `- Nnamdi Azikwe`
    },
    {
        quote: `There can be no faith in government if our highest offices are 
        excused from scrutiny — they should be setting the example of transparency.`,
        author: `- Edward Snowden`
    },
    {
        quote: `We want to lead a country where people will be less greedy. Where 
        people will know that the commonwealth of Nigeria belongs to all Nigerians, 
        where people's wealth depends on the people around you.
         If you become a rich person and everyone around you is poor you are very poor.`,
        author: `- Goodluck Jonathan`
    },
    {
        quote: `The end goal is to #ENDSARS and until we achieve that, we won't stop speaking.`,
        author: `- Rinu`
    },
    {
        quote: `Dear Nigerian youths, you have the government, where you want them to be. You are doing amazing.
         You are doing something that you haven’t done before`,
        author: `- Aisha Yesufu`
    },
    {
        quote: `To move Nigeria forward, we must define our interest in the Nigeria project`,
        author: `- Okey Ndibe`
    },
    {
        quote: `Nigeria is so peculiar and dramatic. Even talking about the 
        potentials before we talk about the negativities, Nigeria is a nation for 
        perpetual study. I think in Nigeria, it is the potential which hits people 
        and makes them believe in Nigeria. It tends to make them react when they 
        see potentials being wasted and it is a tragedy to see potentials wasted. 
        But paradoxically, it is a realization of the existence, 
        that positive, that keeps many Nigerians and even foreign people going.`,
        author: `- Wole Soyinka`
    },
    {
        quote: `In Nigeria, there is energy, whether it is Lagos,
         which is sheer anarchy, but it is not lethargic. It is strong, 
         even aggressive and if that energy 
        could be directed to work it will produce really enormous results.`,
        author: `- Chinua Achebe`
    },
    {
        quote: `The Nigerian God loves elections and politics. When you have bribed
         people to get party nominations, used thugs to steal and stuff ballot boxes, 
         intimated people into either sitting at home or voting for you, eventually, 
         (through God’s grace), win the elections, you must begin by declaring that 
         your success is the will of the almighty and 
        living God and that the other candidate should accept this as the will of God`,
        author: `- Elnathan John`
    },
    {
        quote: `I am a woman and a woman of Africa. I am a daughter of Nigeria and if she is in shame, 
        I shall stay and mourn with her in shame.`,
        author: `- Buchi Emecheta`
    },
    {
        quote: `Let's say there are prospects for a new Nigeria, 
        but I don't think we have a new Nigeria yet.`,
        author: `- Wole Soyinka`
    },
    {
        quote: `It is the duty of youths to war against indiscipline 
        and corruption because they are the leaders of tomorrow.`,
        author: `- Ifeanyi Enoch Onuoha`
    },
    {
        quote:`Dear Nigerian youths,You are that Powerful. Never forget that.`,
        author:`- Timi Dakolo`
    },
    {
        quote:`Never again will anyone refer to nigerian youths as lazy. 
        Never again will anyone refer to nigerian youths as unserious. 
        The events of the last week up till today has shown true power lies 
        with the people. 
        Actually, Power lies with young people. And so it shall be forevermore.`,
        author:`- Dr Olufunmilayo`
    }
]

const btn=document.getElementById("bttn");
const quote=document.querySelector(".quote");
const author=document.querySelector(".author");


btn.addEventListener("click", () => {
    let random=Math.floor(Math.random()* quotes.length);
    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;
})