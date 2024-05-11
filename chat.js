var _pj;

var assistant, done, mappings, message;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

function choix_fillière() {
  var tout, x;
  tout = {
    "2SCL": "/static/affiche/2SCL_1.jpg",
    "2IA": "/static/affiche/2ia.jpg",
    "BIA": "/static/affiche/BIA_.jpg",
    "GD": "/static/affiche/GD_1.jpg",
    "GL": "/static/affiche/GL_1.jpg",
    "IDF": "/static/affiche/IDF_1.jpg",
    "IDSIT": "/static/affiche/IDSIT.jpg",
    "SSI": "/static/affiche/SSI_1.jpg",
    "SSE": "/static/affiche/SSE.jpg"
  };
  console.log("les filli\u00e8res disponibles sont :");

  for (var fil, _pj_c = 0, _pj_a = tout, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    fil = _pj_a[_pj_c];
    console.log(" ", fil);
  }

  x = input("Entrez une filliere valide que vous chercher: \n");
  x = x.upper();

  while (!_pj.in_es6(x, tout)) {
    x = input("Veuillez entrer une fili\u00e8re parmi celles qui existent : \n");
    x = x.upper();
  }

  return tout[x];
}

function filliere_afficher() {
  var img, rep;
  rep = choix_fillière();
  img = mpimg.imread(rep);
  plt.imshow(img);
  plt.show();
}

function partenaires() {
  var ecole;
  ecole = ["CISCO", "IBM", "JUNIPER NETWORKS", "ORACLE", "ORANGE BUSINESS SERVICES", "MEGA MICROSOFT", "MARITEMEX", "EDVANTIS"];
  console.log("L'ENSIAS entretient des partenariats avec de nombreuses entreprises nationales et internationales.");
  console.log("parmi eux nous pouvons citer");

  for (var col, _pj_c = 0, _pj_a = ecole, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    col = _pj_a[_pj_c];
    console.log(col);
  }

  console.log("et plusieurs autre entreprises");
}

function emploi(s, p) {
  if (s === 1 && p === 1) {
    return "emploi/S1 P1 FULL.png";
  } else {
    if (s === 1 && p === 2) {
      return "emploi/1 P2 FULL.png";
    } else {
      if (s === 2 && p === 1) {
        return "emploi/S2 P1 FULL.png";
      } else {
        if (s === 2 && p === 2) {
          return "emploi/S2 P2.jpg";
        } else {
          return 0;
        }
      }
    }
  }
}

function emploi_afficher() {
  var img, p, rep, s;
  s = Number.parseInt(input("quel semestre cherchez vous ?\n"));
  p = Number.parseInt(input("quelle p\u00e9riode cherchez vous ?\n"));
  rep = emploi(s, p);

  if (rep) {
    img = mpimg.imread(rep);
    plt.imshow(img);
    plt.show();
  } else {
    console.log("veuillez entrer une valeur valide");
    emploi_afficher();
  }
}

function mobilite() {
  var x;
  console.log("L'ENSIAS encourage, depuis 1995, la mobilite internationale de ses etudiants.");
  console.log("il y a 2 type de mobilite:");
  console.log("annee d'echange en 3 annee  la double diplomation");
  console.log("chercher vous des renseignement sur:");
  x = Number.parseInt(input("1-annee d'echange uniquement.\n2-double diplomation uniquement.\n3-les deux a la fois.\n"));

  while (x !== 1 && x !== 2 && x !== 3) {
    console.log("veuillez entrer un nombre valide pour votre choix.");
    x = Number.parseInt(input("\t1-annee d'echange uniquement.\n\t2-double diplomation uniquement.\n\t3-les deux a la fois.\n"));
  }

  if (x === 1) {
    echange();
  } else {
    if (x === 2) {
      dd();
    } else {
      if (x === 3) {
        echange();
        dd();
      }
    }
  }

  console.log("il faut bien travailler ici a l'ENSIAS avant de reflechir d'aller a l'etranger");
}

function echange() {
  var col;
  col = ["ENSIMAGENSIMAG", "ENSEIRB", "ENSEEIHT", "ESIEE", "ISIMA", "Telecom Saint Etienne", " Ecole des Mines de Saint Etienne", " Universite de Stockholm", "ENSI de Tunis", "Universit\u00e9 de Sherbrooke"];
  console.log("Un r\u00e9seau d'ecoles d'ingenieurs partenaires accueille nos eleves ing\u00e9nieurs soit dans le cadre de convention d'echanges d'etudiants pour suivre la troisieme annee \u00e0 l'etranger");

  for (var eco, _pj_c = 0, _pj_a = col, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    eco = _pj_a[_pj_c];
    console.log("\t*", eco);
  }
}

