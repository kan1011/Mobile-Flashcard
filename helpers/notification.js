import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATIONKEY = "NOTIFICATIONKEY"

export const clearNotification = () => {
    return AsyncStorage.removeItem(NOTIFICATIONKEY).then(() => {
        Notifications.cancelAllScheduledNotificationsAsync()
    })
}

const createNotification = () => {
    return {
        title: "Do Flashcard Exercise",
        body: "Keep working hard! Don't forget to do revision in Flashcard App!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: "high",
            sticky: false,
            vibrate: true
        }
    }
}

export const setNotification = () => {
    AsyncStorage.getItem(NOTIFICATIONKEY).then(JSON.parse).then((data) => {
       if (data===null) {
           Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
               if (status==="granted"){
                   Notifications.cancelAllScheduledNotificationsAsync()

                   let tomorrow = new Date()
                   tomorrow.setDate(tomorrow.getDate() + 1)
                   tomorrow.setHours(20)
                   tomorrow.setMinutes(0)

                   Notifications.scheduleLocalNotificationAsync(
                       createNotification(),
                       {
                           time: tomorrow,
                           repeat: "day"
                       }
                   )

                  AsyncStorage.setItem(NOTIFICATIONKEY, JSON.stringify(true))
               }
           })
       }
    })
}