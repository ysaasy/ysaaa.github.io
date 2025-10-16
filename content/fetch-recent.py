import json
import os
from storygraph_api import User
from dotenv import load_dotenv

load_dotenv()

USERNAME = os.getenv('STORYGRAPH_USERNAME')
COOKIE = os.getenv('STORYGRAPH_COOKIE')

user = User()
books_json = user.books_read(USERNAME, cookie=COOKIE)
books = json.loads(books_json)  # Convert string to list
books = books[:5]

with open('storygraph-recent.json', 'w') as f:
    json.dump(books, f, indent=2)

print("✓ Saved to storygraph-recent.json")