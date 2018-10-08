import Firebase from 'firebase/app'
import 'firebase/database'

Firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com',
})

const ref = Firebase.database().ref('/v0')

export const fetch = (path) => new Promise((resolve, reject) => {
  ref.child(path).once('value', snapshot => resolve(snapshot.val()), reject)
})

export const fetchItem = (id) => fetch(`item/${id}`)

export const fetchItems = (ids) => Promise.all(ids.map(fetchItem))

export const fetchFeed = (type) => fetch(`${type}stories`)
