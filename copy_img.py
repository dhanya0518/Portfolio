import os
import shutil

base = os.path.expanduser('~')
src = os.path.join(base, '.gemini', 'antigravity', 'brain', '77b139ed-0c77-4364-9669-bc5060a39503', 'needlesense_thumbnail_1779112700769.png')
dest = os.path.join(r'c:\Users\dhany\OneDrive\Documents\Portfolio\images', 'needlesense_thumbnail.png')

if os.path.exists(src):
    shutil.copy(src, dest)
    print("Copied successfully.")
else:
    print("Source not found:", src)
