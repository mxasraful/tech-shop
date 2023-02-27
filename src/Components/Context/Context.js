import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import firebaseConfig from '../../firebase.config';


const app = initializeApp(firebaseConfig);

const MainContext = createContext();
export const ContextProvider = (props) => {
    const [fullLoading, setFullLoading] = useState(true)
    const [itemsLoading, setItemsLoading] = useState(true)
    const [homeFitemsLoading, setHomeFItemsLoading] = useState(true)
    const [items, setItems] = useState(null)
    const [homeFItems, setHomeFItems] = useState(null)
    const [itemsGetError, setItemsGetError] = useState(false)
    const [homeFItemsError, setHomeFItemsError] = useState(false)
    const [searchResult, serSearchRsult] = useState(null)

    const auth = AllAuth()

    // Get Items From Database
    useEffect(() => {
        setItemsLoading(true)
        const dbRef = ref(getDatabase());
        get(child(dbRef, `items/`)).then((snapshot) => {
            if (snapshot.exists()) {
                setItems(snapshot.val());
                setItemsGetError(false);
                setItemsLoading(false)
            } else {
                setItemsGetError(true);
                setItems(null);
                setItemsLoading(false)
            }
        }).catch((error) => {
            setItemsGetError(true);
            setItems(null);
            setItemsLoading(false)
        });
    }, [])

    useEffect(() => {
        setItemsLoading(true)
        const dbRef = ref(getDatabase());
        get(child(dbRef, `homefproducts/`)).then((snapshot) => {
            if (snapshot.exists()) {
                setHomeFItems(snapshot.val());
                setHomeFItemsError(false);
                setHomeFItemsLoading(false)
            } else {
                setHomeFItemsError(true);
                setHomeFItems(null);
                setHomeFItemsLoading(false)
            }
        }).catch((error) => {
            setHomeFItemsError(true);
            setHomeFItems(null);
            setHomeFItemsLoading(false)
        });
    }, [])



    console.log(homeFItems)


    return <MainContext.Provider value={{ auth, itemsLoading, items, homeFItemsError, homeFitemsLoading, homeFItems, itemsGetError, fullLoading, searchResult }}>{props.children}</MainContext.Provider>
}

export const useMainContext = () => useContext(MainContext)

const auth = getAuth(app);

const AllAuth = () => {

    const [user, setUser] = useState(null)

    const googleSignin = () => {
        const provider = new GoogleAuthProvider()

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser({
                    name: result.user.displayName ? result.user.displayName : null,
                    email: result.user.email,
                    photo: result.user.photoURL ? result.user.photoURL : null,
                    userToken: result.user.accessToken,
                })
                console.log(result)
            }).catch((error) => {

            });
    }

    console.log(user)


    return {
        user,
        googleSignin
    };
}


export default AllAuth;