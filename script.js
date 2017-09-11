class Article {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

const art = new Article(95, 'Filtry w CSS3');

console.log(art.id, art.title);
