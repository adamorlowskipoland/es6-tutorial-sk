class Article {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
//    only one constructor in the class
}

const art = new Article(95, 'Filtry w CSS3');

console.log(art.id, art.title);

