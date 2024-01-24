## fix bugs about conflict merging between two branch 

## my branch xxx-branch are priroritaire on main 
```sh
git checkout main
git merge -X ours xxx-branch

```


l'erreur est du au fait que mon application /app/web n'existe pas du coup je ne peux pas faire un node /server.js 

le repertoire standalone est bien formé donc en soi il n' y a pas de problème , j'ai supprimé les supposé volumes qui causerait le problème du au faite qu'il ne copiera pas les fichiers dans le docjker 

peut etre ce que j'ai pas encore essay" c'est leur truc de tracing root mais on me dit que le module path n'existe je dois essayé ça pour une derniere fois et voir ce qui ce qui se passe 
