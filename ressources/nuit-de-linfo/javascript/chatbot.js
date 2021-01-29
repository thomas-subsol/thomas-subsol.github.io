function parler() {
    var probleme = document.getElementById("saisie").value;
    document.getElementById("saisie").value = "";
    document.getElementById("chatbotask").innerHTML += "VOUS : " + probleme;
    if (/oui/.test(probleme)) {
        document.getElementById("chatbotask").innerHTML += "<p id=\"chatbotask\">CHATBOT : Je peux vous aider ! Quel est votre probleme ?</p>";
    } else {
        if (probleme == "non") {
            document.getElementById("chatbotask").innerHTML += "<p class=\"pasdeprblm\">Merci ! J'espere vous avoir aidé</p>";
            var saisir = document.getElementById("saisie");
            var problematique = document.getElementById("chatbotask");
            problematique.remove();
            saisir.remove();
        } else if (((/argent/i.test(probleme)) && (/problème/i.test(probleme))) || (/decouvert/i.test(probleme)) || ((/argent/i.test(probleme)) && (/pas/i.test(probleme)))) {
            document.getElementById("chatbotask").innerHTML += "<p class=\"réponsemal\">Si vous avez des problemes d'argent, vous pouvez contacter votre CROUS régional pour obtenir des aides alimentaires d'urgence ou un logement d'urgence.</p>";
        } else if (((/suicide/i.test(probleme)) || (/sucide/i.test(probleme))) && (/pas/i.test(probleme) != true)) {
            document.getElementById("chatbotask").innerHTML += "<p class=\"réponsemal\">Le suicide n'est pas une solution ! Appelez le numéro SOS Amitié : <a href=\"tel:0972394050\">09 72 39 40 50</a>.</p>";
        } else if ((/mort/i.test(probleme)) || (/meur/i.test(probleme)) || ((/vie/i.test(probleme))) && (/fin/i.test(probleme)) || (/mour/i.test(probleme))) {
            document.getElementById("chatbotask").innerHTML += "<p class=\"réponsemal\">Si vous avez des pensées dépressives, essayez d'en parler avec des proches. Si vous ne pouvez pas le faire, il existe des numéros d'aide spécifiques disponibles 24h/24.</p>";
        } else if (/rickroll/i.test(probleme)) {
            document.getElementById("chatbotask").innerHTML += "<video id=\"video\" autoplay=\"true\" src=\"../videos/rickroll.mp4\">Vous avez été rickrollés !</video>";
        } else {
            document.getElementById("chatbotask").innerHTML += "<p class=\"réponsebi1\">Je n'ai pas compris votre demande ! Profitez de la vie : il n'y a pas de problèmes, il n'y a que des solutions.</p>";
        }
        document.getElementById("chatbotask").innerHTML += "<p id=\"chatbotask\">STUDENTBOT : Avez-vous un autre probleme ?</p>";
    }
}
