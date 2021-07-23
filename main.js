const button = document.getElementById("countButton");

button.addEventListener("click", handlerClick
);
function handlerClick(){
    alert("Você começou a contagem!");
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    let newTyped = typedText.replace(/\s/g, "").split("");
    let words = typedText.split(' ');
    let count = {};

    words.forEach(word => {
        count[word] = 0;    
    });

    words.forEach(word => {
        count[word] += 1;
    });

    let charCount = {};
    let charArr = [... new Set(newTyped)];

    charArr.forEach(char => {
        charCount[char] = 0;
    }); 

    newTyped.forEach(char => {
        charCount[char] += 1;
    });

    for (let letter in charCount) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${charCount[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }

     for (let letter in count) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${count[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
}


