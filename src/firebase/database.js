import database from '@react-native-firebase/database';

const db = database();
export const setUser = (key, userData) => {
    console.log('set data called');
    db.ref(`/user/`+key).set(userData).then(()=>console.log('Data set'))
}

export const updateUser = (key, userData) => {
    db.ref('/user/'+key).update(userData);
}

export const getLoanData = async (setLoanData) => {
    const snapshot = await db.ref('/loan').once('value');
    console.log(snapshot.val());
    setLoanData(snapshot.val());
}