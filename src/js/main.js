/*
 * This project was created by Donovan Adrian and any
 * edits or changes must be confirmed as valid by Donovan
 * with written consent under any circumstance.
 *
 *
 *
 * * * * * * * * * * * * DIRECTORY * * * * * * * * * * * *
 * VARIABLE DECLARATIONS
 *   - COMMON PAGE VARS
 *   - LOGIN VARS
 *   - HOME VARS
 *   - SETTINGS VARS
 *   - ADMIN VARS
 *   - FILAMENT VARS
 *
 * ONLOAD FUNCTION
 *
 * NAVIGATION FUNCTION
 *
 * COMMON PAGE FUNCTIONS
 *   - initializeDatabase()
 *   - findUIDItemInArr()
 *   - initializeNavBtns()
 *
 * LOGIN FUNCTIONS
 *   - initializeLoginFunctionality()
 *   - initializeDatabaseForLogin()
 *   - DBFetchAllUsers()
 *   - initializeLoginFunctions()
 *   - login()
 *   - guestLogin()
 *   - signUp()
 *   - generateNewUID()
 *   - generateGuestUserName()
 *   - generateGuestPin()
 *   - addNewUserToDB()
 *
 * HOME FUNCTIONS
 *
 * SETTINGS FUNCTIONS
 *
 * ADMIN FUNCTIONS
 *
 * FILAMENT FUNCTIONS
 *
 * FETCH DATA FUNCTIONS
 *   - DBFetchCurrentUser()
 *   - DBFetchPrintData()
 *   - DBFetchFilamentData()
 *
 * LOAD DATA FUNCTIONS
 *   - loadConfig()
 *   - loadCurrentUser()
 *   - loadAllUsers()
 *   - loadPrintData()
 *   - loadFilamentData()
 *
 * UPDATE DATA FUNCTIONS
 *   - DBUpdateCurrentUser(user)
 *   - DBUpdatePrintData(print)
 *   - DBUpdateFilamentData(filament)
 *
 * DELETE DATA FUNCTIONS
 *   - DBDeleteUserData(deleteUserUID)
 *   - DBDeletePrintData(deletePrintUID)
 *   - DBDeleteFilamentData(deleteFilamentUID)
 *
 * CREATE ELEMENT FUNCTIONS
 *   - createUserElement(createUserData)
 *   - createPrintElement(createPrintData)
 *   - createFilamentElement(createFilamentData)
 *
 * UPDATE ELEMENT FUNCTIONS
 *   - updateUserElement(updateUserData)
 *   - updatePrintElement(updatePrintData)
 *   - updateFilamentElement(updateFilamentData)
 *
 * DELETE ELEMENT FUNCTIONS
 *   - deleteUserElement(deleteUserUID)
 *   - deletePrintElement(deletePrintUID)
 *   - deleteFilamentElement(deleteFilamentUID)
 *
 *
 *
 * INITIALIZATION FUNCTIONS
 *   - initializeIndexPage()
 *   - initializeHomePage()
 *   - initializeSettingsPage()
 *   - initializeAdminPage()
 *   - initializeFilamentPage()
 *   - verifyVariableIntegrity(variableArr)
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */



//COMMON PAGE VARS
let offlineModal;
let offlineModalSpan;
let printModal;
let printTitle;
let printFilament;
let printTime;
let printSize;
let printInfill;
let printPrice;
let printStatus;
let printUpdateBtn;
let homeNavBtn;
let filamentsNavBtn;
let settingsNavBtn;
let signOutNavBtn;
let elementPlaceholder;
let dataElementContainer;
let configObj = {};
let listeningFirebaseRefs = [];
let allUserDBRef;
let currentUserDBRef;
let printDBRef;
let filamentDBRef;
let userElementCount = 0;
let printElementCount = 0;
let filamentElementCount = 0;
let user = null;
let print = null;
let filament = null;
let userArr = [];
let printArr = [];
let filamentArr = [];

//LOGIN VARS
let userNameInput;
let pinInput;
let loginBtn;
let loginGuestBtn;
let loginInfoFail;
let loginInfoSuccess;
let signUpFld;
let loginVarArr;
let signUpModal;
let closeSignUp;
let signUpNameInput;
let signUpUserNameInput;
let signUpPinInput;
let signUpPinConfInput;
let signUpContinue;
let signUpCancel;
let guestLoginModal;
let closeGuestLogin;
let guestLoginUserName;
let guestLoginPin;
let guestLoginContinue;
let guestLoginCancel;

//HOME VARS
let upgradeUserBtn;
let addPrintBtn;
let printDeleteBtn;
let editPrintModal;
let editPrintTitle;
let editPrintFilament;
let editPrintFilamentContent;
let editPrintFilamentPlaceholder;
let editPrintSize;
let editPrintSizeS;
let editPrintSizeN;
let editPrintSizeL;
let editPrintInfill;
let editPrintInfillNormal;
let editPrintInfillL;
let editPrintInfillXL;
let editPrintInfillXXL;
let editPrintInfillXXXL;
let editPrintTime;
let editPrintPrice;
let editPrintInfo;
let editPrintUpdateBtn;
let editPrintCancelBtn;
let homeVarArr;

//SETTINGS VARS
let editNameInput;
let editUserNameInput;
let editPinInput;
let editConfirmPinInput;
let editUpdateUserBtn;
let adminViewUsersBtn;
let settingsVarArr;

//ADMIN VARS
let userModal;
let userTitle;
let userUID;
let userName;
let userUserName;
let userPassword;
let userPrints;
let userBill;
let userFilament;
let userAdminStatus;
let userShowPrintsBtn;
let userDeleteBtn;
let guestModal;
let guestTitle;
let guestUID;
let guestName;
let guestPin;
let guestPrints;
let guestBill;
let guestFilament;
let guestShowPrintsBtn;
let guestDeleteBtn;
let printListModal;
let printListModalTitle;
let printListModalContainer;
let printListModalPlaceholder;
let printStatusOrdered;
let printStatusPrinting;
let printStatusComplete;
let printStatusOther;
let printCreationDate;
let printStatusNew;
let printCancelBtn;
let adminVarArr;

