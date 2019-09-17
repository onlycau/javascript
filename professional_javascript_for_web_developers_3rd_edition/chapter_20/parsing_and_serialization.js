let book = {
  title: "Professional JavaScript",
  authors: ["Nicholas C.Zakes"],
  edition: 3,
  year: 2011,
  releaseDate:new Date(2019,8,16)
}
let json_text = JSON.stringify(book)
let book_copy = JSON.parse(json_text)
console.log(json_text)

// 过滤(replacer) 缩进

let json_title = JSON.stringify(book,['title'])
console.log(json_title)

let json_text_filtered = JSON.stringify(book, function(key,value){
  switch(key){
    case "authors":
      return value.join(",")

    case "year":
      return 5000

    case "edition":
      return undefined

    default:
      return value
  }
}, '----')
console.log(json_text_filtered)

// toJSON()方法

book.toJSON = function(){return this.title}
console.log(JSON.stringify(book))
delete book.toJSON
//   toJSON()可以作为函数过滤器的补充，因此理解序列化的内部顺序十分重要。假设把一个对象传入 JSON.stringify()，
// 序列化该对象的顺序如下。
// (1) 如果存在 toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，返回对象本身。
// (2) 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的值。
// (3) 对第(2)步返回的每个值进行相应的序列化.
// (4) 如果提供了第三个参数，执行相应的格式化.

// 解析选项 还原函数(reviver)

book_copy = JSON.parse(json_text,function(key,value){
  if (key === "releaseDate"){
    return new Date(value)
  } else {
    return value
  }
})
console.log(book_copy)

// about Date
console.log(new Date('2019-04-01'))
console.log(new Date(2019,4,1))