function dd() {
  console.log("dans le cadre de programmes de double diplomation qui offre la possibilite d'avoir un double dipl\u00f4me");
  console.log("actuellement avec l'ENSIMAG et l'ISIMA sont les seuls ecoles permettant ceci");
}

function cours() {
  var path, per, sem;
  sem = 0;
  sem = Number.parseInt(input("durant quel semestre avez vous eu ce cours ?\n"));

  while (sem !== 1 && sem !== 2) {
    sem = Number.parseInt(input("veuillez choisir un semestre valide\n"));
  }

  per = 0;
  per = Number.parseInt(input("durant quel periode avez vous eu ce cours ?\n"));

  while (per !== 1 && per !== 2) {
    per = Number.parseInt(input("veuillez choisir un periode valide\n"));
  }

  path = choice(sem, per);
  afficher_pdf(path);
}

function choice(sem, per) {
  if (sem === 1 && per === 1) {
    return cours1_1();
  } else {
    if (sem === 1 && per === 2) {
      return cours1_2();
    } else {
      if (sem === 2 && per === 1) {
        return cours2_1();
      }
    }
  }

  return cours2_2();
}

function cours1_1() {
  var choix, cs, rep;
  rep = "cours/S1 P1/";
  choix = 0;
  cs = ["algorithmique", "economie et gestion d'entreprise", "comptabilite et gestion financiere", "probabilite", "programmation procedurale"];
  console.log("les cours disonible sont:");

  for (var i = 0, _pj_a = cs.length; i < _pj_a; i += 1) {
    console.log("\t", i + 1, "-", cs[i]);
  }

  choix = Number.parseInt(input("quel cours chercher vous ?\n"));

  while (choix - 1 < 0 || choix > cs.length) {
    choix = Number.parseInt(input("votre choix n'est pas valide\n"));
  }

  if (choix === 1) {
    rep = rep + "algoAllcours complet.pdf";
  } else {
    if (choix === 2) {
      rep = rep + "economie.pdf";
    } else {
      if (choix === 3) {
        rep = rep + "ENSIAS-CFE_cahier des TD-CG_2023.pdf";
      } else {
        if (choix === 4) {
          rep = rep + "Probabilit\u00e9.pdf";
        } else {
          if (choix === 5) {
            rep = rep + "Programmation Proc\u00e9durale complet.pdf";
          }
        }
      }
    }
  }

  return rep;
}

function cours1_2() {
  var choix, cs, rep;
  choix = 0;
  rep = "cours/S1 P2/";
  cs = ["management", "structure de donnee", "simulation", "base de donnee", "statistique descriptive", "competitive programming"];
  console.log("les cours disonible sont:");

  for (var i = 0, _pj_a = cs.length; i < _pj_a; i += 1) {
    console.log("\t", i + 1, "-", cs[i]);
  }

  choix = Number.parseInt(input("quel cours chercher vous ?\n"));

  while (choix - 1 < 0 || choix > cs.length) {
    choix = Number.parseInt(input("votre choix n'est pas valide\n"));
  }

  if (choix === 1) {
    rep = rep + "INITIATION AU MANAGEMENT.pdf";
  } else {
    if (choix === 2) {
      rep = rep + "Lec 01_Compl\u00e9ment_Complexit\u00e9.pdf";
    } else {
      if (choix === 3) {
        rep = rep + "Polycopi\u00e9_Simulation_Stochastique.pdf";
      } else {
        if (choix === 4) {
          rep = rep + "Slides_Partie1_BD_ENSIAS_2024_Nassar.pdf";
        } else {
          if (choix === 5) {
            rep = rep + "Statistique descriptive.pdf";
          } else {
            if (choix === 6) {
              rep = rep + "guide-t-cp.pdf";
            } else {
              if (choix === 7) {
                rep = rep + "jeu dinstruction.pdf";
              }
            }
          }
        }
      }
    }
  }

  return rep;
}

