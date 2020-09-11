// const liList = document.querySelectorAll("li");
// const ul = document.querySelector('ul');
// const input = document.querySelector("input");


// searchElement = (e) => {
//     const textElement = e.target.value.toLowerCase().trim();
//     let objects = [...liList];
//     objects = objects.filter(li => li.textContent.toLowerCase().includes(textElement));
//     console.log(objects)
//     ul.textContent = "";
//     objects.forEach(li => ul.appendChild(li));
// }


// input.addEventListener("input", searchElement)


const liList = document.querySelectorAll('li');
const input = document.querySelector("input");



searchElement = (e) => {
    const text = e.target.value.toLowerCase();
    objects = [...liList];

    objects.forEach(li => {
        const liTekst = li.textContent;
        if (liTekst.toLowerCase().indexOf(text) !== -1) {
            li.style.display = "block"
        } else {
            li.style.display = "none"
        }


    })

};


input.addEventListener("input", searchElement)