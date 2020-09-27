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
 *   - fetchConfig()
 *   - DBFetchAllUsers()
 *   - initializeLoginFunctions()
 *   - login()
 *   - guestLogin()
 *   - signUp()
 *
 * HOME FUNCTIONS
 *   - initializeHomeFunctions()
 *
 * SETTINGS FUNCTIONS
 *   - initializeSettingsFunctions()
 *
 * ADMIN FUNCTIONS
 *   - initializeAdminFunctions()
 *
 * FILAMENT FUNCTIONS
 *   - initializeFilamentFunctions()
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
 *   - DBDeleteUserData(uid)
 *   - DBDeletePrintData(uid)
 *   - DBDeleteFilamentData(uid)
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
let configObj = {};
let listeningFirebaseRefs = [];
let allUserDBRef;
let currentUserDBRef;
let printDBRef;
let filamentDBRef;
let user = null;
let print = null;
let filament = null;
let userArr = [];
let printArr = [];
let filamentArr = [];
let DBInitialized = false;

//LOGIN VARS
let userNameInput;
let pinInput;
let loginBtn;
let loginGuestBtn;
let loginInfoFail;
let loginInfoSuccess;
let signUpFld;
let loginVarArr;

//HOME VARS
let printListContainer;
let printPlaceholder;
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
let userListContainer;
let userListPlaceholder;
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
let filamentListContainer;
let filamentPlaceholder;
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

    if (findPageElement != null) {
        console.log("Initialize Index Page");
        pageChosenBool = true;
        initializeIndexPage();
        if(verifyVariableIntegrity(loginVarArr)) {
            console.log("Index Page Successfully Initialized");
            pageInitializedBool = true;

            fetchConfig();

            while(true)
                if(DBInitialized)
                    break;

            DBFetchAllUsers();

            initializeLoginFunctions();
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

            while(true)
                if(DBInitialized)
                    break;

            loadCurrentUser();
            DBUpdateCurrentUser();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();

            initializeHomeFunctions();
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

            while(true)
                if(DBInitialized)
                    break;

            loadCurrentUser();
            DBUpdateCurrentUser();

            initializeSettingsFunctions();
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

            while(true)
                if(DBInitialized)
                    break;

            loadAllUsers();
            DBFetchAllUsers();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();

            initializeAdminFunctions();
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

            while(true)
                if(DBInitialized)
                    break;

            loadAllUsers();
            DBFetchAllUsers();

            loadFilamentData();
            DBFetchFilamentData();

            initializeFilamentFunctions();
            initializeNavBtns();
        }
    }

    if (!pageChosenBool || !pageInitializedBool) {
        alert("Page Not Properly Loaded! Please Turn Off AdBlockers And Refresh!");
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
function initializeDatabase(){
    console.log("Initializing Database");

    firebase.initializeApp(configObj);
    firebase.analytics();

    firebase.auth().signInAnonymously().catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Firebase Error: " + errorCode + ", " + errorMessage);
    });

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
        } else {
            // User is signed out.
        }
    });

    DBInitialized = true;
    console.log("Database Successfully Initialized!");
}

function findUIDItemInArr(item, userArray){
    for(var i = 0; i < userArray.length; i++){
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



//LOGIN FUNCTIONS
function fetchConfig(){
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
                    initializeDatabase();
                }
            }
        }
    });
}

function DBFetchAllUsers(){
    console.log("Fetching Users From Database");

    allUserDBRef = firebase.database().ref("users/");

    var fetchPosts = function (postRef) {
        postRef.on('child_added', function (data) {
            userArr.push(data.val());

            if(user != null)
                if(data.key == user.key)
                    user = data;
        });

        postRef.on('child_changed', function (data) {
            var i = findUIDItemInArr(data.key, userArr);
            if(userArr[i] != data.val() && i != -1){
                //console.log("Updating " + userArr[i].userName + " to most updated version: " + data.val().userName);
                userArr[i] = data;

                if(user != null)
                    if(data.key == user.key)
                        user = data;
            }
        });

        postRef.on('child_removed', function (data) {
            var i = findUIDItemInArr(data.key, userArr);
            userArr.splice(i, 1);
        });
    };

    fetchPosts(allUserDBRef);

    listeningFirebaseRefs.push(allUserDBRef);
}

function initializeLoginFunctions(){
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

function login(){

}

function guestLogin(){
    //open guestModal
}

function signUp(){
    //open signUpModal
}



//HOME FUNCTIONS
function initializeHomeFunctions() {

}

//SETTINGS FUNCTIONS
function initializeSettingsFunctions() {

}

//ADMIN FUNCTIONS
function initializeAdminFunctions() {

}

//FILAMENT FUNCTIONS
function initializeFilamentFunctions() {

}

//FETCH DATA FUNCTIONS
function DBFetchCurrentUser(){

    currentUserDBRef = firebase.database().ref("users/" + user.uid);
    //fetch

    //save
}

function DBFetchPrintData(){

    printDBRef = firebase.database().ref("prints/");
    //fetch

    //save
}

function DBFetchFilamentData(){

    filamentDBRef = firebase.database().ref("filaments/");
    //fetch

    //save
}



//LOAD DATA FUNCTIONS
function loadConfig(){
    configObj = JSON.parse(sessionStorage.config);
}

function loadCurrentUser(){
    //load
    //show filaments nav btn
    //show admin btn (with try/catch)
}

function loadAllUsers(){
    //load
}

function loadPrintData(){
    //load
}

function loadFilamentData(){
    //load
}



//UPDATE DATA FUNCTIONS
function DBUpdateCurrentUser(user){
    //update

    //save
}

function DBUpdatePrintData(print){
    //update

    //save
}

function DBUpdateFilamentData(filament){
    //update

    //save
}



//DELETE DATA FUNCTIONS
function DBDeleteUserData(uid){
    //delete

    //save
    //reload
}
function DBDeletePrintData(uid){
    //delete

    //save
    //reload
}

function DBDeleteFilamentData(uid){
    //delete

    //save
    //reload
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
    loginVarArr = [userNameInput, pinInput, loginBtn, loginGuestBtn, loginInfoFail, loginInfoSuccess, signUpFld,
        offlineModal, offlineModalSpan];
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
    printListContainer = document.getElementById("printListContainer");
    printPlaceholder = document.getElementById("PrintPlaceholder");
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
    homeVarArr = [printListContainer, printPlaceholder, upgradeUserBtn, addPrintBtn, printDeleteBtn, editPrintModal,
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
    userListContainer = document.getElementById("userListContainer");
    userListPlaceholder = document.getElementById("UserPlaceholder");
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
    adminVarArr = [userListContainer, userListPlaceholder, userModal, userTitle, userUID, userName,
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
    filamentListContainer = document.getElementById("filamentListContainer");
    filamentPlaceholder = document.getElementById("FilamentPlaceholder");
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
    filamentVarArr = [filamentListContainer, filamentPlaceholder, addFilamentBtn, filamentModal, filamentTitle,
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