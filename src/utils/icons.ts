import ClipBoard from '../assets/clipboard.svg';
import Books from '../assets/clipboard.svg';
import Calendar from '../assets/calendar.svg';
import FingerPrint from '../assets/fingerprint.svg';
import Printer from '../assets/printer.svg';
import Subject from '../assets/subjects.svg';

const data = {
    identity: FingerPrint,
    offer: Books,
    report: Printer,
    calendar: Calendar,
    registry: ClipBoard,
    subject: Subject
}

const getIcon = (tag: string) => {
    return data[tag];
}

export default getIcon;