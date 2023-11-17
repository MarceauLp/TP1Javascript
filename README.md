# TP1Javascript

![image](https://github.com/MarceauLp/TP1Javascript/assets/101061034/6a61a0ba-9897-4bce-a230-4041a8bf5365)


**Compte-rendu sur l'utilisation du paradigme événementiel :**

1. **Ajout de tâches (addTask) :**
   - Lorsque la fonction `addTask` est appelée, elle récupère l'élément input et le bouton correspondant du DOM.
   - Deux événements sont gérés ici :
     - **Clic sur le bouton "Supprimer" :** Un écouteur d'événement est attaché à chaque bouton "Supprimer", de sorte que lorsque l'utilisateur clique sur ce bouton, la fonction `taskList.removeChild(li)` est appelée, supprimant ainsi l'élément li parent de ce bouton.
     - **Clic sur le bouton "Editer" :** Un écouteur d'événement est également attaché à chaque bouton "Editer", appelant la fonction `editTask(li)` lors du clic.

2. **Ajout d'une tâche en appuyant sur la touche "Entrée" :**
   - Un événement de type "keydown" est écouté sur l'élément avec l'ID 'taskInput'. Si la touche pressée est "Enter", la fonction `addTask` est appelée.

3. **Suppression de toutes les tâches (clearList) :**
   - La fonction `clearList` est appelée lorsqu'un événement spécifique (non précisé dans le code fourni) se produit. Elle supprime simplement tous les éléments enfants de l'élément avec l'ID 'taskList'.

4. **Sauvegarde dans le localStorage (saveList) :**
   - Lorsque la fonction `saveList` est appelée (l'événement déclencheur n'est pas spécifié), elle parcourt la liste des tâches, extrait leur texte et les stocke dans le localStorage sous forme d'un tableau de chaînes JSON.

5. **Chargement de la liste au chargement de la page (loadList) :**
   - Lorsque l'événement 'DOMContentLoaded' est déclenché, la fonction `loadList` est appelée. Elle récupère les tâches du localStorage, crée des éléments li correspondants et les ajoute à l'élément avec l'ID 'taskList'.

6. **Mise à jour du nombre de tâches (updateTaskCount) :**
   - La fonction `updateTaskCount` est appelée à chaque ajout ou suppression de tâche, mettant à jour le texte d'un élément avec l'ID 'taskCount' pour refléter le nombre actuel de tâches.

7. **Chargement de la liste au chargement de la page (DOMContentLoaded) :**
   - Un événement 'DOMContentLoaded' est écouté sur l'objet document, déclenchant l'exécution des fonctions `loadList` et `addDeleteButtonStyle` au chargement de la page.

8. **Ajout de style aux boutons de suppression et d'édition (addDeleteButtonStyle) :**
   - La fonction `addDeleteButtonStyle` est appelée pour ajouter des classes de style 'btn-danger' et 'btn-warning' aux boutons "Supprimer" et "Editer" respectivement.

9. **Suppression d'une tâche (deleteTask) :**
   - La fonction `deleteTask` ajoute un événement de clic à chaque élément li représentant une tâche, supprimant l'élément li correspondant lorsqu'il est cliqué.

10. **Édition d'une tâche (editTask) :**
    - Lorsque la fonction `editTask` est appelée, elle ouvre une boîte de dialogue demandant à l'utilisateur d'entrer un nouveau nom pour la tâche. Si un nouveau nom est fourni, la tâche est mise à jour avec la nouvelle valeur.

En conclusion, mon code utilise le paradigme événementiel car les événements sont utilisés pour déclencher des actions en réponse aux actions de l'utilisateur, créant ainsi une application web interactive.
