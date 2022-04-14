
const data = {
    computer: 'desktop-mac',
    math: 'pi'
}

const getSubjectIcon = (tag: string) => {
    return data[tag];
}

export default getSubjectIcon;