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

//  static method use on the class
console.log(Article.compareId(art, art1));

class BlogArticle extends Article {
    constructor(id, tittle, category) {
        super(id, tittle);
        this.category = category;
    }
}

const blog1 = new BlogArticle(23, 'Tworzenie aplikacji z Angular', 'Frameworks');

console.log(blog1);
console.log(blog1.getId());
