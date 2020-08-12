/*
Kávéfőző bekapcsolás
if nincs elég kávé then 
    kávé hozzáadása
endif
if nincs elég víz then
    víz hozzáadása
endif
while nem melegedett fel
    10 mp várakozás
endwhile
csésze odahelyezése
gomb lenyomása
*/

/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1, 2, 3, 4, 5, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];

}

console.log("Sum: ", sum);

/*
Számlálás algoritmusa:

db = 0 
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltél a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
          
}
console.log("Even numbers: ", db);

/* 
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggerst = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggerst) {
        biggerst = numericArray[i];
    }
}
console.log("The biggest element: ", biggerst);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: ", smallest);

/*
Eldöntés tétele (algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat = hamis
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("This array contains 5: ", contains);
