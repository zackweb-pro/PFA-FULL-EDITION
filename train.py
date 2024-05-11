from assistants import BasicAssistant
import sys
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from time import sleep
import subprocess
# from tensorflow.keras.models import load_model


def choix_fillière():
    tout = {"2SCL": "./affiche/2SCL_1.jpg",
            "2IA": "./affiche/2ia.jpg",
            "BIA": "./affiche/BIA_.jpg",
            "GD": "./affiche/GD_1.jpg",
            "GL": "./affiche/GL_1.jpg",
            "IDF": "./affiche/IDF_1.jpg",
            "IDSIT": "./affiche/IDSIT.jpg",
            "SSI": "./affiche/SSI_1.jpg",
            "SSE": "./affiche/SSE.jpg"}

    print("les fillières disponibles sont :")
    for fil in tout:
        print(" ", fil)
        sleep(0.75)

    x = input("Entrez une filliere valide que vous chercher: \n")
    x = x.upper()
    while x not in tout:
        x = input("Veuillez entrer une filière parmi celles qui existent : \n")
        x = x.upper()

    return tout[x]


def filliere_afficher():
    rep = choix_fillière()
    img = mpimg.imread(rep)
    plt.imshow(img)
    plt.show()


def partenaires():
    ecole = ["CISCO", "IBM", "JUNIPER NETWORKS", "ORACLE",
             "ORANGE BUSINESS SERVICES", "MEGA MICROSOFT", "MARITEMEX", "EDVANTIS"]
    print("L'ENSIAS entretient des partenariats avec de nombreuses entreprises nationales et internationales.")
    print("parmi eux nous pouvons citer")
    for col in ecole:
        print(col)
        sleep(0.75)
    print("et plusieurs autre entreprises")


def emploi(s, p):
    if (s == 1 and p == 1):
        return "emploi/S1 P1 FULL.png"
    elif (s == 1 and p == 2):
        return "emploi/1 P2 FULL.png"
    elif (s == 2 and p == 1):
        return "emploi/S2 P1 FULL.png"
    elif (s == 2 and p == 2):
        return "emploi/S2 P2.jpg"
    else:
        return 0


def emploi_afficher():
    s = int(input("quel semestre cherchez vous ?\n"))
    p = int(input("quelle période cherchez vous ?\n"))
    rep = emploi(s, p)
    if (rep):
        img = mpimg.imread(rep)
        plt.imshow(img)
        plt.show()
    else:
        print("veuillez entrer une valeur valide")
        emploi_afficher()


def mobilite():
    print("L'ENSIAS encourage, depuis 1995, la mobilite internationale de ses etudiants.")
    print("il y a 2 type de mobilite:")
    sleep(0.5)
    print("annee d'echange en 3 annee  la double diplomation")
    sleep(1)
    print("chercher vous des renseignement sur:")
    x = int(input(
        "1-annee d'echange uniquement.\n2-double diplomation uniquement.\n3-les deux a la fois.\n"))
    while (x != 1 and x != 2 and x != 3):
        print("veuillez entrer un nombre valide pour votre choix.")
        x = int(input(
            "\t1-annee d'echange uniquement.\n\t2-double diplomation uniquement.\n\t3-les deux a la fois.\n"))
    if (x == 1):
        echange()
    elif (x == 2):
        dd()
    elif (x == 3):
        echange()
        sleep(2)
        dd()
    print("il faut bien travailler ici a l'ENSIAS avant de reflechir d'aller a l'etranger")


def echange():
    col = ["ENSIMAGENSIMAG", "ENSEIRB", "ENSEEIHT", "ESIEE", "ISIMA", "Telecom Saint Etienne",
           " Ecole des Mines de Saint Etienne", " Universite de Stockholm", "ENSI de Tunis",
           "Université de Sherbrooke"]
    print("Un réseau d'ecoles d'ingenieurs partenaires accueille nos eleves ingénieurs soit dans le cadre de convention d'echanges d'etudiants pour suivre la troisieme annee à l'etranger")
    sleep(1)
    for eco in col:
        print("\t*", eco)
        sleep(0.5)


def dd():
    print("dans le cadre de programmes de double diplomation qui offre la possibilite d'avoir un double diplôme")
    sleep(1)
    print("actuellement avec l'ENSIMAG et l'ISIMA sont les seuls ecoles permettant ceci")


def cours():
    sem = 0
    sem = int(input("durant quel semestre avez vous eu ce cours ?\n"))
    while (sem != 1 and sem != 2):
        sleep(0.5)
        sem = int(input("veuillez choisir un semestre valide\n"))
    sleep(0.5)
    per = 0
    per = int(input("durant quel periode avez vous eu ce cours ?\n"))
    while (per != 1 and per != 2):
        sleep(0.5)
        per = int(input("veuillez choisir un periode valide\n"))
    sleep(0.75)
    path = choice(sem, per)
    afficher_pdf(path)


def choice(sem, per):
    if (sem == 1 and per == 1):
        return cours1_1()
    elif (sem == 1 and per == 2):
        return cours1_2()
    elif (sem == 2 and per == 1):
        return cours2_1()
    return cours2_2()


def cours1_1():
    rep = 'cours/S1 P1/'
    choix = 0
    cs = ["algorithmique", "economie et gestion d'entreprise",
          "comptabilite et gestion financiere", "probabilite", "programmation procedurale"]
    print("les cours disonible sont:")
    for i in range(len(cs)):
        print("\t", i+1, "-", cs[i])
        sleep(0.5)
    choix = int(input("quel cours chercher vous ?\n"))
    while (choix-1 < 0 or choix > len(cs)):
        choix = int(input("votre choix n'est pas valide\n"))
    if (choix == 1):
        rep = rep+'algoAllcours complet.pdf'
    elif (choix == 2):
        rep = rep+'economie.pdf'
    elif (choix == 3):
        rep = rep+'ENSIAS-CFE_cahier des TD-CG_2023.pdf'
    elif (choix == 4):
        rep = rep+'Probabilité.pdf'
    elif (choix == 5):
        rep = rep+'Programmation Procédurale complet.pdf'
    return (rep)


