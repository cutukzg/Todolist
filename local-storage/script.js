"use strict"

const myString = "lorem ipsum dolor"

localStorage.setItem("mojString", myString)

console.log(localStorage.getItem("mojString"))
console.log(localStorage.getItem("mojString2"))


// zad ako postoji localstorage item "myTodList" ispiši u konzoli, inače ga postavi na "moja to do lista"
const myTodList = [{
    id:1,
    title: "operi auto"
},{
    id:2,
    title: "iznesi smeće"
}]

if (localStorage.getItem("myTodList")!==null) {
    const todoString = localStorage.getItem("myTodList")   
    console.log(todoString)
    console.log(JSON.parse(todoString))
    console.log("dohvaćam")
} else {
    localStorage.setItem("myTodList", JSON.stringify(myTodList))
    console.log("postavljam")
}

//primjena localstorage(LS) u todo app
// - na window.onload, provjeri postoji li mytodolist item u LS, ako postoji - napuni mi globalnu 
//varijablu todolist, koja će sadržavati parsani sadržaj LS itema. Provjera važi samo za "Postoji li"
//nakon toga je isforeachat i ispisati u DOM
//Save-anje novog itema - provjeriti postoji li u LS-u.ako ne postoji kreiraj novi LS item mytodolist
//ako nije prvi item dodati ga u globalnu varijablu todolist i nakon toga update LSS
//
//