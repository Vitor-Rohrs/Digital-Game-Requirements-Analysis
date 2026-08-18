const corpo = document.getElementById("corpo");
const catalogo = document.getElementById("catalogo");
const campobusca = document.getElementById('busca');
let info = [];
async function carregardados() {
    try{
        const resposta = await fetch("../../jogos.json");
        if(!resposta.ok){
            throw new Error('Erro na requisição');
        }
        info = await resposta.json();
    } catch (erro){
        console.error('Ocorreu um erro:', erro)
    }
    }
    
    
campobusca.addEventListener('input', () =>{
    carregardados();
    let termobusca = campobusca.value.toLowerCase();
    catalogo.innerHTML = "";
    info.forEach(item =>{
        let txtdado = item.nome.toLowerCase();
            
        if(txtdado.includes(termobusca) && termobusca !=""){
                let novo = document.createElement("div")
                novo.innerHTML=`<h2>${item.nome}</h2>
                    <img class="jogos" src="${item.capa}" alt="">
                `;
                
                let imagem = novo.querySelector('.jogos');
                imagem.addEventListener("click", () =>{
                    comp.innerHTML= "";
                    comparacao(item);
                })
                catalogo.appendChild(novo);
            }else{
                
            }
        })
    }
)

const comp = document.createElement("p");
function comparacao(item){
    comp.innerHTML =`<h5>${item.nome}</h5>
    <h5>${item.requisitosMinimos.processador}</h5>
    <h5>${item.requisitosMinimos.placaVideo}</h5>
    <h5>${item.requisitosMinimos.memoria}</h5>
    <button>Comparar</button>
    `;
    corpo.appendChild(comp);
}

const elemento = document.que

let darkmode = localStorage.getItem("darkmode") ==="true";

if(darkmode){
    mudartema();
}

const dkmode = document.querySelector('#noturno')
dkmode.addEventListener('click', () =>{
    darkmode = !darkmode
    localStorage.setItem("darkmode", darkmode);
    mudartema();
});

function mudartema(){
    if(darkmode){
        document.documentElement.style.setProperty('--background', 'var(--background-dark)');
        document.documentElement.style.setProperty('--text', 'var(--text-dark)');
        document.documentElement.style.setProperty('--back-noturno', 'var(--noturno-light)');
        document.documentElement.style.setProperty('--color-noturno', 'var(--noturno-dark)');
    }else{
        document.documentElement.style.setProperty('--background', 'var(--background-light)');
        document.documentElement.style.setProperty('--text', 'var(--text-light)');
        document.documentElement.style.setProperty('--back-noturno', 'var(--noturno-dark)');
        document.documentElement.style.setProperty('--color-noturno', 'var(--noturno-light)');
    }
    
};