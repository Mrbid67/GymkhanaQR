const translations = {
    es: {
        title: "Gymkhana QR",
        inicio: [
            {
                title: "Página de inicio",
                subtitle: "De momento pongo aquí enlaces directos a las pruebas para que se puedan ir probando",
                instructions: "posteriormente pondremos normas y toda información pertitente a la actividad. Cosas a tener en cuenta:",
                i1:"Se puede cambiar el idioma en todas las pruebas",
                i2:"Se debe responder a las pruebas en el idioma escogido (aunque aún faltan traducciones, es posible que falle)",
                i3:"En las pruebas de subir foto, si todo va bien, se redirige al paso entre pruebas correspondiente. Si no, aparecerá un mensaje de error. En ese caso tienen que volver a escanear la prueba e intentarlo de nuevo",
                i4:"Importante probar las pruebas en distintos móviles (sobre todo en iphone)",
                i5:"Si la página pide algún permiso dárselo (probablemente pida permiso de cámara)"
            }
        ],
        pruebas: [
            {
                prueba: "OFICINA DE TURISMO",
                pregunta: "¿POR QUÉ LA LLAMAN LA VILLA DE LAS TRES MENTIRAS?"
            },
            {
                prueba: "MUSEO DE LA TORTURA",
                pregunta: "Bienvenido a este tenebroso lugar.",
                pregunta1: "Para continuar deberás deberás hacerte una foto simulando algo de lo que se representa dentro del museo."
            },
            {
                prueba: "LA CASA DEL ESCUDO",
                pregunta: "¿CÓMO SE LLAMA ESE EDIFICIO Y POR QUÉ?"
            },
            {
                prueba: "LAVADERO",
                pregunta: "Graba un video donde estéis el grupo representando una escena típica, que crees que se desarrollaría antiguamente en este lavadero."
            },
            {
                prueba: "CASA QUEVEDO",
                pregunta: "AVERIGUA QUE PASA SI NO TOMAS UN VASO DE LECHE CON BIZCOCHO"
            },
            {
                prueba: "MUSEO JESÚS OTERO",
                pregunta: "¿A QUIÉN REPRESENTAN LAS SIETE CARAS TALLADAS EN PIEDRA?"
            },
            {
                prueba: "COLEGIATA",
                pregunta: "¿LAS RELIQUIAS DE QUÉ SANTA SE ENCUENTRAN EN SU INTERIOR?"
            },
            {
                prueba: "PLAZA MAYOR",
                pregunta: "¿QUÉ CUATRO BANDERAS ONDEAN EN EL AYUNTAMIENTO?"
            },
            {
                prueba: "CASA DEL AGUILA Y LA PARRA",
                pregunta: "HACERSE FOTO DIVERTIDA CON EL BISONTE."
            },
            {
                prueba: "OFICINA DE TURISMO",
                pregunta: "¿CON QUÉ DOS CIUDADES EUROPEAS ESTÁ HERMANADA SANTILLANA?"
            }
        ],
        correcto: [
            {
                title: "¡Correcto!",
                message: "Has acertado correctamente. Santillana del Mar es llamada la 'Villa de las Tres Mentiras' porque ni es santa, ni es llana, ni tiene mar.",
                nextStep: "Para avanzar a la siguiente prueba, sigue las indicaciones del mapa."
            },
            {
                title: "¡Correcto!",
                message: "Para encontrar el siguiente QR:",
                nextStep: "Buscar este escudo."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra",
                nextStep: "Lugar donde los vecinos de Santillana del Mar traían a beber al ganado."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra:",
                nextStep: "En el lugar donde se tomó está foto."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra:",
                nextStep: "En un edificio en cuyo jardín hallareis esculturas en piedra talladas por un vecino ilustre de la Villa."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra:",
                nextStep: "En el edificio más famoso de Santillana del Mar donde se venera a una Santa."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra en las siguientes coordenadas:",
                nextStep: "43.39083689040272, -4.108305988603658"
            },
            {
                title: "¡Correcto!",
                message: "Para encontrar el siguiente QR:",
                nextStep: "Poner al grupo mirando al ayuntamiento y a vuestra izquierda buscar un edificio en cuyo exterior se encuentra una escultura de Jesús Otero."
            },
            {
                title: "¡Correcto!",
                message: "El siguiente código QR se encuentra:",
                nextStep: "En el lugar de inicio"
            },
            {
                title: "¡Correcto!",
                message: "¡Has terminado todas las pruebas!",
                nextStep: "esperamos que lo hayáis pasado genial."
            }
        ],
        tryAgain: "Respuesta Incorrecta, inténtalo de nuevo"
    },
    en: {
        title: "QR Gymkhana",
        pruebas: [
            {
                prueba: "TOURIST OFFICE",
                pregunta: "WHY IS IT CALLED THE VILLAGE OF THE THREE LIES?"
            },
            {
                prueba: "TORTURE MUSEUM",
                pregunta: "Welcome to this dark place.",
                pregunta1: "To continue, you must take a picture simulating something represented inside the museum."
            },
            {
                prueba: "THE SHIELD HOUSE",
                pregunta: "WHAT IS THIS BUILDING CALLED AND WHY?"
            },
            {
                prueba: "WASHHOUSE",
                pregunta: "Record a video where your group reenacts a typical scene that you think would have taken place in this washhouse."
            },
            {
                prueba: "QUEVEDO HOUSE",
                pregunta: "FIND OUT WHAT HAPPENS IF YOU DON'T DRINK A GLASS OF MILK WITH BISCUIT."
            },
            {
                prueba: "JESÚS OTERO MUSEUM",
                pregunta: "WHO DO THE SEVEN FACES CARVED IN STONE REPRESENT?"
            },
            {
                prueba: "COLLEGIATE CHURCH",
                pregunta: "WHOSE RELICS ARE KEPT INSIDE?"
            },
            {
                prueba: "MAIN SQUARE",
                pregunta: "WHICH FOUR FLAGS FLY AT THE TOWN HALL?"
            },
            {
                prueba: "HOUSE OF THE EAGLE AND THE VINE",
                pregunta: "TAKE A FUN PHOTO WITH THE BISON."
            },
            {
                prueba: "TOURIST OFFICE",
                pregunta: "WHICH TWO EUROPEAN CITIES IS SANTILLANA TWINNED WITH?"
            }
        ],
        correcto: [
            {
                title: "Correct!",
                message: "You answered correctly. Santillana del Mar is called the 'Village of the Three Lies' because it is neither holy (santa), nor flat (llana), nor does it have a sea (mar).",
                nextStep: "To proceed to the next challenge, follow the map instructions."
            },
            {
                title: "Correct!",
                message: "To find the next QR:",
                nextStep: "Look for this shield."
            },
            {
                title: "Correct!",
                message: "The next QR code is located",
                nextStep: "Where the locals of Santillana del Mar used to bring their livestock to drink."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In the place where this photo was taken."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In a building whose garden contains sculptures carved in stone by a famous local."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In the most famous building of Santillana del Mar, where a Saint is venerated."
            },
            {
                title: "Correct!",
                message: "The next QR code is located at the following coordinates:",
                nextStep: "43.39083689040272, -4.108305988603658"
            },
            {
                title: "Correct!",
                message: "To find the next QR:",
                nextStep: "Position the group facing the town hall, and to your left, look for a building with a sculpture by Jesús Otero outside."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "At the starting point."
            },
            {
                title: "Correct!",
                message: "You have completed all the challenges!",
                nextStep: "We hope you had a great time."
            }
        ],
        tryAgain: "Incorrect answer, please try again."
    },
    fr: {
        title: "Gymkhana QR",
        pruebas: [
            {
                prueba: "OFFICE DE TOURISME",
                pregunta: "POURQUOI EST-ELLE APPELÉE LA VILLE AUX TROIS MENSONGES?"
            },
            {
                prueba: "MUSÉE DE LA TORTURE",
                pregunta: "Bienvenue dans ce lieu sinistre.",
                pregunta1: "Pour continuer, vous devez prendre une photo en simulant quelque chose représenté dans le musée."
            },
            {
                prueba: "LA MAISON DU BOUCLIER",
                pregunta: "COMMENT S'APPELLE CE BÂTIMENT ET POURQUOI?"
            },
            {
                prueba: "LAVOIR",
                pregunta: "Enregistrez une vidéo où votre groupe rejoue une scène typique qui, selon vous, se serait déroulée autrefois dans ce lavoir."
            },
            {
                prueba: "MAISON QUEVEDO",
                pregunta: "DÉCOUVREZ CE QUI SE PASSE SI VOUS NE PRENEZ PAS UN VERRE DE LAIT AVEC UN BISCUIT."
            },
            {
                prueba: "MUSÉE JESÚS OTERO",
                pregunta: "QUI REPRÉSENTENT LES SEPT VISAGES SCULPTÉS DANS LA PIERRE?"
            },
            {
                prueba: "COLLÉGIALE",
                pregunta: "LES RELIQUES DE QUELLE SAINTE SE TROUVENT À L'INTÉRIEUR?"
            },
            {
                prueba: "PLACE PRINCIPALE",
                pregunta: "QUELS QUATRE DRAPEAUX FLOTTENT À L'HÔTEL DE VILLE?"
            },
            {
                prueba: "MAISON DE L'AIGLE ET DE LA VIGNE",
                pregunta: "PRENEZ UNE PHOTO AMUSANTE AVEC LE BISON."
            },
            {
                prueba: "OFFICE DE TOURISME",
                pregunta: "AVEC QUELLES DEUX VILLES EUROPÉENNES SANTILLANA EST-ELLE JUMELÉE?"
            }
        ],
        correcto: [
            {
                title: "Correct!",
                message: "Vous avez bien répondu. Santillana del Mar est appelée la 'Ville aux Trois Mensonges' car elle n'est ni sainte (santa), ni plate (llana), ni près de la mer (mar).",
                nextStep: "Pour passer à l'épreuve suivante, suivez les instructions de la carte."
            },
            {
                title: "Correct!",
                message: "Pour trouver le prochain QR:",
                nextStep: "Cherchez ce bouclier."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve",
                nextStep: "Là où les habitants de Santillana del Mar emmenaient leurs animaux pour boire."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve :",
                nextStep: "Là où cette photo a été prise."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve :",
                nextStep: "Dans un bâtiment dont le jardin contient des sculptures en pierre réalisées par un habitant illustre de la ville."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve :",
                nextStep: "Dans le bâtiment le plus célèbre de Santillana del Mar où l'on vénère une Sainte."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve aux coordonnées suivantes :",
                nextStep: "43.39083689040272, -4.108305988603658"
            },
            {
                title: "Correct!",
                message: "Pour trouver le prochain QR :",
                nextStep: "Placez le groupe face à la mairie, et à votre gauche, cherchez un bâtiment avec une sculpture de Jesús Otero à l'extérieur."
            },
            {
                title: "Correct!",
                message: "Le prochain code QR se trouve :",
                nextStep: "Au point de départ."
            },
            {
                title: "Correct!",
                message: "Vous avez terminé toutes les épreuves!",
                nextStep: "Nous espérons que vous avez passé un bon moment."
            }
        ],
        tryAgain: "Réponse incorrecte, veuillez réessayer."
    }
};
