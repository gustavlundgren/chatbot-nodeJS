import re
import random


def unknown():
    response = ["Jag fattar inte det där än :(", "Det där har jag inte lärt mig än, testa att googla",
                "Hmmm, fråga Linkan!"][random.randrange(3)]
    return response


def message_probability(user_message, recognized_words, single_response=False, required_words=[]):
    message_certainty = 0
    has_required_words = True

    for word in user_message:
        if word in recognized_words:
            message_certainty += 1

    percentage = float(message_certainty) / float(len(recognized_words))

    for word in required_words:
        if word not in user_message:
            has_required_words = False
            break

    if has_required_words or single_response:
        return int(percentage*100)
    else:
        return 0


def check_all_messages(message):
    highest_prob_list = {}

    def response(bot_response, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob_list
        highest_prob_list[bot_response] = message_probability(
            message, list_of_words, single_response, required_words)

    # Responses ------------------------------------------------------------------------------------------------------

    response(["Hej!", "Hallå!", "Tjena!"][random.randrange(3)], ["hej", "hejsan", "tja", "tjo",
             "tjenare"], single_response=True)
    response("Jag äter inget tyvärr", ["vad", "gillar", "du",
             "att", "äta"], required_words=["gillar", "äta"])
    response("Jag mår bra", ["hur", "mår", "du"], required_words=["hur"])
    response(["Jag jagar Linkan", "Jag mastruberar, låt mig vara"][random.randrange(2)], ["vad", "gör",
             "du", "händer"], required_words=["vad"])
    response("Tack, du med!", ["jag", "tycker", "du", "är",
             "bra", "cool", "snygg"], required_words=["tycker", "du", "är"])

    best_match = max(highest_prob_list, key=highest_prob_list.get)
    # print(highest_prob_list)

    return unknown() if highest_prob_list[best_match] < 1 else best_match


def get_response(user_input):
    split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())

    response = check_all_messages(split_message)

    return response


# Testing the response system
while True:
    print("Bot: " + get_response(input("You: ")))