function cours2_1() {
  var choix, cs, rep;
  choix = 0;
  rep = "cours/S2 P1/";
  cs = ["calculabilite", "systeme d'exploitation", "programmation orientee objet", "base de donnees I", "transmission de donnees"];
  console.log("les cours disponibles sont");

  for (var i = 0, _pj_a = cs.length; i < _pj_a; i += 1) {
    console.log("\t", i + 1, "-", cs[i]);
  }

  choix = Number.parseInt(input("quel cours chercher vous\n"));

  while (choix - 1 < 0 || choix > cs.length) {
    choix = Number.parseInt(input("votre choix n'est pas valide\n"));
  }

  if (choix === 1) {
    rep = rep + "Calcula Cours Salah Ba\u00efna.pdf";
  } else {
    if (choix === 2) {
      rep = rep + "Cours_UNIX_Zbakh.pdf";
    } else {
      if (choix === 3) {
        rep = rep + "M.2.4.1_Lec 01_Paradigme et Concepts Objet.pdf";
      } else {
        if (choix === 4) {
          rep = rep + "Slides_BD1_ENSIAS_2024_Nassar.pdf";
        } else {
          if (choix === 5) {
            rep = rep + "transmission de donnee.pdf";
          }
        }
      }
    }
  }

  return rep;
}

function cours2_2() {
  var choix, cs, rep;
  choix = 0;
  rep = "cours/S2 P2/";
  cs = ["XML", "logique des predicats", "base de donnees II", "reseaux informatiques"];
  console.log("les cours disponibles sont");

  for (var i = 0, _pj_a = cs.length; i < _pj_a; i += 1) {
    console.log("\t", i + 1, "-", cs[i]);
  }

  choix = Number.parseInt(input("quel cours chercher vous\n"));

  while (choix - 1 < 0 || choix > cs.length) {
    choix = Number.parseInt(input("votre choix n'est pas valide\n"));
  }

  if (choix === 1) {
    rep = rep + "Cours_XML_2024_Seance1 (1).pdf";
  } else {
    if (choix === 2) {
      rep = rep + "Introduction \u00e0 la logique des pr\u00e9dicats(Hdioud)Version1.pdf";
    } else {
      if (choix === 3) {
        rep = rep + "PL_SQL_Nassar_2023_2024.pdf";
      } else {
        if (choix === 4) {
          rep = rep + "r\u00e9seau informatique.ppt";
        }
      }
    }
  }

  return rep;
}

function afficher_pdf(chemin_pdf) {
  try {
    new subprocess.Popen([chemin_pdf], {
      "shell": true
    });
  } catch (e) {
    console.log("Une erreur s'est produite :", e);
  }
}

function aide() {
  var table;
  console.log("bonjour, je pense que vous auriez de clarification");
  console.log("je suis ENSIAS_chatbot, j'ai ete creer dans le but de repondre a toute vos question");
  console.log("je peux vous donnez des renseignement concernant :");
  table = ["les emplois du temps", "les filieres ici a l'ensias", "les partenaires", "les mobilites a l'etranger", "ou simplement si vous chercher un cours"];

  for (var elm, _pj_c = 0, _pj_a = table, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    elm = _pj_a[_pj_c];
    console.log("\t", elm);
  }

  console.log("je serai ravi de repondre a vos demande.\nque puis-je faire pour vous ?");
}

function inconnu() {
  var x;
  console.log("Je m'excuse je n'ai pas compris votre demande");
  x = input("avez-vous besoin de renseignement ?\n\t0-non\n\t1-oui");

  if (x.upper() === "OUI" || x === "1") {
    aide();
  } else {
    if (x.upper() === "NON" || x === "0") {
      console.log("veuillez reformulez votre demande pour que je puisse mieux comprendre");
    } else {
      inconnu();
    }
  }
}

function goodbye() {
  console.log("a la prochaine");
  sys.exit(0);
}

mappings = {
  "emploi": emploi,
  "fermeture": goodbye,
  "filliere": choix_fillière,
  "partenaire": partenaires,
  "mobilite": mobilite,
  "cours": cours,
  "aide": aide,
  "fallback": inconnu
};
assistant = new BasicAssistant("intents.json", mappings);
assistant.load_model();
done = false;
console.log("Bienvenu je suis ENSIAS_chatbot");
console.log("en quoi je peux vous aider aujourd'hui\n");

while (!done) {
  message = input(">>> ");

  if (message === "STOP") {
    done = true;
  } else {
    console.log(assistant.process_input(message));
  }

  console.log("\n");
}
