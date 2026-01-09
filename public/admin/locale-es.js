// ============================================
// TRADUCCIONES AL ESPAÑOL - Netlify CMS
// Daniel Publicidad
// ============================================
/* global CMS */

const es = {
  auth: {
    login: "Iniciar sesión",
    loggingIn: "Iniciando sesión...",
    loginWithNetlifyIdentity: "Iniciar sesión con Netlify Identity",
    loginWithBitbucket: "Iniciar sesión con Bitbucket",
    loginWithGitHub: "Iniciar sesión con GitHub",
    loginWithGitLab: "Iniciar sesión con GitLab",
    errors: {
      email: "Asegúrate de introducir tu correo electrónico.",
      password: "Por favor introduce tu contraseña.",
      identitySettings:
        "No se puede acceder a la configuración de identidad. Cuando uses git-gateway como backend asegúrate de habilitar el servicio de identidad y Git Gateway.",
    },
  },
  app: {
    header: {
      content: "Contenidos",
      workflow: "Flujo de trabajo",
      media: "Medios",
      quickAdd: "Añadir rápido",
    },
    app: {
      errorHeader: "Error al cargar la configuración del CMS",
      configErrors: "Errores de configuración",
      checkConfigYml: "Revisa tu archivo config.yml.",
      loadingConfig: "Cargando configuración...",
      waitingBackend: "Esperando al backend...",
    },
    notFoundPage: {
      header: "No encontrado",
    },
  },
  collection: {
    sidebar: {
      collections: "Colecciones",
      allCollections: "Todas las colecciones",
      searchAll: "Buscar en todo",
      searchIn: "Buscar en",
    },
    collectionTop: {
      sortBy: "Ordenar por",
      viewAs: "Ver como",
      newButton: "Nuevo %{collectionLabel}",
      ascending: "Ascendente",
      descending: "Descendente",
      searchResults: 'Resultados de búsqueda para "%{searchTerm}"',
      searchResultsInCollection:
        'Resultados de búsqueda para "%{searchTerm}" en %{collection}',
      filterBy: "Filtrar por",
      groupBy: "Agrupar por",
    },
    entries: {
      loadingEntries: "Cargando entradas...",
      cachingEntries: "Almacenando entradas en caché...",
      longerLoading: "Esto puede tardar varios minutos",
      noEntries: "Sin entradas",
    },
    groups: {
      other: "Otro",
      negateLabel: "No %{label}",
    },
    defaultFields: {
      author: {
        label: "Autor",
      },
      updatedOn: {
        label: "Actualizado el",
      },
    },
  },
  editor: {
    editorControl: {
      field: {
        optional: "opcional",
      },
    },
    editorControlPane: {
      widget: {
        required: "El campo %{fieldLabel} es obligatorio.",
        regexPattern: "El campo %{fieldLabel} no coincide con el patrón: %{pattern}.",
        processing: "El campo %{fieldLabel} se está procesando.",
        range: "El campo %{fieldLabel} debe estar entre %{minValue} y %{maxValue}.",
        min: "El campo %{fieldLabel} debe ser al menos %{minValue}.",
        max: "El campo %{fieldLabel} debe ser %{maxValue} o menos.",
        rangeCount:
          "El campo %{fieldLabel} debe tener entre %{minCount} y %{maxCount} elementos.",
        rangeCountExact: "El campo %{fieldLabel} debe tener exactamente %{count} elementos.",
        rangeMin: "El campo %{fieldLabel} debe tener al menos %{minCount} elementos.",
        rangeMax: "El campo %{fieldLabel} debe tener %{maxCount} o menos elementos.",
        invalidPath: "La ruta '%{path}' no es válida",
        pathExists: "La ruta '%{path}' ya existe",
      },
      i18n: {
        writingInLocale: "Escribiendo en %{locale}",
        copyFromLocale: "Copiar desde otro idioma",
        copyFromLocaleConfirm:
          "¿Quieres copiar los datos del idioma %{locale}?\nTodo el contenido existente será sobrescrito.",
      },
    },
    editor: {
      onLeavePage: "¿Estás seguro de que quieres salir de esta página?",
      onUpdatingWithUnsavedChanges:
        "Tienes cambios sin guardar, por favor guárdalos antes de actualizar el estado.",
      onPublishingNotReady: "Por favor, actualiza el estado a 'Listo' antes de publicar.",
      onPublishingWithUnsavedChanges:
        "Tienes cambios sin guardar, por favor guárdalos antes de publicar.",
      onPublishing: "¿Estás seguro de que quieres publicar esta entrada?",
      onUnpublishing: "¿Estás seguro de que quieres despublicar esta entrada?",
      onDeleteWithUnsavedChanges:
        "¿Estás seguro de que quieres eliminar esta entrada publicada, así como los cambios sin guardar de la sesión actual?",
      onDeletePublishedEntry: "¿Estás seguro de que quieres eliminar esta entrada publicada?",
      onDeleteUnpublishedChangesWithUnsavedChanges:
        "Esto eliminará todos los cambios no publicados en esta entrada, así como los cambios sin guardar de la sesión actual. ¿Todavía quieres eliminar?",
      onDeleteUnpublishedChanges:
        "Todos los cambios no publicados en esta entrada serán eliminados. ¿Todavía quieres eliminar?",
      loadingEntry: "Cargando entrada...",
      confirmLoadBackup:
        "Se recuperó una copia de seguridad local para esta entrada, ¿quieres usarla?",
    },
    editorInterface: {
      toggleI18n: "Cambiar i18n",
      togglePreview: "Cambiar vista previa",
      toggleScrollSync: "Sincronizar scroll",
    },
    editorToolbar: {
      publishing: "Publicando...",
      publish: "Publicar",
      published: "Publicado",
      unpublish: "Despublicar",
      duplicate: "Duplicar",
      unpublishing: "Despublicando...",
      publishAndCreateNew: "Publicar y crear nuevo",
      publishAndDuplicate: "Publicar y duplicar",
      deleteUnpublishedChanges: "Eliminar cambios no publicados",
      deleteUnpublishedEntry: "Eliminar entrada no publicada",
      deletePublishedEntry: "Eliminar entrada publicada",
      deleteEntry: "Eliminar entrada",
      saving: "Guardando...",
      save: "Guardar",
      statusInfoTooltipDraft:
        "Estado de la entrada establecido como borrador. Para finalizarla y enviarla a revisión, establece el estado como 'En revisión'",
      statusInfoTooltipInReview:
        "La entrada está siendo revisada, no se requieren más acciones. Sin embargo, aún puedes hacer cambios adicionales mientras está en revisión.",
      deleting: "Eliminando...",
      updating: "Actualizando...",
      status: "Estado: %{status}",
      backCollection: " Escribiendo en la colección %{collectionLabel}",
      unsavedChanges: "Cambios sin guardar",
      changesSaved: "Cambios guardados",
      draft: "Borrador",
      inReview: "En revisión",
      ready: "Listo",
      publishNow: "Publicar ahora",
      deployPreviewPendingButtonLabel: "Comprobar vista previa",
      deployPreviewButtonLabel: "Ver vista previa",
      deployButtonLabel: "Ver en vivo",
    },
    editorWidgets: {
      markdown: {
        bold: "Negrita",
        italic: "Cursiva",
        code: "Código",
        link: "Enlace",
        linkPrompt: "Introduce la URL del enlace",
        headings: "Encabezados",
        quote: "Cita",
        bulletedList: "Lista con viñetas",
        numberedList: "Lista numerada",
        addComponent: "Añadir componente",
        richText: "Texto enriquecido",
        markdown: "Markdown",
      },
      image: {
        choose: "Elige una imagen",
        chooseUrl: "Insertar desde URL",
        replaceUrl: "Reemplazar con URL",
        promptUrl: "Introduce la URL de la imagen",
        chooseDifferent: "Elige una imagen diferente",
        remove: "Eliminar imagen",
      },
      file: {
        choose: "Elige un archivo",
        chooseUrl: "Insertar desde URL",
        replaceUrl: "Reemplazar con URL",
        promptUrl: "Introduce la URL del archivo",
        chooseDifferent: "Elige un archivo diferente",
        remove: "Eliminar archivo",
      },
      unknownControl: {
        noControl: "Sin control para el widget '%{widget}'.",
      },
      unknownPreview: {
        noPreview: "Sin vista previa para el widget '%{widget}'.",
      },
      headingOptions: {
        headingOne: "Encabezado 1",
        headingTwo: "Encabezado 2",
        headingThree: "Encabezado 3",
        headingFour: "Encabezado 4",
        headingFive: "Encabezado 5",
        headingSix: "Encabezado 6",
      },
      datetime: {
        now: "Ahora",
      },
      list: {
        add: "Añadir %{item}",
        addType: "Añadir %{item}",
      },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: {
      draft: "Borrador",
      copy: "Copiar",
      copyUrl: "Copiar URL",
      copyPath: "Copiar ruta",
      copyName: "Copiar nombre",
      copied: "Copiado",
    },
    mediaLibrary: {
      onDelete: "¿Estás seguro de que quieres eliminar el medio seleccionado?",
      fileTooLarge:
        "Archivo demasiado grande.\nConfigurado para no permitir archivos mayores a %{size} kB.",
    },
    mediaLibraryModal: {
      loading: "Cargando...",
      noResults: "Sin resultados.",
      noAssetsFound: "No se encontraron recursos.",
      noImagesFound: "No se encontraron imágenes.",
      private: "Privado ",
      images: "Imágenes",
      mediaAssets: "Recursos multimedia",
      search: "Buscar...",
      uploading: "Subiendo...",
      upload: "Subir",
      download: "Descargar",
      deleting: "Eliminando...",
      deleteSelected: "Eliminar seleccionados",
      chooseSelected: "Elegir seleccionados",
    },
  },
  ui: {
    default: {
      goBackToSite: "Volver al sitio",
    },
    errorBoundary: {
      title: "Error",
      details: "Ha ocurrido un error - por favor ",
      reportIt: "repórtalo.",
      detailsHeading: "Detalles",
      privacyWarning:
        "Al abrir un issue se pre-rellena con el mensaje de error y datos de depuración.\nPor favor verifica que la información es correcta y elimina datos sensibles si existen.",
      recoveredEntry: {
        heading: "Documento recuperado",
        warning: "Por favor copia/pega esto en algún lugar antes de navegar a otro sitio!",
        copyButtonLabel: "Copiar al portapapeles",
      },
    },
    settingsDropdown: {
      logOut: "Cerrar sesión",
    },
    toast: {
      onFailToLoadEntries: "Error al cargar la entrada: %{details}",
      onFailToLoadDeployPreview: "Error al cargar la vista previa: %{details}",
      onFailToPersist: "Error al persistir la entrada: %{details}",
      onFailToDelete: "Error al eliminar la entrada: %{details}",
      onFailToUpdateStatus: "Error al actualizar el estado: %{details}",
      missingRequiredField:
        "Oops, te has saltado un campo obligatorio. Por favor complétalo antes de guardar.",
      entrySaved: "Entrada guardada",
      entryPublished: "Entrada publicada",
      entryUnpublished: "Entrada despublicada",
      onFailToPublishEntry: "Error al publicar: %{details}",
      onFailToUnpublishEntry: "Error al despublicar la entrada: %{details}",
      entryUpdated: "Estado de la entrada actualizado",
      onDeleteUnpublishedChanges: "Cambios no publicados eliminados",
      onFailToAuth: "Error de autenticación: %{details}",
      onLoggedOut: "Has sido desconectado, por favor guarda los cambios e inicia sesión de nuevo",
      onBackendDown: "El servicio backend está experimentando una interrupción. Consulta %{details} para más información",
    },
  },
  workflow: {
    workflow: {
      loading: "Cargando entradas del flujo editorial",
      workflowHeading: "Flujo de trabajo editorial",
      newPost: "Nueva publicación",
      description:
        "%{smart_count} entrada esperando revisión, %{readyCount} lista para publicar. |||| %{smart_count} entradas esperando revisión, %{readyCount} listas para publicar. ",
      dateFormat: "MMMM D",
    },
    workflowCard: {
      lastChange: "%{date} por %{author}",
      lastChangeNoAuthor: "%{date}",
      lastChangeNoDate: "por %{author}",
      deleteChanges: "Eliminar cambios",
      deleteNewEntry: "Eliminar nueva entrada",
      publishChanges: "Publicar cambios",
      publishNewEntry: "Publicar nueva entrada",
    },
    workflowList: {
      onDeleteEntry: "¿Estás seguro de que quieres eliminar esta entrada?",
      onPublishingNotReadyEntry:
        "Solo los elementos con el estado 'Listo' pueden ser publicados. Por favor arrastra la tarjeta a la columna 'Listo' para habilitar la publicación.",
      onPublishEntry: "¿Estás seguro de que quieres publicar esta entrada?",
      draftHeader: "Borradores",
      inReviewHeader: "En revisión",
      readyHeader: "Listo",
      currentEntries: "%{smart_count} entrada |||| %{smart_count} entradas",
    },
  },
};

// Registrar el locale español
if (window.CMS) {
  CMS.registerLocale('es', es);
  console.log('✅ Traducciones al español cargadas');
}
