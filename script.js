let object = {
      name:{},
      surname:{},
      age:{},
      colour:{}
};

let first = prompt("Ismingiz nma?");
let second = prompt("Familiyangiz nma?");
let third = prompt("Yoshingiz nechida?");
let fourth = prompt("Yaxshi kurgan rangingiz?")

object.name[first] = first;
object.surname[second] = second;
object.age[third] = third;
object.colour[fourth] = fourth;

console.log(object);
