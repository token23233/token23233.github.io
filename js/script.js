const works = [
  {
    title: "Code Jump 入門編",
    description: "Code Jump 入門編の模写サイト",
    image: "images/mainvisual.jpg",
    site: "https://token23233.github.io/token23233-cj01.github.io/",
    github: "https://github.com/token23233/token23233-cj01.github.io"
  },
  {
    title: "Code Jump 初級編",
    description: "Code Jump 初級編の模写サイト",
    image: "images/mainvisual-pc.jpg",
    site: "https://token23233.github.io/cj02.github.io/",
    github: "https://github.com/token23233/cj02.github.io"
  }
];

const workList = document.querySelector(".work-list");

works.forEach(work => {

  const article = document.createElement("article");

  article.innerHTML = `
    <img src="${work.image}" alt="${work.title}">
    <h3>${work.title}</h3>
    <p>${work.description}</p>

    <p>
      <a href="${work.site}" target="_blank" rel="noopener noreferrer">
        サイトを見る
      </a>
    </p>

    <p>
      <a href="${work.github}" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </p>
  `;

  workList.appendChild(article);

});