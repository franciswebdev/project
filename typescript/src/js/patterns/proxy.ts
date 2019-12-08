// 'use strict';

// class Subject {
//     constructor() {
//     }

//     Request (){
//     }
// }

// class RealSubject extends Subject {
//     constructor() {
//         super()
//         facade.log('RealSubject created')
//     }

//     Request (){
//         facade.log('RealSubject handles request')
//     }
// }

// class Proxy extends Subject {
//     constructor() {
//         super()
//         facade.log('Proxy created')
//     }

//     Request (){
//         this.realSubject = new RealSubject();
//         this.realSubject.Request();
//     }
// }

// function init_Proxy() {
//     var proxy = new Proxy()
//     proxy.Request()
// }

abstract class Article { 
    public title: any;
    public videos: any;
    public terms!: Array<any>;
}

class ArticleJSON extends Article {

    constructor(data: object) {
        super();
        Object.assign(this, data);
    }
}

let response = { 
    aa: '',
    title: 'my title',
    videos: [ 'video 1' ],
    terms: [
        { type: 'type a', value: 'value a' },
        { type: 'type b' }
    ]
}

// let myArticle = new ArticleJSON(response);
// console.log(myArticle);
// console.log(myArticle.videos);
// console.log(myArticle.terms);

// ----------------------------- helper 

class ArticleDeco extends Article {

    public _article: object;
    private _videos: any;
    private _terms: Array<any> = [];

    constructor(data: object) {
        super();
        this._article = data;
        Object.assign(this, data); // populate our object ... blindly
    }

    set videos(videos) {
        this._videos = videos;
    }

    get videos(): string {
        return 'first: ' + this._videos[0];
    }

    set terms(terms: Array<any>) {
        this._terms = terms.filter(term => !!term.value).map(term => term.value);
    }

    get terms(): Array<any> {
        return this._terms;
    }
}

let myDeco = new ArticleDeco(response);
console.log(myDeco);
console.log(myDeco._article);
console.log(myDeco.aa);
console.log(myDeco.videos);
console.log(myDeco.terms);