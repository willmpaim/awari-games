const posts = [

    {
        text: "Diablo IV",
        content: "Diablo 4 é o mais novo RPG de ação que chega agora em abril",
    },

    {
        text: "Monster Hunter: Rise",
        content: "Jogo de Ação e aventura chega a nova geração de consoles",
    },

    {
        text: "Hogwarts Legacy",
        content: "Um dos jogos mais aguardados do ano bate recorde de vendas",
    },

];


const wrapper = document.getElementById('main');

    posts.forEach(creatArticle);


function creatArticle(post) {

    const article = document.createElement('article');
    article.classList.add("container");

    const title = document.createElement('h2');
    const titleText = document.createTextNode(post.text);
    title.appendChild(titleText);

    const text = document.createElement('p');
    const textContent = document.createTextNode(post.content);
    text.appendChild(textContent);

    wrapper.appendChild(article);
    article.appendChild(title);
    title.appendChild(text);

}