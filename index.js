// api-example.ts
// async function fetchPosts(): Promise<void> {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data: any = await response.json();
//     console.log("API data:", data);
//   } catch (error: any) {
//     console.error("Error fetching data:", error.message);
//   }
// }
// fetchPosts();
var words = ["Start", "Seek", "Explore", "Feel", "Grow"];
var index = 0;
var wordSpan = document.getElementById("word");
function updateWord() {
    wordSpan.classList.add("slide-out");
    setTimeout(function () {
        index = (index + 1) % words.length;
        wordSpan.textContent = words[index];
        wordSpan.classList.remove("slide-out");
        wordSpan.classList.add("slide-in");
        // Remove slide-in after animation to allow next one
        setTimeout(function () { return wordSpan.classList.remove("slide-in"); }, 500);
    }, 500);
}
setInterval(updateWord, 2000);
