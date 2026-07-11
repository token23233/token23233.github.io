const works = [
  {
    title: "制作物1",
    description: "制作物の説明",
    image: "images/work1_dummy.png",
    site: "#",
    github: "#"
  },
  {
    title: "制作物2",
    description: "制作物の説明",
    image: "images/work2_dummy.png",
    site: "#",
    github: "#"
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