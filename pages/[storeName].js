import React, { useEffect } from 'react'

import { useRouter } from 'next/router'
// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';


import { onSnapshot, collection, orderBy, query, where } from "firebase/firestore";
import { db } from '../firebase/clientApp';

const Store = () => {

  useEffect(() => {

  }, [])

  const router = useRouter()
  const { storeName } = router.query

  // const [stores, votesLoading, votesError] = useCollection(
  //   firebase.firestore().collection("stores"),
  //   {}
  // );

  // if (!votesLoading && votes) {
  //   votes.docs.map((doc) => console.log(doc.data()));
  // }

  useEffect(() => {
    const collectionRef = collection(db, "stores")
    const q = query(collectionRef, where('test', '==', '123s4'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const stores = querySnapshot.docs.map(
        doc => ({ ...doc.data() }))

      console.log(stores)
    });
    return unsubscribe;


  }, [])


  return <p>Tiend: {storeName}</p>
}

export default Store