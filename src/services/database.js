import database from '@react-native-firebase/database';

const db = database();
export const setUser = (key, userData) => {
    db.ref(`/user/`+key).set(userData).then(()=>console.log('Data set'))
}

export const updateUser = (key, userData) => {
    db.ref('/user/'+key).update(userData);
}

export const getLoanData = async (setLoanData) => {
    const snapshot = await db.ref('/loan').once('value');
    setLoanData(snapshot.val());
}

export const getFundsData = async (setDATA) => {
    const snapshot = await db.ref('/funds').once('value');
    setDATA(snapshot.val());
}