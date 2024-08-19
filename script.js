const citations = [
    { texte: "La vie est ce qui arrive pendant que vous êtes occupé à faire d'autres projets.", auteur: "John Lennon" },
    { texte: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", auteur: "Winston Churchill" },
    { texte: "Je pense, donc je suis.", auteur: "René Descartes" },
    { texte: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", auteur: "Steve Jobs" },
    { texte: "La créativité, c'est l'intelligence qui s'amuse.", auteur: "Albert Einstein" },
    { texte: "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.", auteur: "Nelson Mandela" },
    { texte: "La simplicité est la sophistication suprême.", auteur: "Leonardo da Vinci" },
    { texte: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", auteur: "Albert Einstein" },
    { texte: "Celui qui déplace la montagne, c'est celui qui commence à enlever les petites pierres.", auteur: "Confucius" },
    { texte: "L'imagination est plus importante que le savoir.", auteur: "Albert Einstein" },
    { texte: "Le bonheur n'est pas au bout du chemin, il est le chemin.", auteur: "Lao Tseu" },
    { texte: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", auteur: "Confucius" },
    { texte: "Fais de ta vie un rêve, et d'un rêve, une réalité.", auteur: "Antoine de Saint-Exupéry" },
    { texte: "Le secret du changement est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire l'avenir.", auteur: "Socrate" },
    { texte: "La musique exprime ce qui ne peut être dit et sur quoi il est impossible de rester silencieux.", auteur: "Victor Hugo" }
];

function genererCitationAleatoire() {
    const indexAleatoire = Math.floor(Math.random() * citations.length);
    const citationChoisie = citations[indexAleatoire];
    
    document.getElementById('citation').textContent = citationChoisie.texte;
    document.getElementById('auteur').textContent = "- " + citationChoisie.auteur;
}

document.getElementById('nouveau').addEventListener('click', genererCitationAleatoire);

genererCitationAleatoire();