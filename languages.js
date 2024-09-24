const translations = {
    es: {
        title: "Gymkhana QR",
        inicio: [
            {
                title: "Página de inicio",
                subtitle: "De momento pongo aquí enlaces directos a las pruebas para que se puedan ir probando",
                instructions: "posteriormente pondremos normas y toda información pertitente a la actividad. Cosas a tener en cuenta:",
                i1: "Se puede cambiar el idioma en todas las pruebas",
                i2: "Se debe responder a las pruebas en el idioma escogido (aunque aún faltan traducciones, es posible que falle)",
                i3: "En las pruebas de subir foto, si todo va bien, se redirige al paso entre pruebas correspondiente. Si no, aparecerá un mensaje de error. En ese caso tienen que volver a escanear la prueba e intentarlo de nuevo",
                i4: "Importante probar las pruebas en distintos móviles (sobre todo en iphone)",
                i5: "Si la página pide algún permiso dárselo (probablemente pida permiso de cámara)"
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
        inicio: [
            {
                title: "Home Page",
                subtitle: "For now, I will place direct links to the challenges here so they can be tested.",
                instructions: "Later, we will add rules and all relevant information about the activity. Things to keep in mind:",
                i1: "The language can be changed in all challenges.",
                i2: "You must answer the challenges in the chosen language (although some translations are still missing, it might fail).",
                i3: "In the photo upload challenges, if everything goes well, you will be redirected to the corresponding next step. If not, an error message will appear. In that case, you need to rescan the QR and try again.",
                i4: "It's important to test the challenges on different phones (especially on iPhone).",
                i5: "If the page requests any permissions, grant them (it will likely ask for camera permission)."
            }
        ],
        pruebas: [
            {
                prueba: "TOURISM OFFICE",
                pregunta: "WHY IS IT CALLED THE TOWN OF THREE LIES?"
            },
            {
                prueba: "TORTURE MUSEUM",
                pregunta: "Welcome to this grim place.",
                pregunta1: "To continue, you must take a picture simulating something represented inside the museum."
            },
            {
                prueba: "HOUSE OF THE SHIELD",
                pregunta: "WHAT IS THE NAME OF THIS BUILDING AND WHY?"
            },
            {
                prueba: "WASHING PLACE",
                pregunta: "Record a video of your group acting out a typical scene that you think would have taken place at this washing place in the past."
            },
            {
                prueba: "QUEVEDO'S HOUSE",
                pregunta: "FIND OUT WHAT HAPPENS IF YOU DON’T HAVE A GLASS OF MILK WITH CAKE."
            },
            {
                prueba: "JESÚS OTERO MUSEUM",
                pregunta: "WHO DO THE SEVEN FACES CARVED IN STONE REPRESENT?"
            },
            {
                prueba: "COLLEGIATE CHURCH",
                pregunta: "THE RELICS OF WHICH SAINT ARE KEPT INSIDE?"
            },
            {
                prueba: "MAIN SQUARE",
                pregunta: "WHICH FOUR FLAGS FLY ON THE TOWN HALL?"
            },
            {
                prueba: "HOUSE OF THE EAGLE AND THE VINE",
                pregunta: "TAKE A FUN PHOTO WITH THE BISON."
            },
            {
                prueba: "TOURISM OFFICE",
                pregunta: "WITH WHICH TWO EUROPEAN CITIES IS SANTILLANA TWINNED?"
            }
        ],
        correcto: [
            {
                title: "Correct!",
                message: "You answered correctly. Santillana del Mar is called the 'Town of Three Lies' because it's neither holy, nor flat, nor by the sea.",
                nextStep: "To proceed to the next challenge, follow the map instructions."
            },
            {
                title: "Correct!",
                message: "To find the next QR code:",
                nextStep: "Look for this shield."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "Where the residents of Santillana del Mar used to bring their livestock to drink."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In the place where this picture was taken."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In a building whose garden houses stone sculptures carved by a famous local resident."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "In the most famous building of Santillana del Mar, where a saint is worshipped."
            },
            {
                title: "Correct!",
                message: "The next QR code is located at the following coordinates:",
                nextStep: "43.39083689040272, -4.108305988603658"
            },
            {
                title: "Correct!",
                message: "To find the next QR code:",
                nextStep: "Have your group face the town hall and to your left, look for a building with a sculpture of Jesús Otero outside."
            },
            {
                title: "Correct!",
                message: "The next QR code is located:",
                nextStep: "At the starting point."
            },
            {
                title: "Correct!",
                message: "You've completed all the challenges!",
                nextStep: "We hope you had a great time."
            }
        ],
        tryAgain: "Incorrect answer, try again."
    },
    fr: {
        title: "Gymkhana QR",
        inicio: [
            {
                title: "Page d'accueil",
                subtitle: "Pour l'instant, je mets ici des liens directs vers les épreuves pour que vous puissiez les tester.",
                instructions: "Ensuite, nous ajouterons des règles et toutes les informations pertinentes sur l'activité. Points à prendre en compte :",
                i1: "Vous pouvez changer la langue dans toutes les épreuves.",
                i2: "Vous devez répondre aux épreuves dans la langue choisie (bien que certaines traductions manquent encore, il se peut que cela ne fonctionne pas).",
                i3: "Dans les épreuves où il faut télécharger une photo, si tout se passe bien, vous serez redirigé vers l'étape suivante. Sinon, un message d'erreur apparaîtra. Dans ce cas, vous devez scanner à nouveau l'épreuve et réessayer.",
                i4: "Il est important de tester les épreuves sur différents téléphones (surtout sur iPhone).",
                i5: "Si la page demande des permissions, accordez-les (elle demandera probablement l'accès à la caméra)."
            }
        ],
        pruebas: [
            {
                prueba: "OFFICE DU TOURISME",
                pregunta: "POURQUOI L'APPELLE-T-ON LA VILLE AUX TROIS MENSONGES ?"
            },
            {
                prueba: "MUSÉE DE LA TORTURE",
                pregunta: "Bienvenue dans ce lieu sinistre.",
                pregunta1: "Pour continuer, vous devez prendre une photo en simulant une scène représentée dans le musée."
            },
            {
                prueba: "MAISON DU BOUCLIER",
                pregunta: "QUEL EST LE NOM DE CE BÂTIMENT ET POURQUOI ?"
            },
            {
                prueba: "LAVOIR",
                pregunta: "Enregistrez une vidéo de votre groupe représentant une scène typique qui, selon vous, se déroulait autrefois à ce lavoir."
            },
            {
                prueba: "MAISON QUEVEDO",
                pregunta: "DÉCOUVREZ CE QUI SE PASSE SI VOUS NE PRENEZ PAS UN VERRE DE LAIT AVEC UN GÂTEAU."
            },
            {
                prueba: "MUSÉE JESÚS OTERO",
                pregunta: "QUI REPRÉSENTENT LES SEPT VISAGES SCULPTÉS DANS LA PIERRE ?"
            },
            {
                prueba: "COLLÉGIALE",
                pregunta: "LES RELIQUES DE QUELLE SAINTE SE TROUVENT À L'INTÉRIEUR ?"
            },
            {
                prueba: "PLACE PRINCIPALE",
                pregunta: "QUELS SONT LES QUATRE DRAPEAUX QUI FLOTTENT SUR LA MAIRIE ?"
            },
            {
                prueba: "MAISON DE L'AIGLE ET DE LA VIGNE",
                pregunta: "PRENEZ UNE PHOTO AMUSANTE AVEC LE BISON."
            },
            {
                prueba: "OFFICE DU TOURISME",
                pregunta: "AVEC QUELLES DEUX VILLES EUROPÉENNES SANTILLANA EST-ELLE JUMELÉE ?"
            }
        ],
        correcto: [
            {
                title: "Correct!",
                message: "Vous avez répondu correctement. Santillana del Mar est appelée la 'Ville aux Trois Mensonges' car elle n'est ni sainte, ni plate, ni près de la mer.",
                nextStep: "Pour passer à l'épreuve suivante, suivez les indications sur la carte."
            },
            {
                title: "Correct!",
                message: "Pour trouver le prochain QR code :",
                nextStep: "Cherchez ce bouclier."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve :",
                nextStep: "À l'endroit où les habitants de Santillana del Mar amenaient leur bétail pour boire."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve :",
                nextStep: "À l'endroit où cette photo a été prise."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve :",
                nextStep: "Dans un bâtiment dont le jardin abrite des sculptures en pierre réalisées par un habitant illustre de la ville."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve :",
                nextStep: "Dans le bâtiment le plus célèbre de Santillana del Mar, où une sainte est vénérée."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve aux coordonnées suivantes :",
                nextStep: "43.39083689040272, -4.108305988603658"
            },
            {
                title: "Correct!",
                message: "Pour trouver le prochain QR code :",
                nextStep: "Mettez votre groupe face à la mairie et à votre gauche, cherchez un bâtiment dont l'extérieur présente une sculpture de Jesús Otero."
            },
            {
                title: "Correct!",
                message: "Le prochain QR code se trouve :",
                nextStep: "Au point de départ."
            },
            {
                title: "Correct!",
                message: "Vous avez terminé toutes les épreuves!",
                nextStep: "Nous espérons que vous vous êtes bien amusés."
            }
        ],
        tryAgain: "Réponse incorrecte, réessayez."
    }
};
