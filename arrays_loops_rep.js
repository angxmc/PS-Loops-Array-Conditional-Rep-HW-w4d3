////////////////////////////////
// Easy Going ANSWERED
////////////////////////////////
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even ANSWERED
////////////////////////////////
for (let i = 0; i <= 200; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

////////////////////////////////
// Fizz Buzz answered
////////////////////////////////
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
}

////////////////////////////////
// Wild Wild Life answered
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee);
//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
console.log(wolfy);
//3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles answered
////////////////////////////////
const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const members of ninja) {
  console.log(members.toUpperCase());
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
favMovies.forEach((movie, idx) => {
  if (movie === "Titanic") {
    console.log(idx);
  }
});
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log("sort---------------------");
favMovies.sort();
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//2. Use the method pop
console.log("pop-----------------------");
favMovies.pop();
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//3. push "Guardians of the Galaxy"
console.log("push()--------------------");
favMovies.push("Guardians of the Galaxy");
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//4. Reverse the array
console.log("reverse------------------");
favMovies.reverse();
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//5. Use the shift method
console.log("shift()------------------");
favMovies.shift();
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//6. unshift - what does it return?
console.log("unshift()---------------");
favMovies.unshift("LEAP!");
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log("splice ------------------------------");
favMovies.splice(15, 1, "Avatar");
console.log(favMovies);
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log("slice----------------------------------");
const middleIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(middleIndex);
lastHalf.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//10. console.log your final results
favMovies.forEach(function (movies, idx) {
  console.log(idx + ")" + movies);
});
//11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
//after sorting, fast and furious is no longer the last item, i substituted the one movie we did remove to see the result
favMovies.forEach((movie, idx) => {
  if (movie === "Django Unchained") {
    console.log(idx);
  }
});
//12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

////////////////////////////////
// Where is Waldo answered
////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
//#1
whereIsWaldo.splice(1,1)
console.log(whereIsWaldo);
//#2
whereIsWaldo[1][2]="No One";
console.log(whereIsWaldo);
//#3
console.log(whereIsWaldo[2][1][1]);
////////////////////////////////
//  Excited Kitten answered
////////////////////////////////
const catTalk = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];
for (let i = 0; i < 20; i++) {
    const generate = Math.floor(Math.random() * catTalk.length);
    if (i % 2 ===0) {
        console.log(catTalk[generate]);
    } else {
        console.log("Love me, pet me! HSSSSSS");
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];
nums.sort();
const medium = Math.floor(nums.length/2);
console.log(nums[medium]);