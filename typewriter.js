const sentence = "hello there from lighthouse labs";
let delay = 50;

for (const char of sentence) {
  setTimeout(() => {
   process.stdout.write(char); // print the char here
  }, delay)
  delay =+ 50;
}