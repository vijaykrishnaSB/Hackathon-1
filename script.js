const button = document.getElementById("button");
button.addEventListener("click", myfunction);
async function myfunction() {
    for (let i=1; i<50; i++){
        const url = await fetch(`https://anapioficeandfire.com/api/books/${i}`);
        const data = await url.json();
        console.log(data);
    }
}
