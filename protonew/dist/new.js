const firebaseConfig = {
    apiKey: "AIzaSyDWYk2yBsu9FmCrLOOO1O-SQ5ADjbvnjts",
    authDomain: "boarding-bites.firebaseapp.com",
    databaseURL: "https://boarding-bites-default-rtdb.firebaseio.com",
    projectId: "boarding-bites",
    storageBucket: "boarding-bites.appspot.com",
    messagingSenderId: "521141504279",
    appId: "1:521141504279:web:cd04931d48ea4f4fd90f52"
};
// initialise firebase
firebase.initializeApp(firebaseConfig);

//reference your database

var BoardingBitesDB = firebase.database().ref('BoardingBites');

document.getElementById('pgregister').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('email');
    var number = getElementVal('number');
    var address = getElementVal('address');
    var city = getElementVal('city');
    var statename = getElementVal('state');
    var zip = getElementVal('zip');
    var roomtype = getElementVal('room-type');
    var pgtype = getElementVal('pg-type');
    var messfacility = getElementVal('mess-facility');

    saveresponse(name, emailid, number, address, city, statename, zip, roomtype, pgtype, messfacility);

    // console.log(name, emailid, number, address, city, statename, zip);


}

const saveresponse = (name, emailid, number, address, city, statename, zip, roomtype, pgtype, messfacility) => {
    var newBoardingBites = BoardingBitesDB.push();
    newBoardingBites.set({
        name: name,
        emailid: emailid,
        number: number,
        address: address,
        city: city,
        statename: statename,
        zip: zip,
        roomtype: roomtype,
        pgtype: pgtype,
        messfacility: messfacility
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};