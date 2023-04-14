import database from '@react-native-firebase/database';

const db = database();
export const setUser = (key, userData) => {
    console.log('set data called');
    db.ref(`/user/`+key).set(userData).then(()=>console.log('Data set'))
}

export const updateUser = (key, userData) => {
    db.ref('/user/'+key).update(userData);
}

export const getLoanData = () => {
    db.ref('/loan').once('value').then((snapshot)=>console.log(snapshot.val()));
}