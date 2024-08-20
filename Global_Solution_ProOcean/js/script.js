const botaoBoia = document.querySelector("#botao-boia");
const botaoProOcean = document.querySelector("#botao-proocean");
const botaoNatureza = document.querySelector("#botao-natureza");

const modalBoia = document.querySelector("#modal-boia");
const modalProOcean = document.querySelector("#modal-proocean");
const modalNatureza = document.querySelector("#modal-natureza");

botaoBoia.addEventListener("click" , () => {
    modalBoia.showModal();
    document.body.classList.add('no-scroll');
    modalBoia.style.padding = "5%";
    modalBoia.style.display = "flex";
    modalBoia.style.textAlign = "justify";
    modalBoia.style.overflow = "hidden";    
});

botaoProOcean.addEventListener("click" , () => {
    modalProOcean.showModal();
    document.body.classList.add('no-scroll');
    modalProOcean.style.padding = "5%";
    modalProOcean.style.display = "flex";
    modalProOcean.style.textAlign = "justify";
    modalProOcean.style.overflow = "hidden";   
});

botaoNatureza.addEventListener("click" , () => {
    modalNatureza.showModal();
    document.body.classList.add('no-scroll');
    modalNatureza.style.padding = "5%";
    modalNatureza.style.display = "flex";
    modalNatureza.style.textAlign = "justify";
    modalNatureza.style.overflow = "hidden";   
});

const fecharBoia = document.querySelector("#btn-fechar-boia");
const fecharProOcean = document.querySelector("#btn-fechar-proocean");
const fecharNatureza = document.querySelector("#btn-fechar-natureza")

fecharBoia.addEventListener("click" , () => {
    modalBoia.close();
    document.body.classList.remove('no-scroll');
    modalBoia.style.padding = "";
    modalBoia.style.display = "";
    modalBoia.style.textAlign = "";
    modalBoia.style.overflow = ""
});

fecharProOcean.addEventListener("click" , () => {
    modalProOcean.close();
    document.body.classList.remove('no-scroll');
    modalProOcean.style.padding = "";
    modalProOcean.style.display = "";
    modalProOcean.style.textAlign = "";
    modalProOcean.style.overflow = ""
});

fecharNatureza.addEventListener("click" , () => {
    modalNatureza.close();
    document.body.classList.remove('no-scroll');
    modalNatureza.style.padding = "";
    modalNatureza.style.display = "";
    modalNatureza.style.textAlign = "";
    modalNatureza.style.overflow = ""
});

const fecharAoClicarFora = (modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
            document.body.classList.remove('no-scroll');
            modal.style.padding = "";
            modal.style.display = "";
            modal.style.textAlign = "";
            modal.style.overflow = "";
        }
    });
};

fecharAoClicarFora(modalBoia);
fecharAoClicarFora(modalProOcean);
fecharAoClicarFora(modalNatureza);

window.watsonAssistantChatOptions = {
    integrationID: "97f46e72-820b-441e-a1f3-f8b45ec04077", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "1acf03c7-891e-419b-8817-ccadb952efa2", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};

setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});