//FILAMENT VARS
let addFilamentBtn;
let filamentModal;
let filamentTitle;
let filamentType;
let filamentWeight;
let filamentThickness;
let filamentCostPerRoll;
let filamentCostPerGram;
let filamentUserCount;
let filamentUpdateBtn;
let filamentDeleteBtn;
let editFilamentModal;
let editFilamentTitle;
let filamentEditTitle;
let filamentEditFilament;
let filamentEditFilamentContent;
let filamentTypePlaceholder;
let filamentEditFilamentNew;
let filamentEditWeight;
let filamentWeightXS;
let filamentWeightS;
let filamentWeightM;
let filamentWeightXL;
let filamentWeightOther;
let filamentEditWeightNew;
let filamentEditThickness;
let filamentThicknessS;
let filamentThicknessM;
let filamentThicknessL;
let filamentThicknessOther;
let filamentEditThicknessNew;
let filamentEditCostPerRoll;
let filamentEditCostPerGram;
let filamentEditUserCount;
let filamentEditInfo;
let filamentEditUpdate;
let filamentEditCancel;
let filamentVarArr;


//ONLOAD FUNCTION
window.onload = function() {
    let findPageElement = document.getElementById("indexTitleID");
    let pageChosenBool = false;
    let pageInitializedBool = false;

    if (findPageElement != null) {
        console.log("Initialize Index Page");
        pageChosenBool = true;
        initializeIndexPage();
        if(verifyVariableIntegrity(loginVarArr)) {
            console.log("Index Page Successfully Initialized");
            pageInitializedBool = true;

            initializeLoginFunctionality();
        }
    }
    findPageElement = document.getElementById("homeTitleID");
    if (findPageElement != null) {
        console.log("Initialize Home Page");
        pageChosenBool = true;
        initializeHomePage();
        if(verifyVariableIntegrity(homeVarArr)) {
            console.log("Home Page Successfully Initialized");
            pageInitializedBool = true;

            loadConfig();
            initializeDatabase();

            loadCurrentUser();
            DBUpdateCurrentUser();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();

            initializeNavBtns();
        }
    }
    findPageElement = document.getElementById("settingsTitleID");
    if (findPageElement != null) {
        console.log("Initialize Settings Page");
        pageChosenBool = true;
        initializeSettingsPage();
        if(verifyVariableIntegrity(settingsVarArr)) {
            console.log("Settings Page Successfully Initialized");
            pageInitializedBool = true;

            loadConfig();
            initializeDatabase();

            loadCurrentUser();
            DBUpdateCurrentUser();

            initializeNavBtns();
        }
    }
    findPageElement = document.getElementById("adminTitleID");
    if (findPageElement != null) {
        console.log("Initialize Admin Page");
        pageChosenBool = true;
        initializeAdminPage();
        if(verifyVariableIntegrity(adminVarArr)) {
            console.log("Admin Page Successfully Initialized");
            pageInitializedBool = true;

            loadConfig();
            initializeDatabase();

            loadAllUsers();
            DBFetchAllUsers();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();

            initializeNavBtns();
        }
    }
    findPageElement = document.getElementById("filamentTitleID");
    if (findPageElement != null) {
        console.log("Initialize Filament Page");
        pageChosenBool = true;
        initializeFilamentPage();
        if(verifyVariableIntegrity(filamentVarArr)) {
            console.log("Filament Page Successfully Initialized");
            pageInitializedBool = true;

            loadConfig();
            initializeDatabase();

            loadAllUsers();
            DBFetchAllUsers();

            loadFilamentData();
            DBFetchFilamentData();

            initializeNavBtns();
        }
    }

    if (!pageChosenBool || !pageInitializedBool) {
        alert("Page Not Properly Loaded! Please Turn Off AdBlockers And Refresh!");
    } else {
        window.addEventListener("online", function(){
            offlineModal.style.display = "none";
            location.reload();
        });

        window.addEventListener("offline", function() {
            let now = 0;
            let g = setInterval(function(){
                now = now + 1000;
                if(now >= 5000){
                    offlineModal.style.display = "block";
                    clearInterval(g);
                }
            }, 1000);
        });

        //close offlineModal on close
        offlineModalSpan.onclick = function() {
            offlineModal.style.display = "none";
        };

        //close offlineModal on click
        window.onclick = function(event) {
            if (event.target == offlineModal) {
                offlineModal.style.display = "none";
            }
        };
    }
};



//NAVIGATION FUNCTION
function navigation(page) {
    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("userArr", JSON.stringify(userArr));
    sessionStorage.setItem("printArr", JSON.stringify(printArr));
    sessionStorage.setItem("filamentArr", JSON.stringify(filamentArr));
    switch(page){
        case 0:
            window.location.href = "home.html";
            break;
        case 1:
            window.location.href = "filament.html";
            break;
        case 2:
            window.location.href = "settings.html";
            break;
        case 3:
            window.location.href = "index.html";
            break;
        case 4:
            window.location.href = "admin.html";
            break;
        default:
            console.log("Page Navigation Error");
            break;
    }
}



//COMMON PAGE FUNCTIONS
function initializeDatabase() {
    console.log("Initializing Database");

    firebase.initializeApp(configObj);
    firebase.analytics();

    firebase.auth().signInAnonymously().catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log("Firebase Error: " + errorCode + ", " + errorMessage);
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            let isAnonymous = user.isAnonymous;
            let uid = user.uid;
        } else {
            // User is signed out.
        }
    });

    console.log("Database Successfully Initialized!");
}

function findUIDItemInArr(item, userArray) {
    for(let i = 0; i < userArray.length; i++){
        if(userArray[i].uid == item){
            console.log("Found item: " + item);
            return i;
        }
    }
    return -1;
}

