import ClipBoard from '../assets/clipboard.svg';
import Books from '../assets/clipboard.svg';
import Calendar from '../assets/calendar.svg';
import FingerPrint from '../assets/fingerprint.svg';
import Printer from '../assets/printer.svg';

const data = {
    identity: FingerPrint,
    offer: Books,
    report: Printer,
    calendar: Calendar,
    registry: ClipBoard
}

const getIcon = (tag: string) => {
    return data[tag];
}

export default getIcon;