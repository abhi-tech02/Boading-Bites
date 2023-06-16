// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc
} from "firebase/firestore"
// const firebaseConfig = {
//     apiKey: "AIzaSyDm24GWX0vASRaru_4LuzgT6f6sEOYZhPA",
//     authDomain: "boardingbites-67bf3.firebaseapp.com",
//     databaseURL: "https://boarding-bites-default-rtdb.firebaseio.com/houses.json",
//     projectId: "boardingbites-67bf3",
//     storageBucket: "boardingbites-67bf3.appspot.com",
//     messagingSenderId: "527988895122",
//     appId: "1:527988895122:web:89fbacc82564a68a47654b",
//     measurementId: "G-SBBY2Z9YXR"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDWYk2yBsu9FmCrLOOO1O-SQ5ADjbvnjts",
    authDomain: "boarding-bites.firebaseapp.com",
    databaseURL: "https://boarding-bites-default-rtdb.firebaseio.com",
    projectId: "boarding-bites",
    storageBucket: "boarding-bites.appspot.com",
    messagingSenderId: "521141504279",
    appId: "1:521141504279:web:cd04931d48ea4f4fd90f52"
};
//initialize firebase basic services
initializeApp(firebaseConfig);
//init services
const db = getFirestore()
    //collection ref
const colRef = collection(db, 'contactus')
    //realtime collectiondata
    /* getDocs(colRef).then((snapshot) => {
       let contactus=[]
       snapshot.docs.forEach((doc) => {contactus.push({...doc.data(),id:doc.id})})
       console.log(contactus)
     }).catch(err => {console.log(err.message)})

     */
    ///finding particukar elememnt
    /*const q=query(colRef,where("message","==","f"),orderBy('createdAt'))
    onSnapshot(q, (snapshot) => {
     let contactus=[]
     snapshot.docs.forEach((doc) => {
       contactus.push({...doc.data(),id:doc.id})
     })
     console.log(contactus)
    })*/
const q = query(colRef, orderBy('createdAt'))
onSnapshot(colRef, (snapshot) => {
        let contactus = []
        snapshot.docs.forEach((doc) => {
            contactus.push({...doc.data(), id: doc.id })
        })
        console.log(contactus)
    })
    //adding documents
const addcontactform = document.querySelector('.add')
addcontactform.addEventListener('submit', (e) => {
        e.preventDefault()
        addDoc(colRef, {
            name: addcontactform.name.value,
            message: addcontactform.message.value,
            email: addcontactform.message.value,
            phone: addcontactform.message.value,
            createdAt: serverTimestamp()

        }).then(() => { addcontactform.reset() })
    })
    //deleting documents
const deletecontact = document.querySelector('.delete')
deletecontact.addEventListener('submit', (e) => {
    e.preventDefault()
    const docRef = doc(db, 'contactus', deletecontact.id.value)
    deleteDoc(docRef).then(() => { deletecontact.reset() })
})

//getting particular documents

const docRef = doc(db, 'contactus', 'byxMgfGcoxSrTbiMTUTk')
    /* getDoc(docRef).then((doc) => {console.log(doc.data(),doc.id)})*/

onSnapshot(docRef, (doc) => { console.log(doc.data(), doc.id) })






/*const form = document.querySelector("#contact-form");
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const response = await fetch("/api/messages", {
		method: "POST",
		body: JSON.stringify({
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.json();
	alert(result.message);
	form.reset();
});



const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/messages", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
	name: String,
	email: String,
	message: String,
});

const Message = mongoose.model("Message", messageSchema);

app.post("/api/messages", async (req, res) => {
	try {
		const message = new Message({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message,
		});
		await message.save();
		res.json({ message: "Message sent successfully!" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error occurred, message not sent." });
	}
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});
*/