function initializeNavBtns(){
    homeNavBtn.onclick = function() {
        navigation(0);
    };

    filamentsNavBtn.onclick = function() {
        navigation(1);
    };

    settingsNavBtn.onclick = function() {
        navigation(2);
    };

    signOutNavBtn.onclick = function() {
        navigation(3);
    };
}

function createElementPlaceholder(dataElementType) {
    let liItem = document.createElement("LI");
    let textNode = document.createTextNode("");

    liItem.id = "dataElement";
    liItem.className = dataElementType + "Placeholder";
    liItem.appendChild(textNode);
    dataElementContainer.insertBefore(liItem, dataElementContainer.childNodes[0]);
}



//LOGIN FUNCTIONS
function initializeLoginFunctionality() {
    console.log("Fetching Config");
    let file = "txt/config.txt";

    $.ajax({
        url: file,
        success: function(data){
            let configInitializeInt = 0;
            let configFileInput = data.split('\n');
            let isComment;
            let apiKeyString = "";
            let authDomainString = "";
            let databaseURLString = "";
            let projectIdString = "";
            let storageBucketString = "";
            let messagingSenderIdString = "";
            let appIdString = "";
            let measurementIdString = "";

            for(let i = 0; i < configFileInput.length; i++){
                isComment = false;
                if (configFileInput[i].charAt(0) == "#" || configFileInput[i].charAt(0) == "") {
                    isComment = true;
                }
                if (!isComment) {
                    if (configFileInput[i].includes("apiKey:")){
                        configInitializeInt++;
                        apiKeyString = configFileInput[i].substr(7, configFileInput[i].length);
                        apiKeyString = apiKeyString.replace(/"/g, '');
                        apiKeyString = apiKeyString.replace(/,/g, '');
                        apiKeyString = apiKeyString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("authDomain:")){
                        configInitializeInt++;
                        authDomainString = configFileInput[i].substr(11, configFileInput[i].length);
                        authDomainString = authDomainString.replace(/"/g, '');
                        authDomainString = authDomainString.replace(/,/g, '');
                        authDomainString = authDomainString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("databaseURL:")){
                        configInitializeInt++;
                        databaseURLString = configFileInput[i].substr(12, configFileInput[i].length);
                        databaseURLString = databaseURLString.replace(/"/g, '');
                        databaseURLString = databaseURLString.replace(/,/g, '');
                        databaseURLString = databaseURLString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("projectId:")){
                        configInitializeInt++;
                        projectIdString = configFileInput[i].substr(10, configFileInput[i].length);
                        projectIdString = projectIdString.replace(/"/g, '');
                        projectIdString = projectIdString.replace(/,/g, '');
                        projectIdString = projectIdString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("storageBucket:")){
                        configInitializeInt++;
                        storageBucketString = configFileInput[i].substr(14, configFileInput[i].length);
                        storageBucketString = storageBucketString.replace(/"/g, '');
                        storageBucketString = storageBucketString.replace(/,/g, '');
                        storageBucketString = storageBucketString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("messagingSenderId:")){
                        configInitializeInt++;
                        messagingSenderIdString = configFileInput[i].substr(18, configFileInput[i].length);
                        messagingSenderIdString = messagingSenderIdString.replace(/"/g, '');
                        messagingSenderIdString = messagingSenderIdString.replace(/,/g, '');
                        messagingSenderIdString = messagingSenderIdString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("appId:")){
                        configInitializeInt++;
                        appIdString = configFileInput[i].substr(6, configFileInput[i].length);
                        appIdString = appIdString.replace(/"/g, '');
                        appIdString = appIdString.replace(/,/g, '');
                        appIdString = appIdString.replace(/ /g, '');
                    } else if (configFileInput[i].includes("measurementId:")){
                        configInitializeInt++;
                        measurementIdString = configFileInput[i].substr(14, configFileInput[i].length);
                        measurementIdString = measurementIdString.replace(/"/g, '');
                        measurementIdString = measurementIdString.replace(/,/g, '');
                        measurementIdString = measurementIdString.replace(/ /g, '');
                    } else {
                        //console.log("Unknown Config String, Please Advise:");
                        //console.log(configFileInput[i]);
                    }
                } else {
                    //console.log("Comment Found!");
                }
            }

            if(configInitializeInt == 8){
                if (apiKeyString == "" || authDomainString == "" || databaseURLString == "" || projectIdString == "" ||
                    storageBucketString == "" || messagingSenderIdString == "" || appIdString == "" || measurementIdString == "") {
                    alert("Config not properly initialized! Please contact an administrator!");
                    console.log("Config Not Initialized! Are You Using The Default Config File?");
                } else {
                    configObj = {
                        apiKey: apiKeyString,
                        authDomain: authDomainString,
                        databaseURL: databaseURLString,
                        projectId: projectIdString,
                        storageBucket: storageBucketString,
                        messagingSenderId: messagingSenderIdString,
                        appId: appIdString,
                        measurementId: measurementIdString
                    };
                    console.log("Config Successfully Initialized!");

                    sessionStorage.setItem("config", JSON.stringify(configObj));
                    initializeDatabaseForLogin();
                }
            }
        }
    });
}

function initializeDatabaseForLogin() {
    initializeDatabase();

    DBFetchAllUsers();

    initializeLoginFunctions();
}

function DBFetchAllUsers() {
    console.log("Fetching Users From Database");

    allUserDBRef = firebase.database().ref("users/");

    let fetchPosts = function (postRef) {
        postRef.on('child_added', function (data) {
            userArr.push(data.val());

            if(user != null)
                if(data.key == user.key)
                    user = data;
        });

        postRef.on('child_changed', function (data) {
            let i = findUIDItemInArr(data.key, userArr);
            if(userArr[i] != data.val() && i != -1){
                //console.log("Updating " + userArr[i].userName + " to most updated version: " + data.val().userName);
                userArr[i] = data;

                if(user != null)
                    if(data.key == user.key)
                        user = data;
            }
        });

        postRef.on('child_removed', function (data) {
            let i = findUIDItemInArr(data.key, userArr);
            userArr.splice(i, 1);
        });
    };

    fetchPosts(allUserDBRef);

    listeningFirebaseRefs.push(allUserDBRef);
}

function initializeLoginFunctions() {
    loginBtn.innerHTML = "Login";
    loginBtn.onclick = function() {
        login();
    };

    loginGuestBtn.innerHTML = "Continue As Guest";
    loginGuestBtn.onclick = function() {
        guestLogin();
    };

    signUpFld.onclick = function() {
        signUp();
    };
}

function login() {
    let validUser = false;
    if(userArr.length != 0)
        for(let i = 0; i < userArr.length; i++) {
            if(userArr[i].userName == userNameInput)
                if(decode(userArr[i].pin) == pinInput) {
                    loginInfoFail.innerHTML = "";
                    loginInfoSuccess.innerHTML = userArr[i].userName + " Authenticated!";
                    validUser = true;
                    user = userArr[i];
                    break;
                }
        }

    if(validUser)
        navigation(0);
    else
        loginInfoFail.innerHTML = "User Name Or Pin Incorrect!";
}

function guestLogin() {
    injectUserArr(userArr);

    let guestUIDGen = generateNewUID();
    let guestUserNameGen = generateGuestUserName();
    let guestPinGen = generateGuestPin();
    let guestPinEncode = encode(guestPinGen);

    guestLoginUserName.innerHTML = guestUserNameGen;
    guestLoginPin.innerHTML = guestPinGen;

    guestLoginContinue.onclick = function() {
        user = {
            uid: guestUIDGen,
            userName: guestUserNameGen,
            pin: guestPinEncode,
            admin: 0};

        addNewUserToDB(user, true);
    };

    guestLoginCancel.onclick = function() {
        guestLoginModal.style.display = "none";
    };

    closeGuestLogin.onclick = function() {
        guestLoginModal.style.display = "none";
    };

    //close offlineModal on click
    window.onclick = function(event) {
        if (event.target == guestLoginModal) {
            guestLoginModal.style.display = "none";
        }
    };

    guestLoginModal.style.display = "block";
}

function signUp() {
    signUpContinue.onclick = function() {
        let inputInvalid = false;
        let errorString = "";

        if(signUpNameInput.value == "" || signUpUserNameInput.value == "" || signUpPinInput.value == "" ||
            signUpPinConfInput.value == "") {
            inputInvalid = true;
            errorString = "An Input Field Is Empty! Please Fill All Fields And Try Again!";
        }

        if(signUpPinInput.value != signUpPinConfInput.value) {
            inputInvalid = true;
            errorString = "The Pins You Entered Do Not Match! Please Re-Enter Your Pins And Try Again!";
        }

        if(userArr.length != 0)
            for(let i = 0; i < userArr.length; i++)
                if(userArr[i].userName == signUpUserNameInput.value) {
                    inputInvalid = true;
                    errorString = "That User Name Is Already Taken! Please Pick Another User Name And Try Again.";
                }

        if(!inputInvalid) {
            user = {
                uid: generateNewUID(),
                name: signUpNameInput.value,
                userName: signUpUserNameInput.value,
                pin: encode(signUpPinInput.value),
                admin: 0};

            addNewUserToDB(user, false);
        } else {
            alert(errorString);
        }
    };

    signUpCancel.onclick = function() {
        signUpModal.style.display = "none";
        signUpNameInput.value = "";
        signUpUserNameInput.value = "";
        signUpPinInput.value = "";
        signUpPinConfInput.value = "";
    };

    closeSignUp.onclick = function() {
        signUpModal.style.display = "none";
    };

    //close offlineModal on click
    window.onclick = function(event) {
        if (event.target == signUpModal) {
            signUpModal.style.display = "none";
        }
    };

    signUpModal.style.display = "block";
}

function generateNewUID() {
    let newUid = firebase.database().ref("users").push();

    newUid = newUid.toString();
    newUid = newUid.substr(55, 64);

    return newUid;
}

function generateGuestUserName() {
    let tempUserNameAppend = "";
    let userNameGenLength = getRandomNumber();
    let userNameGenExists = false;

    while(true) {
        while (true)
            if (userNameGenLength < 3 || userNameGenLength > 6)
                userNameGenLength = getRandomNumber();
            else
                break;

        for (let i = 0; i < userNameGenLength; i++)
            tempUserNameAppend += getRandomNumber();

        if (userArr != null)
            for (let i = 0; i < userArr.length; i++)
                if(userArr[i].userName == tempUserNameAppend)
                    userNameGenExists = true;

        if (!userNameGenExists)
            break;
    }

    return "guest-" + tempUserNameAppend;
}

function generateGuestPin() {
    let tempPinGen = "";

    for(let i = 0; i < 5; i++)
        tempPinGen += getRandomNumber();

    return tempPinGen;
}

function addNewUserToDB(userData, guestBool){
    firebase.database().ref("users/" + userData.uid).set({
        uid: userData.uid,
        userName: userData.userName,
        pin: userData.pin,
        admin: userData.admin});

    if (!guestBool)
        firebase.database().ref("users/" + userData.uid).update({
            name: user.name});

    console.log(userData);

    userArr.push(userData);
    user = userData;

    navigation(0);
}



//HOME FUNCTIONS
//home fxns here



//SETTINGS FUNCTIONS
//setting fxns here



//ADMIN FUNCTIONS
//admin fxns here



//FILAMENT FUNCTIONS
//filament fxns here



//FETCH DATA FUNCTIONS
function DBFetchCurrentUser(){
    console.log("Fetching Current User From Database");

    currentUserDBRef = firebase.database().ref("users/" + user.uid);

    let fetchPosts = function (postRef) {
        postRef.on('child_added', function (data) {
            console.log(data.key);

            if (data.key == "name"){
                user.name = data.value;
            } else if (data.key == "userName"){
                user.userName = data.value;
            } else if (data.key == "pin"){
                user.pin = data.value;
            } else if (data.key == "admin"){
                user.admin = data.value;
            } else if (data.key == "prints"){
                user.prints = data.value;
            } else {
                console.log("Unrecognized Data Input");
            }
        });

        postRef.on('child_changed', function (data) {
            console.log(data.key);

            if (data.key == "name"){
                user.name = data.value;
            } else if (data.key == "userName"){
                user.userName = data.value;
            } else if (data.key == "pin"){
                user.pin = data.value;
            } else if (data.key == "admin"){
                user.admin = data.value;
            } else if (data.key == "prints"){
                user.prints = data.value;
            } else {
                console.log("Unrecognized Data Input");
            }
        });

        postRef.on('child_removed', function (data) {
            console.log(data.key);

            if (data.key == "name"){
                user.name = "";
            } else if (data.key == "userName"){
                user.userName = "";
            } else if (data.key == "pin"){
                user.pin = "";
            } else if (data.key == "admin"){
                user.admin = 0;
            } else if (data.key == "prints"){
                user.prints = [];
            } else {
                console.log("Unrecognized Data Input");
            }
        });
    };

    fetchPosts(currentUserDBRef);

    listeningFirebaseRefs.push(currentUserDBRef);
}

function DBFetchPrintData(){
    console.log("Fetching Prints From Database");

    printDBRef = firebase.database().ref("prints/");

    let fetchPosts = function (postRef) {
        postRef.on('child_added', function (data) {
            let i = findUIDItemInArr(data.key, printArr);
            if(i == -1) {
                printArr.push(data.val());
            }
        });

        postRef.on('child_changed', function (data) {
            let i = findUIDItemInArr(data.key, printArr);
            if(printArr[i] != data.val() && i != -1){
                //console.log("Updating " + userArr[i].userName + " to most updated version: " + data.val().userName);
                printArr[i] = data;
            }
        });

        postRef.on('child_removed', function (data) {
            let i = findUIDItemInArr(data.key, printArr);
            printArr.splice(i, 1);
        });
    };

    fetchPosts(printDBRef);

    listeningFirebaseRefs.push(printDBRef);
}

function DBFetchFilamentData(){
    console.log("Fetching Filaments From Database");

    filamentDBRef = firebase.database().ref("filaments/");

    let fetchPosts = function (postRef) {
        postRef.on('child_added', function (data) {
            let i = findUIDItemInArr(data.key, filamentArr);
            if(i == -1) {
                filamentArr.push(data.val());
            }
        });

        postRef.on('child_changed', function (data) {
            let i = findUIDItemInArr(data.key, filamentArr);
            if(filamentArr[i] != data.val() && i != -1){
                //console.log("Updating " + userArr[i].userName + " to most updated version: " + data.val().userName);
                filamentArr[i] = data;
            }
        });

        postRef.on('child_removed', function (data) {
            let i = findUIDItemInArr(data.key, filamentArr);
            filamentArr.splice(i, 1);
        });
    };

    fetchPosts(filamentDBRef);

    listeningFirebaseRefs.push(filamentDBRef);
}



//LOAD DATA FUNCTIONS
function loadConfig(){
    configObj = JSON.parse(sessionStorage.config);
}

function loadCurrentUser(){
    user = JSON.parse(sessionStorage.user);
}

function loadAllUsers(){
    userArr = JSON.parse(sessionStorage.userArr);
}

function loadPrintData(){
    printArr = JSON.parse(sessionStorage.printArr);
}

function loadFilamentData(){
    filamentArr = JSON.parse(sessionStorage.filamentArr);
}



//UPDATE DATA FUNCTIONS
function DBUpdateCurrentUser(DBUserData){
    user = DBUserData;

    firebase.database().ref("users/" + DBUserData.uid).update({
        uid: DBUserData.uid,
        userName: DBUserData.userName,
        pin: DBUserData.pin,
        prints: DBUserData.prints,
        admin: DBUserData.admin
    });

    if (DBUserData.name != null) {
        firebase.database().ref("users/" + DBUserData.uid).update({
            name: DBUserData.name
        });
    }
}

function DBUpdatePrintData(DBPrintData){
    let i = findUIDItemInArr(DBPrintData.uid, printArr);
    printArr[i] = DBPrintData;

    firebase.database().ref("prints/" + DBPrintData.uid).update({
        uid: DBPrintData.uid,
        title: DBPrintData.title,
        filament: DBPrintData.filament,
        time: DBPrintData.time,
        size: DBPrintData.size,
        infill: DBPrintData.infill,
        supports: DBPrintData.supports,
        price: DBPrintData.price,
        status: DBPrintData.status,
        creationDate: DBPrintData.creationDate
    });
}

function DBUpdateFilamentData(DBFilamentData){
    let i = findUIDItemInArr(DBFilamentData.uid, filamentArr);
    filamentArr[i] = DBFilamentData;

    firebase.database().ref("prints/" + DBPrintData.uid).update({
        uid: DBFilamentData.uid,
        title: DBFilamentData.title,
        type: DBFilamentData.type,
        weight: DBFilamentData.weight,
        thickness: DBFilamentData.thickness,
        costPerRoll: DBFilamentData.costPerRoll,
        costPerGram: DBFilamentData.costPerGram
    });
}



//DELETE DATA FUNCTIONS
function DBDeleteUserData(deleteUserUID){
    firebase.database().ref("users/").child(deleteUserUID).remove();

    let i = findUIDItemInArr(deleteUserUID, userArr);
    userArr.splice(i, 1);
}
function DBDeletePrintData(deletePrintUID){
    firebase.database().ref("users/").child(deletePrintUID).remove();

    let i = findUIDItemInArr(deletePrintUID, printArr);
    printArr.splice(i, 1);
}

function DBDeleteFilamentData(deleteFilamentUID){
    firebase.database().ref("users/").child(deleteFilamentUID).remove();

    let i = findUIDItemInArr(deleteFilamentUID, filamentArr);
    filamentArr.splice(i, 1);
}



//CREATE ELEMENT FUNCTIONS
function createUserElement(createUserData){
    let liItem = document.createElement("LI");
    let textNode;

    liItem.id = createUserData.uid;
    liItem.className = "dataElement";
    liItem.onclick = function (){
        //Nothing yet...
    };

    try{
        elementPlaceholder.remove();
    } catch (err) {}

    if (createUserData.name == null)
        textNode = document.createTextNode(createUserData.userName);
    else
        textNode = document.createTextNode(createUserData.name);
    liItem.appendChild(textNode);
    dataElementContainer.insertBefore(liItem, dataElementContainer.childNodes[0]);
    userElementCount++;
}

function createPrintElement(createPrintData){
    let liItem = document.createElement("LI");
    let textNode;

    liItem.id = createPrintData.uid;
    liItem.className = "dataElement";
    liItem.onclick = function (){
        //Nothing yet...
    };

    try{
        elementPlaceholder.remove();
    } catch (err) {}

    if (createPrintData.name == null)
        textNode = document.createTextNode(createPrintData.userName);
    else
        textNode = document.createTextNode(createPrintData.name);
    liItem.appendChild(textNode);
    dataElementContainer.insertBefore(liItem, dataElementContainer.childNodes[0]);
    userElementCount++;
}

function createFilamentElement(createFilamentData){
    let liItem = document.createElement("LI");
    let textNode;

    liItem.id = createFilamentData.uid;
    liItem.className = "dataElement";
    liItem.onclick = function (){
        //Nothing yet...
    };

    try{
        elementPlaceholder.remove();
    } catch (err) {}

    if (createFilamentData.name == null)
        textNode = document.createTextNode(createFilamentData.userName);
    else
        textNode = document.createTextNode(createFilamentData.name);
    liItem.appendChild(textNode);
    dataElementContainer.insertBefore(liItem, dataElementContainer.childNodes[0]);
    userElementCount++;
}



//UPDATE ELEMENT FUNCTIONS
function updateUserElement(updateUserData){
    let editData = document.getElementById(updateUserData.uid);
    if (updateUserData.name == null)
        editData.innerHTML = updateUserData.userName;
    else
        editData.innerHTML = updateUserData.name;
    editData.className = "dataElement";
    editData.onclick = function() {
        //Nothing yet...
    };
}

function updatePrintElement(updatePrintData){
    let editData = document.getElementById(updatePrintData.uid);
    if (updatePrintData.name == null)
        editData.innerHTML = updatePrintData.userName;
    else
        editData.innerHTML = updatePrintData.name;
    editData.className = "dataElement";
    editData.onclick = function() {
        //Nothing yet...
    };
}

function updateFilamentElement(updateFilamentData){
    let editData = document.getElementById(updateFilamentData.uid);
    if (updateFilamentData.name == null)
        editData.innerHTML = updateFilamentData.userName;
    else
        editData.innerHTML = updateFilamentData.name;
    editData.className = "dataElement";
    editData.onclick = function() {
        //Nothing yet...
    };
}



//DELETE ELEMENT FUNCTIONS
function deleteUserElement(deleteUserUID){
    document.getElementById(deleteUserUID).remove();
    userElementCount--;

    if (userElementCount == 0)
        createElementPlaceholder("User");
}

function deletePrintElement(deletePrintUID){
    document.getElementById(deletePrintUID).remove();
    printElementCount--;

    if (printElementCount == 0)
        createElementPlaceholder("Print");
}

function deleteFilamentElement(deleteFilamentUID){
    document.getElementById(deleteFilamentUID).remove();
    filamentElementCount--;

    if (filamentElementCount == 0)
        createElementPlaceholder("Filament");
}



//INITIALIZATION FUNCTIONS
function initializeIndexPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    homeNavBtn = document.getElementById("homeNavBtn");
    filamentsNavBtn = document.getElementById("filamentsNavBtn");
    settingsNavBtn = document.getElementById("settingsNavBtn");
    signOutNavBtn = document.getElementById("signOutNavBtn");
    //Page Specific
    userNameInput = document.getElementById("username");
    pinInput = document.getElementById("pin");
    loginBtn = document.getElementById("loginBtn");
    loginGuestBtn = document.getElementById("loginGuest");
    loginInfoFail = document.getElementById("loginInfo");
    loginInfoSuccess = document.getElementById("loginInfo2");
    signUpFld = document.getElementById("signUpFld");
    signUpModal = document.getElementById("signUpModal");
    closeSignUp = document.getElementById("closeSignUp");
    signUpNameInput = document.getElementById("signUpNameInput");
    signUpUserNameInput = document.getElementById("signUpUserNameInput");
    signUpPinInput = document.getElementById("signUpPinInput");
    signUpPinConfInput = document.getElementById("signUpPinConfInput");
    signUpContinue = document.getElementById("signUpContinue");
    signUpCancel = document.getElementById("signUpCancel");
    guestLoginModal = document.getElementById("guestLoginModal");
    closeGuestLogin = document.getElementById("closeGuestLogin");
    guestLoginUserName = document.getElementById("guestUserName");
    guestLoginPin = document.getElementById("guestPin");
    guestLoginContinue = document.getElementById("guestLoginContinue");
    guestLoginCancel = document.getElementById("guestLoginCancel");
    loginVarArr = [signUpModal, closeSignUp, signUpNameInput, signUpUserNameInput, signUpPinInput, signUpPinConfInput,
        signUpContinue, signUpCancel, guestLoginModal, closeGuestLogin, guestLoginUserName, guestLoginPin,
        guestLoginContinue, guestLoginCancel, userNameInput, pinInput, loginBtn, loginGuestBtn, loginInfoFail,
        loginInfoSuccess, signUpFld, offlineModal, offlineModalSpan];
}

function initializeHomePage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    homeNavBtn = document.getElementById("homeNavBtn");
    filamentsNavBtn = document.getElementById("filamentsNavBtn");
    settingsNavBtn = document.getElementById("settingsNavBtn");
    signOutNavBtn = document.getElementById("signOutNavBtn");
    printModal = document.getElementById("printModal");
    printTitle = document.getElementById("printTitle");
    printFilament = document.getElementById("printFilament");
    printTime = document.getElementById("printTime");
    printSize = document.getElementById("printSize");
    printInfill = document.getElementById("printInfill");
    printPrice = document.getElementById("printPrice");
    printStatus = document.getElementById("printStatus");
    printUpdateBtn = document.getElementById("printUpdate");
    //Page Specific
    dataElementContainer = document.getElementById("printListContainer");
    elementPlaceholder = document.getElementById("PrintPlaceholder");
    upgradeUserBtn = document.getElementById("upgradeUser");
    addPrintBtn = document.getElementById("addPrint");
    printDeleteBtn = document.getElementById("printDelete");
    editPrintModal = document.getElementById("editPrintModal");
    editPrintTitle = document.getElementById("editPrintTitle");
    editPrintFilament = document.getElementById("printEditTitle");
    editPrintFilamentContent = document.getElementById("printEditFilament");
    editPrintFilamentPlaceholder = document.getElementById("printFilamentPlaceholder");
    editPrintSize = document.getElementById("printEditSize");
    editPrintSizeS = document.getElementById("printSizeSmall");
    editPrintSizeN = document.getElementById("printSizeNormal");
    editPrintSizeL = document.getElementById("printSizeLarge");
    editPrintInfill = document.getElementById("printEditInfill");
    editPrintInfillNormal = document.getElementById("printInfillNormal");
    editPrintInfillL = document.getElementById("printInfillLarge");
    editPrintInfillXL = document.getElementById("printInfillXL");
    editPrintInfillXXL = document.getElementById("printInfillXXL");
    editPrintInfillXXXL = document.getElementById("printInfillXXXL");
    editPrintTime = document.getElementById("printEditTime");
    editPrintPrice = document.getElementById("printEditPrice");
    editPrintInfo = document.getElementById("printEditInfo");
    editPrintUpdateBtn = document.getElementById("printEditUpdate");
    editPrintCancelBtn = document.getElementById("printEditCancel");
    homeVarArr = [dataElementContainer, elementPlaceholder, upgradeUserBtn, addPrintBtn, printDeleteBtn, editPrintModal,
        editPrintTitle, editPrintFilament, editPrintFilamentContent, editPrintFilamentPlaceholder,
        editPrintSize, editPrintSizeS, editPrintSizeN, editPrintSizeL, editPrintInfill, editPrintInfillNormal,
        editPrintInfillL, editPrintInfillXL, editPrintInfillXXL, editPrintInfillXXXL, editPrintTime,
        editPrintPrice, editPrintInfo, editPrintUpdateBtn, editPrintCancelBtn, offlineModal, offlineModalSpan,
        printModal, printTitle, printFilament, printTime, printSize, printInfill, printPrice, printStatus,
        printUpdateBtn, homeNavBtn, filamentsNavBtn, settingsNavBtn, signOutNavBtn];
}

function initializeSettingsPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    homeNavBtn = document.getElementById("homeNavBtn");
    filamentsNavBtn = document.getElementById("filamentsNavBtn");
    settingsNavBtn = document.getElementById("settingsNavBtn");
    signOutNavBtn = document.getElementById("signOutNavBtn");
    //Page Specific
    editNameInput = document.getElementById("nameInp");
    editUserNameInput = document.getElementById("userNameInp");
    editPinInput = document.getElementById("userPinInp");
    editConfirmPinInput = document.getElementById("userPinConfInp");
    editUpdateUserBtn = document.getElementById("updateUser");
    adminViewUsersBtn = document.getElementById("viewUsers");
    settingsVarArr = [editNameInput, editUserNameInput, editPinInput, editConfirmPinInput, editUpdateUserBtn,
        adminViewUsersBtn, offlineModal, offlineModalSpan, homeNavBtn, filamentsNavBtn, settingsNavBtn, signOutNavBtn];
}

function initializeAdminPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    homeNavBtn = document.getElementById("homeNavBtn");
    filamentsNavBtn = document.getElementById("filamentsNavBtn");
    settingsNavBtn = document.getElementById("settingsNavBtn");
    signOutNavBtn = document.getElementById("signOutNavBtn");
    printModal = document.getElementById("printModal");
    printTitle = document.getElementById("printTitle");
    printFilament = document.getElementById("printFilament");
    printTime = document.getElementById("printTime");
    printSize = document.getElementById("printSize");
    printInfill = document.getElementById("printInfill");
    printPrice = document.getElementById("printPrice");
    printStatus = document.getElementById("printStatus");
    printUpdateBtn = document.getElementById("printUpdate");
    //Page Specific
    dataElementContainer = document.getElementById("userListContainer");
    elementPlaceholder = document.getElementById("UserPlaceholder");
    userModal = document.getElementById("userModal");
    userTitle = document.getElementById("userTitle");
    userUID = document.getElementById("userUID");
    userName = document.getElementById("userName");
    userUserName = document.getElementById("userUserName");
    userPassword = document.getElementById("userPassword");
    userPrints = document.getElementById("userPrints");
    userBill = document.getElementById("userBill");
    userFilament = document.getElementById("userFilament");
    userAdminStatus = document.getElementById("userAdminStatus");
    userShowPrintsBtn = document.getElementById("userShowPrints");
    userDeleteBtn = document.getElementById("userDelete");
    guestModal = document.getElementById("guestModal");
    guestTitle = document.getElementById("guestTitle");
    guestUID = document.getElementById("guestUID");
    guestName = document.getElementById("guestName");
    guestPin = document.getElementById("guestPin");
    guestPrints = document.getElementById("guestPrints");
    guestBill = document.getElementById("guestBill");
    guestFilament = document.getElementById("guestFilament");
    guestShowPrintsBtn = document.getElementById("guestShowPrints");
    guestDeleteBtn = document.getElementById("guestDelete");
    printListModal = document.getElementById("printListModal");
    printListModalTitle = document.getElementById("printListTitle");
    printListModalContainer = document.getElementById("printListContainer");
    printListModalPlaceholder = document.getElementById("PrintPlaceholder");
    printStatusOrdered = document.getElementById("printStatusOrdered");
    printStatusPrinting = document.getElementById("printStatusPrinting");
    printStatusComplete = document.getElementById("printStatusComplete");
    printStatusOther = document.getElementById("printStatusOther");
    printStatusNew = document.getElementById("printStatusNew");
    printCreationDate = document.getElementById("printCreationDate");
    printCancelBtn = document.getElementById("printCancel");
    adminVarArr = [dataElementContainer, elementPlaceholder, userModal, userTitle, userUID, userName,
        userUserName, userPassword, userPrints, userBill, userFilament, userAdminStatus, userShowPrintsBtn,
        userDeleteBtn, guestModal, guestTitle, guestUID, guestName, guestPin, guestPrints, guestBill, guestFilament,
        guestShowPrintsBtn, guestDeleteBtn, printListModal, printListModalTitle, printListModalContainer,
        printListModalPlaceholder, printStatusOrdered, printStatusPrinting, printStatusComplete,
        printStatusOther, printCreationDate, printStatusNew, printCancelBtn, offlineModal, offlineModalSpan,
        printModal, printTitle, printFilament, printTime, printSize, printInfill, printPrice, printStatus,
        printUpdateBtn, homeNavBtn, filamentsNavBtn, settingsNavBtn, signOutNavBtn];
}

function initializeFilamentPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    homeNavBtn = document.getElementById("homeNavBtn");
    filamentsNavBtn = document.getElementById("filamentsNavBtn");
    settingsNavBtn = document.getElementById("settingsNavBtn");
    signOutNavBtn = document.getElementById("signOutNavBtn");
    //Page Specific
    dataElementContainer = document.getElementById("filamentListContainer");
    elementPlaceholder = document.getElementById("FilamentPlaceholder");
    addFilamentBtn = document.getElementById("addFilament");
    filamentModal = document.getElementById("filamentModal");
    filamentTitle = document.getElementById("filamentTitle");
    filamentType = document.getElementById("filamentType");
    filamentWeight = document.getElementById("filamentWeight");
    filamentThickness = document.getElementById("filamentThickness");
    filamentCostPerRoll = document.getElementById("filamentCostPerRoll");
    filamentCostPerGram = document.getElementById("filamentCostPerGram");
    filamentUserCount = document.getElementById("filamentUserCount");
    filamentUpdateBtn = document.getElementById("filamentUpdate");
    filamentDeleteBtn = document.getElementById("filamentDelete");
    editFilamentModal = document.getElementById("editFilamentModal");
    editFilamentTitle = document.getElementById("editFilamentTitle");
    filamentEditTitle = document.getElementById("filamentEditTitle");
    filamentEditFilament = document.getElementById("filamentEditFilament");
    filamentEditFilamentContent = document.getElementById("filamentEditFilamentContent");
    filamentTypePlaceholder = document.getElementById("filamentTypePlaceholder");
    filamentEditFilamentNew = document.getElementById("filamentEditFilamentNew");
    filamentEditWeight = document.getElementById("filamentEditWeight");
    filamentWeightXS = document.getElementById("filamentWeightXS");
    filamentWeightS = document.getElementById("filamentWeightS");
    filamentWeightM = document.getElementById("filamentWeightM");
    filamentWeightXL = document.getElementById("filamentWeightXL");
    filamentWeightOther = document.getElementById("filamentWeightOther");
    filamentEditWeightNew = document.getElementById("filamentEditWeightNew");
    filamentEditThickness = document.getElementById("filamentEditThickness");
    filamentThicknessS = document.getElementById("filamentThicknessS");
    filamentThicknessM = document.getElementById("filamentThicknessM");
    filamentThicknessL = document.getElementById("filamentThicknessL");
    filamentThicknessOther = document.getElementById("filamentThicknessOther");
    filamentEditThicknessNew = document.getElementById("filamentEditThicknessNew");
    filamentEditCostPerRoll = document.getElementById("filamentEditCostPerRoll");
    filamentEditCostPerGram = document.getElementById("filamentEditCostPerGram");
    filamentEditUserCount = document.getElementById("filamentEditUserCount");
    filamentEditInfo = document.getElementById("filamentEditInfo");
    filamentEditUpdate = document.getElementById("filamentEditUpdate");
    filamentEditCancel = document.getElementById("filamentEditCancel");
    filamentVarArr = [dataElementContainer, elementPlaceholder, addFilamentBtn, filamentModal, filamentTitle,
        filamentType, filamentWeight, filamentThickness, filamentCostPerRoll, filamentCostPerGram,
        filamentUserCount, filamentUpdateBtn, filamentDeleteBtn, editFilamentModal, editFilamentTitle,
        filamentEditTitle, filamentEditFilament, filamentEditFilamentContent, filamentTypePlaceholder,
        filamentEditFilamentNew, filamentEditWeight, filamentWeightXS, filamentWeightS, filamentWeightM,
        filamentWeightXL, filamentWeightOther, filamentEditWeightNew, filamentEditThickness, filamentThicknessS,
        filamentThicknessM, filamentThicknessL, filamentThicknessOther, filamentEditThicknessNew,
        filamentEditCostPerRoll, filamentEditCostPerGram, filamentEditUserCount, filamentEditInfo, filamentEditUpdate,
        filamentEditCancel, offlineModal, offlineModalSpan, homeNavBtn, filamentsNavBtn, settingsNavBtn, signOutNavBtn];
}

function verifyVariableIntegrity(variableArr){
    let variableIntegrity = true;

    for(let i = 0; i < variableArr.length; i++){
        try{
            if (variableArr[i] != null) {
                //console.log("Variable Valid.");
                variableArr[i].innerHTML;
            } else {
                console.log("Variable #" + i + ": " + variableArr[i] + " Is Null.");
                variableIntegrity = false;
            }
        } catch (err) {
            console.log("Variable #" + i + ": " + variableArr[i] + " Was Not Initialized.");
            variableIntegrity = false;
        }
    }

    return variableIntegrity;
}