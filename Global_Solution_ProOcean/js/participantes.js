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