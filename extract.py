import fitz
doc = fitz.open("d:/Projects/Portfolio/Resume/shabana resume.pdf")
text = ""
for page in doc:
    text += page.get_text()

print("Extracted Length:", len(text))
if len(text) > 0:
    print(text)
else:
    print("No text found. Trying to extract images...")
    for i, page in enumerate(doc):
        for img_index, img in enumerate(page.get_images(full=True)):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            with open(f"page{i}_img{img_index}.{image_ext}", "wb") as f:
                f.write(image_bytes)
            print(f"Extracted page{i}_img{img_index}.{image_ext}")
