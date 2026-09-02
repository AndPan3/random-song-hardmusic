const button = document.getElementById("button")
button.addEventListener("click",function randomnumber(){var number = Math.floor(Math.random() * 10)+1;
    window.location.href = `https://andpan3.github.io/random-song-hardmusic/sites/${number}.html`;
})