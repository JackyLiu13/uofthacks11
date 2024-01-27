import cohere
import time

def generate_content():
    co = cohere.Client("eQsELk9xHfwh99gme2t2H03TgutvC0auWv77P8os")
    documents = [{"title": "Sweatshirt prices", "snippet": "Sweatshirt prices"}]
    country = "china"
    product = "hoodie"
    price = "240"
    prompt = "i am in {country} and i am trying to buy a singular {product} at a street market as an average consumer. The seller is trying to sell for {price} of {country}'s currency which is too high. suggest me fair prices from low medium to high of {country} and also provide some negotiation tips. produce a json with keys prices and negogiation suggestions"
    prompt = prompt.format(country=country, product=product, price=price)
    # prompt = "我在中国深圳，想在街头市场买一件连帽衫，但卖家想以 240 元人民币的价格出售，这个价格太高了。 向我推荐一些中国的公平价格，并提供一些谈判技巧. produce a json with keys price and negogiation suggestions"
    
    # documents = [{"title": "Topic", "snippet": "spotted orange dogs from toronto bark at 12am"}]
    # prompt="based on the document what kind of dogs barks at 12am?"

    #get start time
    start = time.time()
    generate = co.chat(
        model="command-nightly",
        message=prompt,	
        temperature=0
        # ,
        # documents=documents
        # ,
        # connectors=[{"id": "web-search"}]  

    )
    #get end time
    end = time.time() - start
    print("Time taken to generate content: ", end)
    return generate.text