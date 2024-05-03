from assistants import BasicAssistant
import sys
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from time import sleep
import subprocess


def choix_fillière():
    pass


def filliere_afficher():
    pass


def partenaires():
    pass


def emploi(s, p):
    pass


def emploi_afficher():
    pass


def mobilite():
    pass


def echange():
    pass


def dd():
    pass


def cours():
    pass


def choice(sem, per):
    pass


def aide():
    pass


def inconnu():
    pass


def goodbye():
    pass


    # partenaire doit etre modifier:
mappings = {
    'emploi': emploi_afficher,

    'fermeture': goodbye,

    'filliere': choix_fillière,

    'partenaire': partenaires,

    'mobilite': mobilite,

    'cours': cours,

    'aide': aide,

    'fallback': inconnu
}


assistant = BasicAssistant('intents.json', mappings)

assistant.fit_model()
assistant.save_model()

done = False

print("Bienvenu je suis ENSIAS_chatbot")
print("en quoi je peux vous aider aujourd'hui\n")


def get_msg(message):
    # assistant.load_model()
    return assistant.process_input(message)
