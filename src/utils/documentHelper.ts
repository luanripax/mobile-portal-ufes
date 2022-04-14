const DocNames = {
    identity: 'Identidade_Ufes',
    calendar: 'Calendario_Academico',
    curriculum: 'Curriculo_do_curso'
}

export const getDocumentName = (doc: string) => {
    return `${DocNames[doc]}.pdf`;
}   