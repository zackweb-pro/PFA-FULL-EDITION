from assistants import BasicAssistant


assistant = BasicAssistant('intents.json')

assistant.fit_model()
assistant.save_model()


def get_msg(message):
    # assistant.load_model()
    return assistant.process_input(message)
