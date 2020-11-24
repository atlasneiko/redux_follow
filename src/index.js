// console.log("Hello!")
import { compose, pipe } from "lodash/fp"
import { Map } from 'immutable';
import { produce } from 'immer';
import store from './store';
import {bugAdded, bugRemoved, bugResolved} from './actions'
store.subscribe(() => {
    console.log("Store changed!", store.getState());
})

store.dispatch(bugAdded("Bug1"))
// unsubscribe();
store.dispatch(bugResolved(1))
store.dispatch(bugRemoved(1))

console.log(store);
console.log(store.getState());

// let book = Map({ title: "Harry Potter" });
// console.log(book.get("title"));
// console.log(book.toJS());
// let book = { title: "H P" }
// function publish(book) {
//     return produce(book, draftBook => {
//         draftBook.isPublished = true;
//     });
// }
// console.log(publish(book));

// console.log(book);






// function sayHi() {    
//     return function () {
//         return "Hello World!"; ''
//     }
// }




// let fn = sayHi();

// console.log(fn() === sayHi());


// let input = "   JS   ";
// let output = "<div>" + input.trim() + "</div>"
// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`
// const toLow = str => str.toLowerCase();

// // const res = wrapInDiv(trim(input))
// const transform = pipe(trim, toLow, wrap("div"))
// console.log(transform(input));
