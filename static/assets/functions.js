function botimg(link) {
  return `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                       voila votre emplois
                       <img src="${link}">
                       <a href="${link}" download>Télécharger</a>
                        </div>
                    </div>
                </div>`;
}
function mode() {
  let shape1 = document.querySelector(".shape1");
  let shape2 = document.querySelector(".shape2");
  let dark = document.querySelector(".dark");
  let user = document.querySelectorAll(".user");
  let bot = document.querySelectorAll(".bot");
  let edit = document.querySelectorAll(".modif");
  let logo = document.querySelector(".logo");
  let style = document.querySelector(".stylecss");
  let arr = [shape1, shape2, dark, user, bot, edit, logo];
  let arr2 = [
    "Ellipse 1.png",
    "Ellipse 2.png",
    "circum_dark.png",
    "mdi_user.png",
    "Vector.png",
    "material-symbols_edit-outline.png",
    "Logo R Cosmetics.png",
  ];

  if (localStorage.getItem("mode") == null) {
    localStorage.setItem("mode", "light");
  } else if (localStorage.getItem("mode") == "dark") {
    style.setAttribute("href", "/static/assets/darkstyle.css");
    arr.forEach((el, i) => {
      if (el == user || el == edit || el == bot) {
        el.forEach((e) => {
          e.setAttribute("src", "/static/assets/imgs/dark/" + arr2[i]);
        });
      } else {
        el.setAttribute("src", "/static/assets/imgs/dark/" + arr2[i]);
      }
    });
  } else if (localStorage.getItem("mode") == "light") {
    style.setAttribute("href", "/static/assets/style.css");
    arr.forEach((el, i) => {
      if (el == user || el == edit || el == bot) {
        el.forEach((e) => {
          e.setAttribute("src", "/static/assets/imgs/" + arr2[i]);
        });
      } else {
        el.setAttribute("src", "/static/assets/imgs/" + arr2[i]);
      }
    });
  }
}
function changemode() {
  if (localStorage.getItem("mode") == "light") {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
  mode();
}
function botpdf(s, p, name) {
  return `<div class="bot_container">
  <div class="bot_msg">
      <div class="name">BOT</div>
      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
      <div class="content">
      <p style="position: relative; margin: 5px 0;">voila votre cours: </p>
  
  <a class="download_pdf" href="/static/cours/S${s} P${p}/${name}.pdf" download>Télécharger: ${name}</a>
      </div>
  </div>
</div>`;
}
window.addEventListener("load", () => {
  mode();
});
export let messages = [];
export function bot(msg) {
  return `<div class="bot_container">
            <div class="bot_msg">
                <div class="name">BOT</div>
                <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                <div class="content">
                  ${msg}
                </div>
            </div>
          </div>`;
}
export function user(msg) {
  return `<div class="user_container">
                <div class="user_msg">
                    <div class="name">VOUS</div>
                    <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                    <div class="content">
                    ${msg}
                    </div>
                    
                </div>
            </div>`;
}
export function animation(chatbox, updatechattext) {
  let msg = bot('<div class="dots"><div></div><div></div><div></div></div>');
  messages.push(msg);
  updatechattext(chatbox);
  setTimeout(() => {
    messages.pop();
    updatechattext(chatbox);
  }, 1500);
}
export function cours(chatbox, sendbtn, usermsg, updatechattext, display) {
  let msg = bot(
    "quel semestre et periode dont existe-il ce cours ? choisir entre 1 et 2 et separer par espace"
  );
  messages.push(msg);
  updatechattext(chatbox);
  function select_semestre(val) {
    let msg = user(val);

    messages.push(msg);
    updatechattext(chatbox);

    function cours1_1() {
      let cs = [
        "algorithmique",
        "economie et gestion d'entreprise",
        "comptabilite et gestion financiere",
        "probabilite",
        "programmation procedurale",
      ];

      let smsg = bot("les cours disponible sont: ");

      let list = '<ol style="display= block; position: relative;">';
      cs.forEach((e) => {
        list += `<li style="display= block; position: relative;">${e}</li>`;
      });
      list += "</ol>";
      smsg += bot(list);
      smsg += bot("taper le chiffre de cours que vous chercher: ");
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(smsg);
        updatechattext(chatbox);
      }, 1600);

      function select_semestre(val) {
        let msg = user(val);

        messages.push(msg);
        updatechattext(chatbox);
        msg = "";
        val = parseInt(val);
        if (val >= 1 && val <= cs.length) {
          console.log(val);
          msg += botpdf(1, 1, cs[val - 1]);
          animation(chatbox, updatechattext);
          setTimeout(() => {
            usermsg.value = "";
            messages.push(msg);
            updatechattext(chatbox);
            return display();
          }, 1600);
        } else {
          msg += bot("s'il vous plait choisir un chiffre de cours valide");
          animation(chatbox, updatechattext);
          usermsg.value = "";
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
          }, 1600);
        }
      }
      select_semestre = select_semestre.bind(this);

      sendbtn.onclick = () => {
        select_semestre(usermsg.value);
      };
    }

    function cours1_2() {
      let cs = [
        "management",
        "structure de donnee",
        "simulation",
        "base de donnee",
        "statistique descriptive",
        "competitive programming",
        "assembleur",
      ];

      let smsg = bot("les cours disponible sont: ");

      let list = '<ol style="display= block; position: relative;">';
      cs.forEach((e) => {
        list += `<li style="display= block; position: relative;">${e}</li>`;
      });
      list += "</ol>";
      smsg += bot(list);
      smsg += bot(" taper le chiffre de cours que vous chercher:");
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(smsg);
        updatechattext(chatbox);
      }, 1600);

      function select_semestre(val) {
        let msg = user(val);

        messages.push(msg);
        updatechattext(chatbox);
        msg = "";
        val = parseInt(val);
        if (val >= 1 && val <= cs.length) {
          console.log(val);
          msg += botpdf(1, 2, cs[val - 1]);
          animation(chatbox, updatechattext);
          usermsg.value = "";
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
            return display();
          }, 1600);
        } else {
          msg += bot(" s'il vous plait choisir un chiffre de cours valide");
          animation(chatbox, updatechattext);
          usermsg.value = "";
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
          }, 1600);
        }
      }

      sendbtn.onclick = () => {
        select_semestre(usermsg.value);
      };
    }

    function cours2_1() {
      let cs = [
        "calculabilite",
        "systeme d'exploitation",
        "programmation orientee objet",
        "base de donnees I",
        "transmission de donnees",
      ];

      let smsg = bot("les cours disponible sont: ");

      let list = '<ol style="display= block; position: relative;">';
      cs.forEach((e) => {
        list += `<li style="display= block; position: relative;">${e}</li>`;
      });
      list += "</ol>";
      smsg += bot(list);
      smsg += bot(" taper le chiffre de cours que vous chercher: ");
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(smsg);
        updatechattext(chatbox);
      }, 1600);

      function select_semestre(val) {
        let msg = user(val);

        messages.push(msg);
        updatechattext(chatbox);
        msg = "";
        val = parseInt(val);
        if (val >= 1 && val <= cs.length) {
          console.log(val);
          msg += botpdf(2, 1, cs[val - 1]);
          animation(chatbox, updatechattext);
          usermsg.value = "";
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
            return display();
          }, 1600);
        } else {
          msg += bot("s'il vous plait choisir un chiffre de cours valide");
          usermsg.value = "";
          animation(chatbox, updatechattext);
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
          }, 1600);
        }
      }

      sendbtn.onclick = () => {
        select_semestre(usermsg.value);
      };
    }

    function cours2_2() {
      let cs = [
        "XML",
        "logique des predicats",
        "base de donnees II",
        "reseaux informatiques",
      ];

      let smsg = bot("les cours disponible sont: ");

      let list = '<ol style="display= block; position: relative;">';
      cs.forEach((e) => {
        list += `<li style="display= block; position: relative;">${e}</li>`;
      });
      list += "</ol>";
      smsg += bot(list);
      smsg += bot("taper le chiffre de cours que vous chercher: ");
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(smsg);
        updatechattext(chatbox);
      }, 1600);

      function select_semestre(val) {
        let msg = user(val);

        messages.push(msg);
        updatechattext(chatbox);
        msg = "";
        val = parseInt(val);
        if (val >= 1 && val <= cs.length) {
          console.log(val);
          msg += botpdf(2, 2, cs[val - 1]);
          animation(chatbox, updatechattext);
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
            return display();
          }, 1600);
        } else {
          msg += bot("s'il vous plait choisir un chiffre de cours valide");
          usermsg.value = "";
          animation(chatbox, updatechattext);
          setTimeout(() => {
            messages.push(msg);
            updatechattext(chatbox);
          }, 1600);
        }
      }
      select_semestre = select_semestre.bind(this);

      sendbtn.onclick = () => {
        select_semestre(usermsg.value);
      };
    }

    msg = "";
    val = val.trim();
    if (val == "1 2" || val == "2 1" || val == "1 1" || val == "2 2") {
      if (val == "1 2") {
        usermsg.value = "";
        return cours1_2();
      }
      if (val == "2 2") {
        usermsg.value = "";
        return cours2_2();
      }
      if (val == "2 1") {
        usermsg.value = "";
        return cours2_1();
      }
      if (val == "1 1") {
        usermsg.value = "";
        return cours1_1();
      }
    } else {
      msg += bot("s'il vous plait choisir un emplois valide");
      usermsg.value = "";
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
      }, 1600);
    }
  }
  sendbtn.onclick = () => {
    select_semestre(usermsg.value);
  };
}
export function filiere(chatbox, sendbtn, usermsg, updatechattext, display) {
  let tout = {
    "2SCL": "/static/affiche/2SCL_1.jpg",
    "2IA": "/static/affiche/2ia.jpg",
    BIA: "/static/affiche/BIA_.jpg",
    GD: "/static/affiche/GD_1.jpg",
    GL: "/static/affiche/GL_1.jpg",
    IDF: "/static/affiche/IDF_1.jpg",
    IDSIT: "/static/affiche/IDSIT.jpg",
    SSI: "/static/affiche/SSI_1.jpg",
    SSE: "/static/affiche/SSE.jpg",
  };

  let msg = "";
  msg += bot(" Entrez une filliere depuis ces filieres que vous chercher: ");
  msg += bot("Les fillières disponibles sont :");
  let ul = '<ul style="position: relative">';
  for (const e in tout) {
    ul += `<li style="position: relative">${e}</li>`;
  }
  ul += "</ul>";
  msg += bot(ul);
  animation(chatbox, updatechattext);
  setTimeout(() => {
    messages.push(msg);
    updatechattext(chatbox);
  }, 1600);

  function select_semestre(val) {
    let msg = user(val);
    messages.push(msg);
    updatechattext(chatbox);
    msg = "";
    val = val.trim().toUpperCase();
    if (
      val == "2SCL" ||
      val == "GL" ||
      val == "2IA" ||
      val == "BIA" ||
      val == "GD" ||
      val == "IDSIT" ||
      val == "IDF" ||
      val == "SSI" ||
      val == "SSE"
    ) {
      msg += botimg(tout[val]);
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
        return display();
      }, 1600);
    } else {
      msg += bot("s'il vous plait choisir une Filière valide");
      usermsg.value = "";
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
      }, 1600);
    }
  }

  sendbtn.onclick = () => {
    select_semestre(usermsg.value);
    usermsg.value = "";
  };
}
export function changemodemethod(chatbox, updatechattext) {
  let msg = bot("le mode a été changer avec succés!");
  messages.push(msg);
  updatechattext(chatbox);
  changemode();
}
export function emplois(chatbox, sendbtn, usermsg, updatechattext, display) {
  let msg = bot(
    "quel semestre et periode cherchez vous ? choisir entre 1 et 2 et separer par espace"
  );

  messages.push(msg);
  updatechattext(chatbox);

  function select_semestre(val) {
    let msg = user(val);

    messages.push(msg);
    updatechattext(chatbox);

    msg = "";
    val = val.trim();
    if (val == "1 2" || val == "2 1" || val == "1 1" || val == "2 2") {
      if (val == "1 2") {
        msg += botimg("/static/emploi/S1 P2 FULL.png");
      }
      if (val == "2 2") {
        msg += botimg("/static/emploi/S2 P2.jpg");
      }
      if (val == "2 1") {
        msg += botimg("/static/emploi/S2 P1 FULL.png");
      }
      if (val == "1 1") {
        msg += botimg("/static/emploi/S1 P1 FULL.png");
      }
      usermsg.value = "";
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
        return display();
      }, 1600);
    } else {
      msg += bot("s'il vous plait choisir un emplois valide");
      usermsg.value = "";
      animation(chatbox, updatechattext);
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
      }, 1600);
    }
  }

  sendbtn.onclick = () => {
    select_semestre(usermsg.value);
  };
}
export function partenaire(chatbox, updatechattext) {
  let ecole = [
    "CISCO",
    "IBM",
    "JUNIPER NETWORKS",
    "ORACLE",
    "ORANGE BUSINESS SERVICES",
    "MEGA MICROSOFT",
    "MARITEMEX",
    "EDVANTIS",
  ];
  let smsg = bot(
    "L'ENSIAS entretient des partenariats avec de nombreuses entreprises nationales et internationales."
  );

  smsg += bot("parmi eux nous pouvons citer");
  let list = '<ul style="display= block; position: relative;">';
  ecole.forEach((e) => {
    list += `<li style="display= block; position: relative;">${e}</li>`;
  });
  list += "</ul>";
  smsg += bot(list);
  messages.push(smsg);
  updatechattext(chatbox);
}
export function mobilite(chatbox, sendbtn, usermsg, updatechattext, display) {
  let semestre;
  let msg = bot(
    `L'ENSIAS encourage, depuis 1995, la mobilite internationale de ses etudiants.<br>il y a 2 type de mobilite:`
  );
  msg += bot(
    `<ol style="position: relative"><li style="position: relative">annee d'echange uniquement</li><li style="position: relative">double diplomation uniquement</li><li style="position: relative"> les deux a la fois</li><ol>`
  );
  msg += bot("Taper 1 2 ou 3 pour choisir.");
  messages.push(msg);
  updatechattext(chatbox);
  function select_semestre(val) {
    let msg = user(val);
    messages.push(msg);
    updatechattext(chatbox);
    msg = "";
    val = val.trim();
    if (val == "1" || val == "2" || val == "3") {
      semestre = val;
      console.log(semestre);
      function doublediplomation() {
        msg += bot(
          "dans le cadre de programmes de double diplomation qui offre la possibilite d'avoir un double diplôme"
        );
        msg += bot(
          "actuellement avec l'ENSIMAG et l'ISIMA sont les seuls ecoles permettant ceci"
        );
      }
      function echange() {
        msg += bot(
          "Un réseau d'ecoles d'ingenieurs partenaires accueille nos eleves ingénieurs soit dans le cadre de convention d'echanges d'etudiants pour suivre la troisieme annee à l'etranger"
        );
        let ecole = [
          "ENSIMAGENSIMAG",
          "ENSEIRB",
          "ENSEEIHT",
          "ESIEE",
          "ISIMA",
          "Telecom Saint Etienne",
          " Ecole des Mines de Saint Etienne",
          " Universite de Stockholm",
          "ENSI de Tunis",
          "Université de Sherbrooke",
        ];
        let list = '<ul style="display= block; position: relative;">';
        ecole.forEach((e) => {
          list += `<li style="display= block; position: relative;">${e}</li>`;
        });
        list += "</ul>";
        msg += bot(list);
      }
      animation(chatbox, updatechattext);
      if (val == "2") {
        doublediplomation();
      }
      if (val == "1") {
        echange();
      }
      if (val == "3") {
        doublediplomation();
        echange();
      }
      usermsg.value = "";
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
        return display();
      }, 1600);
    } else {
      msg += bot("s'il vous plait choisir un nombre valide");
      animation(chatbox, updatechattext);
      usermsg.value = "";
      setTimeout(() => {
        messages.push(msg);
        updatechattext(chatbox);
      }, 1600);
    }
  }

  sendbtn.onclick = () => {
    select_semestre(usermsg.value);
  };
}
export function aide(chatbox, updatechattext) {
  let table = [
    "les emplois du temps",
    "les filieres ici a l'ensias",
    "les partenaires",
    "les mobilites a l'etranger",
    "ou simplement si vous chercher un cours",
  ];
  let smsg = bot("bonjour, je pense que vous auriez de clarification");

  smsg += bot(
    "je suis ENSIAS_chatbot, je peux vous donnez des renseignement concernant :"
  );

  let list = '<ul style="display= block; position: relative;">';
  table.forEach((e) => {
    list += `<li style="display= block; position: relative;">${e}</li>`;
  });
  list += "</ul>";
  smsg += bot(list);
  smsg += bot(
    "je serai ravi de repondre a vos demande.\nque puis-je faire pour vous ?"
  );
  messages.push(smsg);
  updatechattext(chatbox);
}
export function confusion(chatbox, updatechattext) {
  let table = [
    "les emplois du temps",
    "les filieres ici a l'ensias",
    "les partenaires",
    "les mobilites a l'etranger",
    "ou simplement si vous chercher un cours",
  ];
  let smsg = bot("Vous avez pas bien saisis votre demande.");

  smsg += bot(
    "je suis ENSIAS_chatbot, je peux vous donnez des renseignement concernant :"
  );

  let list = '<ul style="display= block; position: relative;">';
  table.forEach((e) => {
    list += `<li style="display= block; position: relative;">${e}</li>`;
  });
  list += "</ul>";
  smsg += bot(list);
  smsg += bot(
    "je serai ravi de repondre a vos demande.\nque puis-je faire pour vous ?"
  );
  messages.push(smsg);
  updatechattext(chatbox);
}
