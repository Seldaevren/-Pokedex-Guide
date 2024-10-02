const pokeContainer=document.querySelector(".pokemon-container");
const input =document.querySelector(".search-input");
const search=document.querySelector(".search");
const searchBtn=document.querySelector(".searchBtn");

const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
  };

const pokeCount=151;

  searchBtn.addEventListener("click",()=>{
    search.classList.toggle("active")
  });


input.addEventListener("input",()=>{
const inputValue=input.value.toLowerCase(); 
const pokemonNames = document.querySelectorAll('.poke-name');

pokemonNames.forEach((pnames)=>{
    if(pnames.innerHTML.toLocaleLowerCase().includes(inputValue)){
        pnames.parentElement.parentElement.style.display="block";
    }else{
         pnames.parentElement.parentElement.style.display="none";
    }
})
});


  const  fetchFunction = async (id)=>{
    
 const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
 const data = await response.json();
console.log(data)
 createElement(data);
 
  };





const createElement=(data)=>{
    const pokediv=document.createElement("div");
    pokediv.classList.add("pokemon-box");
const pokeType=data.types[0].type.name;
const pokeİd=data.id.toString().padStart(3,"0");
const bgColor= bg_color[pokeType]
pokediv.style.backgroundColor=`${bgColor}`;
   pokediv.innerHTML=` <div class="pokemon-img">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
            </div>

            <div class="pokemon-discuription">
                <span class="poke-id">#${pokeİd}</span>
                <h3 class="poke-name">${data.name}</h3>

                <div class="small">
                    <small class="poke-exp"><i class="fa-solid fa-flask"></i> <span>${data. base_experience} Exp</span>  </small>
                    <small class="poke-weight"
                    ><i class="fa-solid fa-weight-scale"></i> <span>${data.weight} Kg</span></small
                  >
                </div>

                <div class="poke-type">
                    <i class="fa-brands fa-uncharted"></i> <span>${pokeType}</span>
                  
                </div>
            </div>`;

            pokeContainer.appendChild(pokediv);
};


const renderFunction= async ()=>{
    for(let i=1; i<=pokeCount; i++)
       await fetchFunction(i);
    
    }
    
renderFunction();
