const firebaseConfig = {
    apiKey: "AIzaSyDWYk2yBsu9FmCrLOOO1O-SQ5ADjbvnjts",
    authDomain: "boarding-bites.firebaseapp.com",
    databaseURL: "https://boarding-bites-default-rtdb.firebaseio.com",
    projectId: "boarding-bites",
    storageBucket: "boarding-bites.appspot.com",
    messagingSenderId: "521141504279",
    appId: "1:521141504279:web:79685ce7c23254f5d90f52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

//reference your database

var BoardingBitesDB = firebase.database().ref('BoardingBites');

document.getElementById('foodregister').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var number = getElementVal('number');
    var address = getElementVal('address');
    var city = getElementVal('city');
    var statename = getElementVal('state');
    var zip = getElementVal('zip');
    var subtype = getElementVal('sub-type');
    var foodtype = getElementVal('food-type');
    var fssai = getElementVal('fssai');

    saveresponse(name, email, number, address, city, statename, zip, subtype, foodtype, fssai);

    // console.log(name, emailid, number, address, city, statename, zip);


}

const saveresponse = (name, email, number, address, city, statename, zip, subtype, foodtype, fssai) => {
    var newBoardingBites = BoardingBitesDB.push();
    newBoardingBites.set({
        name: name,
        email: email,
        number: number,
        address: address,
        city: city,
        statename: statename,
        zip: zip,
        subtype: subtype,
        foodtype: foodtype,
        fssai: fssai
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};