import {
  filiere,
  cours,
  emplois,
  messages,
  changemodemethod,
  bot,
  user,
  animation,
  partenaire,
  mobilite,
  aide,
  confusion,
} from "./functions.js";
const chatbox = document.querySelector(".chat_sec");
const sendbtn = document.querySelector(".send_btn");
const usermsg = document.getElementById("userMsg");

let functions_array = [
  [
    "Concentrez-vous sur vos etudes.",
    "Je peux vous accompagner durant vos etudes.",
    "Essayez de ne pas secher les cours.",
    "Faites attention aux penalites si vous vous absentez souvent.",
    "Vous pouvez consulter votre emploi du temps sur notre plateforme en ligne.",
  ],
  [
    "Nos partenaires comprennent des entreprises de renom telles que X, Y et Z.",
    "Nous avons etabli des partenariats solides avec diverses entreprises du secteur.",
    "Nos partenaires academiques incluent des institutions prestigieuses du monde entier.",
  ],
  [
    "Nous proposons des programmes de mobilite internationale et de double diplomation dans plusieurs pays.",
    "L'annee d'echange est une opportunite unique pour etudier a l'etranger et elargir vos horizons academiques.",
    "Les etudiants ont la possibilite de suivre une partie de leur cursus dans nos universites partenaires a l'etranger.",
  ],
  [
    "N'oubliez pas que le cours tout seul ne suffit pas.",
    "Essayez d'appliquer votre cours maintenant.",
    "Les TDs restent un bon moyen pour appliquer votre cours.",
    "Vous pouvez trouver des ressources pedagogiques supplementaires sur notre plateforme en ligne.",
  ],
  [
    "Je suis la pour vous aider. Pouvez-vous me donner plus de details sur votre probleme?",
    "Je vais essayer de vous aider. Quel est votre probleme?",
    "N'hesitez pas a me poser n'importe quelle question. Je ferai de mon mieux pour vous aider.",
  ],
  [
    "Chaque filiere joue un role important.",
    "Choisissez votre filiere selon vos preferences.",
    "Ensias suit le marche du travail en proposant les dernieres innovations.",
    "Chaque filiere donne acces a une carriere particuliere.",
    "Vous pouvez trouver plus d'informations sur notre site web concernant les specialites de chaque filiere.",
  ],
  ["changer mode"],
];

function onsendbtn(sendbtn, chatbox, usermsg) {
  let text = usermsg.value;
  if (text == "") {
    return;
  }
  let msg = user(text);

  messages.push(msg);
  console.log(msg);

  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: JSON.stringify({ message: text }),
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((r) => {
      let smsg = bot(r.answer);
      let isthere = false;
      let index;
      console.log(r.answer);
      functions_array.forEach((array, i) => {
        if (array.includes(r.answer)) {
          isthere = true;
          index = i;
        }
      });
      if (isthere) {
        if (index == 0) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            emplois(chatbox, sendbtn, usermsg, updatechattext, display);
          }, 1600);
        }
        if (index == 1) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            partenaire(chatbox, updatechattext);
          }, 1600);
        }
        if (index == 2) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            mobilite(chatbox, sendbtn, usermsg, updatechattext, display);
          }, 1600);
        }
        if (index == 3) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            cours(chatbox, sendbtn, usermsg, updatechattext, display);
          }, 1600);
        }
        if (index == 4) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            aide(chatbox, updatechattext);
          }, 1600);
        }
        if (index == 5) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            filiere(chatbox, sendbtn, usermsg, updatechattext, display);
          }, 1600);
        }
        if (index == 6) {
          animation(chatbox, updatechattext);
          setTimeout(() => {
            changemodemethod(chatbox, updatechattext);
          }, 1600);
        }
      } else {
        animation(chatbox, updatechattext);
        setTimeout(() => {
          messages.push(smsg);
          updatechattext(chatbox);
        }, 1600);
      }
      updatechattext(chatbox);
      usermsg.value = "";
    })
    .catch((error) => {
      console.error("Error: ", error);
      updatechattext(chatbox);
      usermsg.value = "";
    });
}
function updatechattext(chatbox) {
  let chatsec = "";
  messages.forEach((element) => {
    chatsec += element;
  });
  chatbox.innerHTML = chatsec;
  chatbox.scrollTo({ top: chatbox.scrollHeight, behavior: "smooth" });
}
function display() {
  sendbtn.onclick = () => {
    onsendbtn(sendbtn, chatbox, usermsg);
  };
}

display();
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
