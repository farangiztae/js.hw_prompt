let object = {
      name:{},
      surname:{},
      age:{}
};

let first = prompt("Ismingiz nma?");
let second = prompt("Familiyangiz nma?");
let third = prompt("Yoshingiz nechida?");

object.name[first] = first;
object.surname[second] = second;
object.age[third] = third;

console.log(object);