// Charger le contenu sauvegardé
document.getElementById("editor").value = localStorage.getItem("content") || "";
document.getElementById("display").innerText = localStorage.getItem("content") || "Aucun contenu publié.";

// Fonction pour sauvegarder le contenu
function saveContent() {
    const content = document.getElementById("editor").value;
    localStorage.setItem("content", content);
    document.getElementById("display").innerText = content;
}

