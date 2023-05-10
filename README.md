# Quick-v JavaScript form validation library test with React

## Guide

1.  Tout d'abord, vous devez télécharger la bibliothèque Quickv et l'inclure dans votre projet React. Vous pouvez le faire en important le fichier JavaScript de Quickv dans votre composant principal ou en utilisant une balise `<script>` dans votre fichier `index.html`. Dans notre exemple, nous avons importé le fichier JavaScript de Quickv dans notre composant principal comme suit :

    ```js
    import '/src/libs/Quickv/quickv.js'
    ```

2.  Ensuite, vous devez créer votre formulaire et ajouter des attributs de données à chaque champ de formulaire que vous souhaitez valider. Les attributs de données que vous pouvez ajouter sont `data-qv-rules`, `data-qv-messages`, `data-qv-invalid-class`, `data-qv-valid-class` et `data-qv-feedback`. Par exemple, dans notre formulaire, nous avons les attributs de données suivants :

    ```js
    <input
      type='text'
      id='name'
      name='name'
      placeholder='At least 2 characters, at most 20'
      data-qv-rules='required|minlength:3|maxlength:20'
      data-qv-messages='The name is required | The name should be at least 3 characters | The field size should not exceed 20 characters'
      data-qv-invalid-class='invalid-class'
      data-qv-valid-class='valid-class'
    />
    ```

    - Le premier attribut `data-qv-rules` spécifie les règles de validation pour ce champ de formulaire. Dans cet exemple, nous avons trois règles : `required`, `minlength:3` et `maxlength:20`. Cela signifie que ce champ de formulaire est obligatoire et doit contenir au moins 3 caractères mais pas plus de 20 caractères. La liste des règles de validation disponibles peut être consultée [ici](https://github.com/quick-v/quickv#some-validation-rules-you-can-test).

    - Le deuxième attribut `data-qv-messages` spécifie les messages d'erreur pour chaque règle de validation. Dans cet exemple, nous avons trois messages d'erreur correspondant aux trois règles.

    - Le troisième attribut `data-qv-invalid-class` spécifie la classe CSS à appliquer au champ de formulaire si la validation échoue. Le quatrième attribut `data-qv-valid-class` spécifie la classe CSS à appliquer au champ de formulaire si la validation réussit.

    - Enfin, le quatrième attribut `data-qv-feedback` spécifie l'élément DOM qui affichera le message d'erreur lorsque la validation échoue.

3.  Une fois que vous avez ajouté les attributs de données appropriés à chaque champ de formulaire, vous pouvez créer une instance de la classe `Quickv` et l'initialiser. Dans notre exemple, nous avons créé une instance de la classe Quickv dans notre composant principal avec un tableau de dépendances vide et l'avons initialisée comme suit :

    ```js
    import { useEffect } from 'react'
    import { Form } from './components/Form'
    import '/src/libs/Quickv/quickv.js'

    export const App = () => {
      useEffect(() => {
        const qv = new Quickv('form')
        qv.init()
      }, [])

      return (
        <div>
          <h1>Quickv test with React Components</h1>
          <Form />
        </div>
      )
    }
    ```

    Dans le composant `App`, on utilise le hook `useEffect` pour instancier la bibliothèque Quickv au montage du composant. Ensuite, on rend le composant `Form` qui rend un formulaire utilisant les [éléments de validation](https://github.com/quick-v/quickv#some-validation-rules-you-can-test) fournis par la bibliothèque Quickv.

    Le hook `useEffect` est un hook intégré de React qui permet d'exécuter un effet de bord (par exemple, une requête réseau, une animation ou l'instanciation d'une bibliothèque) lorsque le composant est monté ou mis à jour. Dans ce cas, on utilise `useEffect` pour instancier la bibliothèque Quickv au montage du composant en créant une nouvelle instance de `Quickv` avec le paramètre `form` pour identifier l'élément HTML du formulaire à valider.

> Notez qu'il existe d'autres façons d'instancier la bibliothèque qui sont détaillées dans la [documentation officelle de Quickv](https://github.com/quick-v/quickv#usage)

Live Demo : [Quick-v Test](https://meschack.github.io/quickv-test)

_**Happy coding**_ :sparkles:
