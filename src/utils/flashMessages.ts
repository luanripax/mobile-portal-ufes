import { showMessage } from "react-native-flash-message";

const showError = (error: string) => {
    showMessage({message: error, type: 'danger', duration: 3000, icon: 'auto'})
}

const showWarning = (error: string) => {
    showMessage({message: error, type: 'warning', duration: 3000, icon: 'auto'})
}

const showSuccess = (error: string) => {
    showMessage({message: error, type: 'success', duration: 3000, icon: 'auto'})
}

const showInfo = (error: string) => {
    showMessage({message: error, type: 'info', duration: 3000, icon: 'auto'})
}

export { showError, showInfo, showSuccess, showWarning }; 