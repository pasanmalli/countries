// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let row = document.getElementById("card-row");

let cardBody ="";

let tableBody = `<tr>
                    <th><center>Name</center></th>
                    <th>Flag</th> 
                </tr>` ;

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        // cardBody+=`<div class="col-6">
        //                 <div class="card" style="width: 18rem;">
        //                     <img src="${element.flags.png}" class="card-img-top" alt="...">
        //                         <div class="card-body">
        //                           <h5 class="card-title">${element.name.official}</h5>
        //                           <p class="card-text">${element.flags.alt}</p>
        //                           <a href="#" class="btn btn-primary">Go somewhere</a>
        //                         </div>
        //                       </div>
        //                 </div>`

        tableBody+=`<tr>
                        <td>

                        <center><h2>${element.name.common}</h2> <br>
                        <p>Official Name : ${element.name.official}</p>
                        <p>Region : ${element.region} </p>
                        <p>Population : ${element.population} </p>
                        <a class="btn btn-success" href="${element.maps.googleMaps}">Go To Map</a></center>
                        
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        console.log(element.currencies);

        // for(let [key,value] in Object.entries(element.currencies)) { 
        //     console.log(key,element.currencies); 
        //   } 
    });

    row.innerHTML=cardBody;

    tblCountries.innerHTML=tableBody;
})


function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");






    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })
    })
}

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


