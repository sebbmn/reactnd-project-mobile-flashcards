import React from 'react'
import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}
function createNotification () {
  return {
    title: 'Try a quiz!',
    body: "👋 Don't forget to try a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}
export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(22)
              tomorrow.setMinutes(14)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}