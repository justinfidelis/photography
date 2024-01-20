from os import listdir
from os.path import join
import json
from PIL import Image, ImageOps

metadata_path = "src\\metadata.json"
image_folder_path = ".\\images\\"
public_image_folder = ".\\public\\images\\"

default_resolution = 1280

with open(metadata_path, "r") as f:
    metadata = json.load(f)

for category in metadata.values():
    images = listdir(join(image_folder_path, category["path"]))
    for image in images:
        if image not in category["images"].keys():
            category["images"][image] = {
                "location": "",
                "caption": ""
            }

        source_path = join(image_folder_path, category["path"], image)
        dest_path = join(public_image_folder, category["path"], image)

        with Image.open(source_path) as im:
            ImageOps.exif_transpose(im, in_place=True)

            w, h = im.size
            if w > h:
                h = int(h / (w / 1280))
                w = 1280
            else: 
                w = int(w / (h / 1280))
                h = 1280
            
            im = im.resize((w, h))

            im.save(dest_path)
            print(f"{category['path']}/{image} resized to ({w}, {h}) and saved to {public_image_folder}")

s = json.dumps(metadata, indent=2)

with open(metadata_path, "w") as f:
    f.write(s)

print("Metadata file updated.")