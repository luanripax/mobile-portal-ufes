import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, query, where, getFirestore,getDocs, onSnapshot, doc} from "firebase/firestore";
import JWT from 'expo-jwt';
import { Platform } from 'react-native';
interface DeparmentProps {
  deparment: string;
  id: number;
  subjectList: SubjectProps[];
}

interface SubjectProps {
  absences: number;
  average: number;
  id: number;
  max_absence: number;
  name: string;
}

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

export async function schedulePushNotification(title: string, message: string) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body: message
      },
      trigger: { seconds: 1 },
    });
}

export async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    return token;
  }

  export async function watchRiskNotification() {
    const username = await getStoredUser();
    if(username) {
      const db = getFirestore();
      const usersRef = collection(db, "subjects");
      const q = query(usersRef, where("username", "==", username));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "modified") {
              const data = change.doc.data().subjects;
              data.forEach((deparment: DeparmentProps) => 
                deparment.subjectList.forEach((subject: SubjectProps) => {
                  if(subject.absences/subject.max_absence > 0.75) {
                    schedulePushNotification('Risco de reprovação por falta',
                    `Você possui mais de 75% de faltas na disciplina ` + subject.name);
                  }
                }
                )  
              );
          }
        });
      });
    }
  }

  export async function getStoredUser() {
    try {
      const storedToken = await AsyncStorage.getItem('@storage_token');
      if(!storedToken)
        return '';

      const token = JWT.decode(storedToken, 'secret-mobile-ufes');
      if (token.user)
        return token.user;

      return '';
      
    } catch(err) {

    }
  }