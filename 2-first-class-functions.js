// nomeDaFuncao :: PrimeiroArg -> SegundoArg -> RetornoDaFuncao

// Does a AJAX Call receving a callback. When the ajax finishes, it calls the callback
// ajaxCall :: Function -> Void

// renderPost :: Json -> X
ajaxCall(() => lkajsdf)

const hi = name => `Hi ${name}`;
const greeting = name => hi(name);



const getServerStuff = callback => ajaxCall(json => callback(json))
const getServerStuff = callback => ajaxCall(callback)
const getServerStuff = ajaxCall

const BlogController = {
    index: (posts) => { return Views.index(posts); },
    show: (post) => { return Views.show(post); },
    create: (attrs) => { return Db.create(attrs); },
    update: (post, attrs) => { return Db.update(post, attrs); },
    destroy: (post) => { return Db.destroy(post); },
};

const BlogController = {
    index: Views.index,
    show: Views.show,
    create: Db.create,
    update: Db.update,
    destroy: Db.destroy,
};

// validArticles :: Array -> Array
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined)

const validArray = arr =>
  arr.filter(item => item !== null && item !== undefined)

const articles = [{ id: 1 }, { id: 2 }, null, { id: 3 }, undefined, { id: 4 }]
const numbers = [1, 2, null, 3, undefined, 4]

validArticles(articles)// [1,2,3,4]

// Aridade
// 

//