from os import listdir
from os.path import join
import json

with open("images/index.json", "r") as f:
    metadata = json.load(f)

image_path = "./images/"

for category in metadata:
    temp_path = join(image_path, category.)



images = listdir(path)

print(images)


