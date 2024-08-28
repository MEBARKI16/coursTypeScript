// primitives types
var age: number;
age = 25;

var nom: string | number = "amine"
nom = 2
    ;
var grand: boolean = true;

console.log(`je m'appel ${nom} et jai ${age}ans et je suis ${grand ? "grand" : "petit"}`);

// advanced types
type person = {
    name: string,
    prenom: string
}
var tab: string[];

tab = ["a", "b", "c"];
console.log(tab)




var x: person;

x = { name: "44", prenom: "ff" };
console.log("mon nom est :" + x.name + " et mon prenom est :" + x.prenom)

function print(x: any): any {
    console.log(x)
}
