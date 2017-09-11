class Article {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    getId() {
        return this.id;
    }
//    static method
    static compareId(a, b) {
        const id1 = a.id;
        const id2 = b.id;
        if (id1 > id2) {
            return true;
        } else {
            return false;
        }
    }
}

const art = new Article(95, 'Filtry w CSS3');

console.log(art.id, art.title);
console.log(art.getId());

const art1 = new Article(59, 'Wprowadzenie do HTML5');

console.log(Article.compareId(art, art1));
