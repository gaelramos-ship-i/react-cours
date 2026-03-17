# React Hook & Gestion des formulaires 

## Qu'est ce qu'un Hook ?
- **Les problèmes avant les hooks :** Les composants de classe étaient lourds, le cycle de vie (componentDidMount, etc.) était complexe, et la logique était difficile à partager.
- **La solution :** Les hooks (apparaus avec React 16.8) sont des fonctions spéciales qui permettent de "s'accocher" (to hook into) aux fonctionnalités de React (état, cycle de vie) depuis des composants fonctionnels.
- **Règles d'or :**
    - Toujours appeler au niveau supérieur (pas dans des boucles ou des conditions) 
    - Uniquement dans des composants fonctions React (ou d'autres hooks personnalisés)

## Gérer l'état local avec `useState`
- **Concept :** Permet d'ajouter une mémoire (un état local) à un composant fonctionnel. La fonction `useState` renvoie toujours un tableaux de deux éléments : la valeur actuelle et la fonction pour la modifier.
- **Intérêt de l'utilisation :** C'est le coeur de l'interactivité en React. Sans état, une application est purement statique. Chaque fois que la fonction de mise à jour est appelée, React est prévenu qu'une données à changé et déclenche automatiquement un nouveau rendu (re-render) du composant pour mettre à jour l'interface visuelle.

## Gérer les effets de bord avec `useEffect`
- **Concept :** Permet d'exécuter du code "en dehors" du rendu pur de React (ex: Appels API, abonnements, manipulation manuelle du DOM)
- **Qu'est ce qu'un "effet de bord" ? :** En programmation, un composant React idéal est une "fonction pure" : il reçoit des données (propos/state) et renvoie du JSX, sans rien modifier d'autre. Un **Effet de bord** est tout ce qui sort de ce cadre et interagit avec le "monde extérieur" : 
    - Récupéer des données sur un serveur (Appel API)
    - Modifier manuellement le titre de l'onglet (document.title)
    - Configurer un intervalle ou un timer (`setInterval`, `setTimeout`)
    - S'abonner à un service externe (Websockets, Firebase)
- **Le tableau de dépendances :**
    - `[]` : S'exécute uniquement un montage
    - `[variable1, variable2]` : S'exécute au montage ET quand les variables changent
    - *Rien* : S'exécute à chaque rendu (à éviter en général)

## Optimisation avec `useMemo`
- **Concept :** La "Mémoïsation" sert à mettre en cache le résultat d'un calcul coûteux pour éviter de le refaire à chaque rendu du composant.
- **Analogie :** "Si je te demande combien font 345 x 897, tu vas calculer. Si je te redemande 2secondes plus tard, tu vas me donner la réponse de mémoire sans recalculer, sauf si je change les nombres."
- **Un exemple :** Créer une fonction de filtrage sur une liste de 10 000 éléments 

## Fluidité de l'UI avec `useTransition`
- **Concept (React <=18) :** Permet de marquer certaines mise à jour d'état comme "non urgentes" (transitions). On garde l'interface reactive (comme un champ de texte) même si un rendu lourd se prépare een arrière-plan
- **Intérêt de l'utilisateur :** Le but principal est d'améliorer considérablement l'experience utilisateur (UX) en évitant les blocages ou les saccades (Les fameux "freezes"). Au lieu de paralyser l'écran pendant le calcul d'un filtre complexe ou le rendu d'une énorme liste, l'utilisateur peut continuer à interagir de manière fluide (par exmeple, continuer à taper au clavier). L'état `isPending` fourni par le hook est également parfait pour afficher un petit indicateur de chargement, montrant que l'application travaille en tâche de fond.

## Gestion des formulaires avec `Formik` et `Yup`
- **Le problème :** Gérer les formulaires natifs en React demande beaucoup de code (gestion de chaque champ, des erreurs, de la soumission).
- **La solution Formik :** Gère l'état du formulaire, les événements de changement et la soumission de manière déclarative.
- **La solution Yup :** Bibliothèque de validation de schéma

### Installation
- **Formik :** `npm install formik --save`
- **Yup :** `npm install yup --save`

## Gestion d'état global avec Zustand 
- **Concept :** Zustand est une biblihotèque de gestion d'état (state management). Elle permet de créer un store global accesible partout dans l'application sans utiliser de `Context Provider` 
- **Intérêt de l'utilisation :**
    1. **Zéro boilerplate :** Contrairement à Redux, il n'y a pas besoin d'Actions, de Reducers ou de Types complexes. 
    2. **Performance :** Les composants ne se re-rendent qui si la patie précise de l'état qu'ils utilisent change (sélecteurs).
    3. **Simplicité :** C'est une simple fonction `create` qui renvoie un Hook