def cours1_2():
    choix = 0
    rep = 'cours/S1 P2/'
    cs = ["management", "structure de donnee", "simulation",
          "base de donnee", "statistique descriptive", "competitive programming"]
    print("les cours disonible sont:")
    for i in range(len(cs)):
        print("\t", i+1, "-", cs[i])
        sleep(0.5)
    choix = int(input("quel cours chercher vous ?\n"))
    while (choix-1 < 0 or choix > len(cs)):
        choix = int(input("votre choix n'est pas valide\n"))
    if (choix == 1):
        rep = rep+'INITIATION AU MANAGEMENT.pdf'
    elif (choix == 2):
        rep = rep+'Lec 01_Complément_Complexité.pdf'
    elif (choix == 3):
        rep = rep+'Polycopié_Simulation_Stochastique.pdf'
    elif (choix == 4):
        rep = rep+'Slides_Partie1_BD_ENSIAS_2024_Nassar.pdf'
    elif (choix == 5):
        rep = rep+'Statistique descriptive.pdf'
    elif (choix == 6):
        rep = rep+'guide-t-cp.pdf'
    elif (choix == 7):
        rep = rep+'jeu dinstruction.pdf'
    return (rep)


def cours2_1():
    choix = 0
    rep = 'cours/S2 P1/'
    cs = ["calculabilite", "systeme d'exploitation", "programmation orientee objet",
          "base de donnees I", "transmission de donnees"]
    print("les cours disponibles sont")
    for i in range(len(cs)):
        print("\t", i+1, "-", cs[i])
        sleep(0.5)
    choix = int(input("quel cours chercher vous\n"))
    while (choix-1 < 0 or choix > len(cs)):
        choix = int(input("votre choix n'est pas valide\n"))
    if (choix == 1):
        rep = rep+"Calcula Cours Salah Baïna.pdf"
    elif (choix == 2):
        rep = rep+'Cours_UNIX_Zbakh.pdf'
    elif (choix == 3):
        rep = rep+'M.2.4.1_Lec 01_Paradigme et Concepts Objet.pdf'
    elif (choix == 4):
        rep = rep+"Slides_BD1_ENSIAS_2024_Nassar.pdf"
    elif (choix == 5):
        rep = rep+'transmission de donnee.pdf'
    return (rep)


def cours2_2():
    choix = 0
    rep = 'cours/S2 P2/'
    cs = ['XML', 'logique des predicats',
          'base de donnees II', 'reseaux informatiques']
    print("les cours disponibles sont")
    for i in range(len(cs)):
        print("\t", i+1, "-", cs[i])
        sleep(0.5)
    choix = int(input("quel cours chercher vous\n"))
    while (choix-1 < 0 or choix > len(cs)):
        choix = int(input("votre choix n'est pas valide\n"))
    if (choix == 1):
        rep = rep+'Cours_XML_2024_Seance1 (1).pdf'
    elif (choix == 2):
        rep = rep+'Introduction à la logique des prédicats(Hdioud)Version1.pdf'
    elif (choix == 3):
        rep = rep+'PL_SQL_Nassar_2023_2024.pdf'
    elif (choix == 4):
        rep = rep+'réseau informatique.ppt'
    return rep


def afficher_pdf(chemin_pdf):
    try:
        subprocess.Popen([chemin_pdf], shell=True)
    except Exception as e:
        print("Une erreur s'est produite :", e)


def aide():
    print("bonjour, je pense que vous auriez de clarification")
    sleep(2)
    print("je suis ENSIAS_chatbot, j'ai ete creer dans le but de repondre a toute vos question")
    sleep(2)
    print("je peux vous donnez des renseignement concernant :")

    table = ["les emplois du temps", "les filieres ici a l'ensias", "les partenaires",
             "les mobilites a l'etranger", "ou simplement si vous chercher un cours"]

    sleep(1)
    for elm in table:
        print("\t", elm)
        sleep(1)

    print("je serai ravi de repondre a vos demande.\nque puis-je faire pour vous ?")


def inconnu():
    print("Je m'excuse je n'ai pas compris votre demande")
    sleep(1)
    x = input("avez-vous besoin de renseignement ?\n\t0-non\n\t1-oui")
    sleep(0.5)
    if (x.upper() == 'OUI' or x == '1'):
        aide()
    elif (x.upper() == 'NON' or x == '0'):
        print("veuillez reformulez votre demande pour que je puisse mieux comprendre")
    else:
        inconnu()


def goodbye():
    print("a la prochaine")
    sys.exit(0)


mappings = {
    'emploi': emploi_afficher,

    'fermeture': goodbye,

    'filliere': filliere_afficher,

    'partenaire': partenaires,

    'mobilite': mobilite,

    'cours': cours,

    'aide': aide,

    'fallback': inconnu
}


assistant = BasicAssistant('intents.json', mappings)

assistant.fit_model()
assistant.save_model()
# assistant.load_model()

done = False

print("Bienvenu je suis ENSIAS_chatbot")
print("en quoi je peux vous aider aujourd'hui\n")

while not done:
    message = input(">>> ")
    if message == "STOP":
        done = True
    else:
        print(assistant.process_input(message))
    print("\n")
