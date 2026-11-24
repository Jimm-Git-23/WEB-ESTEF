# Nuestra Historia — Instrucciones para Jimmy

Esta carpeta es una página web lista para publicar. No necesita ninguna cuenta de Claude: solo una cuenta de Firebase (gratis), una cuenta de GitHub (gratis) y una cuenta de Netlify (gratis), las tres a tu nombre. Netlify quedará conectado a tu repositorio de GitHub, así que cualquier cambio futuro que hagas en GitHub se publica solo, sin que tengas que subir nada manualmente de nuevo.

## Archivos de esta carpeta

- `index.html` — la página completa (la historia, la pregunta, el contador, el álbum).
- `config.js` — nombres, textos y la fecha fija del contador (22 nov 2026, 10:45 p.m.).
- `firebase-config.js` — **aquí debes pegar tus propios datos de Firebase** (paso 2 abajo). Mientras no lo hagas, la página se ve y se recorre igual, pero el álbum de fotos y las dos fotos individuales (portada y foto final) no se guardarán.
- `card.html` — la tarjeta imprimible con el código QR. **No la subas a Netlify**: es solo para imprimir en tu computadora una vez que la página esté publicada (el QR se actualizará al final, cuando tengas la URL definitiva).

---

## Paso 1 — Crear el proyecto de Firebase

(Si ya lo hiciste con la guía anterior, pasa directo al paso 2.)

1. Entra a https://console.firebase.google.com con tu cuenta de Google.
2. "Agregar proyecto" → ponle un nombre (ej. `nuestra-historia`) → puedes desactivar Google Analytics, no hace falta.
3. Dentro del proyecto, ve a **Compilación → Firestore Database** → "Crear base de datos" → modo producción → elige una ubicación (cualquiera cercana, ej. `us-central` o `southamerica-east1`) → Habilitar.
4. Ve a **Compilación → Storage** → "Comenzar" → acepta las reglas por defecto → elige la misma ubicación → Listo.
5. Ve a **⚙️ Configuración del proyecto** (el engranaje, arriba a la izquierda) → pestaña "Tus apps" → ícono `</>` (Web) → ponle un apodo → "Registrar app". Firebase te mostrará un bloque `firebaseConfig = {...}`.
6. Copia esos valores (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId) y reemplázalos en el archivo `firebase-config.js` de esta carpeta.

## Paso 2 — Pegar las reglas de seguridad

Importante: sin esto, Firebase bloqueará todo por defecto y el álbum no funcionará. Como la página no tiene inicio de sesión (se accede por un enlace privado), las reglas permiten leer y escribir directamente, sin pedir cuenta.

### Reglas de Firestore
En la consola de Firebase → **Firestore Database → Reglas** → borra lo que haya y pega esto → **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /config/{docId} {
      allow read: if true;
      allow write: if true;
    }

    match /memories/{photoId} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasAll(['url', 'createdAt'])
                    && request.resource.data.url is string;
      allow update: if false;
      allow delete: if true;
    }

    match /notas/{notaId} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll(['texto']);
      allow update, delete: if false;
    }
  }
}
```

### Reglas de Storage
En la consola de Firebase → **Storage → Reglas** → borra lo que haya y pega esto → **Publicar**:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    match /portada/{fileName} {
      allow read: if true;
      allow create: if request.resource.size < 15 * 1024 * 1024
                     && request.resource.contentType.matches('image/.*');
      allow delete: if true;
    }

    match /fotoFinal/{fileName} {
      allow read: if true;
      allow create: if request.resource.size < 15 * 1024 * 1024
                     && request.resource.contentType.matches('image/.*');
      allow delete: if true;
    }

    match /memories/{fileName} {
      allow read: if true;
      allow create: if request.resource.size < 15 * 1024 * 1024
                     && request.resource.contentType.matches('image/.*');
      allow delete: if true;
    }
  }
}
```

**Nota sobre privacidad:** estas reglas dejan la lectura y escritura abiertas a cualquiera que tenga la URL (no hay login). Es la forma más simple de que funcione con "solo un enlace privado". El único resguardo real es que la URL no se publica ni se comparte con nadie más que Estefany.

## Paso 3 — Subir el proyecto a GitHub (con tu cuenta)

No necesitas saber usar Git ni la terminal: se puede hacer todo desde la página web de GitHub.

1. Entra a https://github.com y crea una cuenta gratis (con tu correo), si no tienes una.
2. Arriba a la derecha, el botón **"+" → "New repository"**.
3. Ponle un nombre, ej. `nuestra-historia` → puedes dejarlo como **Private** (recomendado, para que nadie más lo vea) o Public, como prefieras → NO marques "Add a README" → **"Create repository"**.
4. En la página del repositorio recién creado, haz clic en **"uploading an existing file"** (o **"Add file" → "Upload files"**).
5. Arrastra ahí **solo estos 3 archivos**: `index.html`, `config.js` y `firebase-config.js` (este último ya con tus datos reales de Firebase pegados, del Paso 1). No subas `card.html` ni este archivo de instrucciones.
6. Abajo, en "Commit changes", deja todo como está y presiona **"Commit changes"**.

Más adelante, si necesitas corregir algo (por ejemplo, actualizar `firebase-config.js`), puedes editar el archivo directamente en GitHub: ábrelo, toca el ícono del lápiz ✏️, cambia lo que necesites y "Commit changes" otra vez. Netlify lo volverá a publicar solo, automáticamente.

## Paso 4 — Conectar Netlify a ese repositorio

1. Entra a https://netlify.com y crea una cuenta gratis — lo más simple es elegir **"Sign up with GitHub"**, así quedan conectados de una vez con la misma cuenta.
2. En tu panel, botón **"Add new site" → "Import an existing project"**.
3. Elige **"Deploy with GitHub"** → autoriza a Netlify a acceder a tu cuenta de GitHub (puedes limitarlo solo al repositorio `nuestra-historia` si te lo ofrece) → selecciona ese repositorio en la lista.
4. En la pantalla de configuración de build, **déjalo todo en blanco/por defecto** (no hay comando de build ni carpeta especial: el sitio son archivos sueltos) → **"Deploy site"**.
5. En un par de minutos Netlify te dará una URL como `https://nombre-al-azar-123.netlify.app`.
6. (Opcional) En **Site settings → Change site name**, puedes ponerle un nombre más bonito, ej. `nuestra-historia-jimmy.netlify.app`.
7. Abre esa URL tú mismo primero y recorre toda la página para comprobar que todo carga bien y que puedes subir una foto de prueba al álbum (puedes borrarla después desde la misma página).

## Paso 5 — Compartir con Estefany

Envíale el enlace de Netlify directamente (por WhatsApp, mensaje, o como prefieras) — no hace falta invitarla a nada ni que inicie sesión en ningún lado, solo abrir el enlace.

## Paso 6 — La tarjeta con QR

Una vez que tengas la URL final de Netlify, compártela (a través de Mariel o como corresponda) para regenerar el código QR de `card.html` apuntando a esa URL exacta, y así tener la tarjeta lista para imprimir en A6.

---

Cualquier error que aparezca al subir una foto, revisa primero que `firebase-config.js` tenga tus datos reales (no los de ejemplo) y que hayas publicado las dos reglas de arriba.
