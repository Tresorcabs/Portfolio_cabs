import os

nom_projet = input("Le nom su projet")
superUser = os.system(f"npm create vite@latest {nom_projet}")

print(superUser);