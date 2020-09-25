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
 * COMMON PAGE FUNCTIONS
 *
 * LOGIN FUNCTIONS
 *   - fetchConfig()
 *   - DBFetchAllUsers()
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
 *   - DBUpdateCurrentUser()
 *
 * DELETE DATA FUNCTIONS
 *   - DBDeletePrintData()
 *   - DBDeleteFilamentData()
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
let settingsBtn;
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

    if (findPageElement != null) {
        console.log("Initialize Index Page");
        pageChosenBool = true;
        initializeIndexPage();
        if(verifyVariableIntegrity(loginVarArr)) {
            pageInitializedBool = true;

            fetchConfig();

            DBFetchAllUsers();
        }
    }
    findPageElement = document.getElementById("homeTitleID");
    if (findPageElement != null) {
        console.log("Initialize Home Page");
        pageChosenBool = true;
        initializeHomePage();
        if(verifyVariableIntegrity(homeVarArr)) {
            pageInitializedBool = true;

            loadConfig();

            loadCurrentUser();
            DBUpdateCurrentUser();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();
        }
    }
    findPageElement = document.getElementById("settingsTitleID");
    if (findPageElement != null) {
        console.log("Initialize Settings Page");
        pageChosenBool = true;
        initializeSettingsPage();
        if(verifyVariableIntegrity(settingsVarArr)) {
            pageInitializedBool = true;

            loadConfig();

            loadCurrentUser();
            DBUpdateCurrentUser();
        }
    }
    findPageElement = document.getElementById("adminTitleID");
    if (findPageElement != null) {
        console.log("Initialize Admin Page");
        pageChosenBool = true;
        initializeAdminPage();
        if(verifyVariableIntegrity(adminVarArr)) {
            pageInitializedBool = true;

            loadConfig();

            loadAllUsers();
            DBFetchAllUsers();

            loadPrintData();
            DBFetchPrintData();

            loadFilamentData();
            DBFetchFilamentData();
        }
    }
    findPageElement = document.getElementById("filamentTitleID");
    if (findPageElement != null) {
        console.log("Initialize Filament Page");
        pageChosenBool = true;
        initializeFilamentPage();
        if(verifyVariableIntegrity(filamentVarArr)) {
            pageInitializedBool = true;

            loadConfig();

            loadAllUsers();
            DBFetchAllUsers();

            loadFilamentData();
            DBFetchFilamentData();
        }
    }

    if (!pageChosenBool || !pageInitializedBool) {
        alert("Page Not Properly Loaded! Please Turn Off AdBlockers And Refresh!");
    }
};



//COMMON PAGE FUNCTIONS
//common fxns here



//LOGIN FUNCTIONS
function fetchConfig(){
    //fetch config from local file

    //save config object
}

function DBFetchAllUsers(){
    //fetch all

    //save all
    //save current
}



//HOME FUNCTIONS
//home fxns here

//SETTINGS FUNCTIONS
//settings fxns here

//ADMIN FUNCTIONS
//admin fxns here

//FILAMENT FUNCTIONS
//filament fxns here

//FETCH DATA FUNCTIONS
function DBFetchPrintData(){
    //fetch

    //save
}

function DBFetchFilamentData(){
    //fetch

    //save
}



//LOAD DATA FUNCTIONS
function loadConfig(){
    //load
}

function loadCurrentUser(){
    //load
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
function DBUpdateCurrentUser(){
    //update

    //save
}



//DELETE DATA FUNCTIONS
function DBDeletePrintData(){
    //delete

    //save
}

function DBDeleteFilamentData(){
    //delete

    //save
}



//INITIALIZATION FUNCTIONS
function initializeIndexPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
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
        printUpdateBtn];
}

function initializeSettingsPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
    //Page Specific
    editNameInput = document.getElementById("nameInp");
    editUserNameInput = document.getElementById("userNameInp");
    editPinInput = document.getElementById("userPinInp");
    editConfirmPinInput = document.getElementById("userPinConfInp");
    editUpdateUserBtn = document.getElementById("updateUser");
    adminViewUsersBtn = document.getElementById("viewUsers");
    settingsVarArr = [editNameInput, editUserNameInput, editPinInput, editConfirmPinInput, editUpdateUserBtn,
        adminViewUsersBtn, offlineModal, offlineModalSpan];
}

function initializeAdminPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
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
    settingsBtn = document.getElementById("settingsBtn");
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
    adminVarArr = [settingsBtn, userListContainer, userListPlaceholder, userModal, userTitle, userUID, userName,
        userUserName, userPassword, userPrints, userBill, userFilament, userAdminStatus, userShowPrintsBtn,
        userDeleteBtn, guestModal, guestTitle, guestUID, guestName, guestPin, guestPrints, guestBill, guestFilament,
        guestShowPrintsBtn, guestDeleteBtn, printListModal, printListModalTitle, printListModalContainer,
        printListModalPlaceholder, printStatusOrdered, printStatusPrinting, printStatusComplete,
        printStatusOther, printCreationDate, printStatusNew, printCancelBtn, offlineModal, offlineModalSpan,
        printModal, printTitle, printFilament, printTime, printSize, printInfill, printPrice, printStatus,
        printUpdateBtn];
}

function initializeFilamentPage(){
    //Common
    offlineModal = document.getElementById("offlineModal");
    offlineModalSpan = document.getElementById("closeOffline");
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
        filamentEditCancel, offlineModal, offlineModalSpan];
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