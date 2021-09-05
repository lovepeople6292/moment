const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author: "파울로 코엘료",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  {
    quote:
      "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다",
    author: "스티브 잡스",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote: "승리는 가장 끈기 있는 사람에게 돌아간다",
    author: "보나파르트 나폴레옹",
  },
  {
    quote:
      "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다",
    author: "토마스 에디슨",
  },
  {
    quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
    author: "월트 디즈니",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
