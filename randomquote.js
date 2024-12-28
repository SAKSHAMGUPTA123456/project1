const memes = [
    "When you realize you’ve been coding for 4 hours, but the website still looks like a mess.",
    "Me checking the code for the hundredth time... still doesn’t work.",
    "When you’re debugging but everything seems to be fine... except your life.",
    "Trying to solve a bug in my code like... and still getting nothing.",
    "When you finally fix that one error after hours of frustration.",
    "Me reading my own code after 3 days of not touching it.",
    "Me after finally making a website work and thinking it’ll crash any second.",
    "When the code runs perfectly the first time, and you wonder if you’re dreaming.",
    "When you finally solve the issue, but realize you’ve been using the wrong library.",
    "Debugging is my cardio."
  ]
  let number=0;
  let er=document.getElementById('btn1');
  const typing=(number)=>{
  console.log(number)
    er.innerText=`${memes[number]}`
  }
let type=document.getElementById('btn')
type.addEventListener('click',()=>{
     number=Math.random()*9;
    typing(parseInt(number));
})

