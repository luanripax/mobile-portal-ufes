const DocNames = {
    identity: 'Identidade_Ufes',
    calendar: 'Calendario_Academico'
}

export const getDocumentName = (doc: string) => {
    return `${DocNames[doc]}.pdf`;
}   