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
const words: string[] = ["Start", "Seek", "Explore", "Feel", "Grow"];
let index: number = 0;

const wordSpan = document.getElementById("word") as HTMLElement;

function updateWord(): void {
  wordSpan.classList.add("slide-out");

  setTimeout(() => {
    index = (index + 1) % words.length;
    wordSpan.textContent = words[index];

    wordSpan.classList.remove("slide-out");
    wordSpan.classList.add("slide-in");

    // Remove slide-in after animation to allow next one
    setTimeout(() => wordSpan.classList.remove("slide-in"), 500);
  }, 500);
}

setInterval(updateWord, 2000);


