//if else statement
let userRole ="admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

//nestef if else statement
let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage ="Welcome, Admin!";
    } else {
        userMessage ="Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

//switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory ="Manager";
        break;
    case "subscriber":
        userCategory ="Subscriber";
        break;
    default:
        userCategory ="Unknown";
}

console.log("User Category:", userCategory);

//Ternary operator
let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let checkAccess = prompt("What is your role?");
let role;

switch (checkAccess) {
    case "Employee":
        role = "You are authorized to access 'Dietary Services'.";
        break;
    case "Enrolled Member":
        role = "You are authorized to access 'Dietary Services' and have one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        role = "You are authorized to have partial access to 'Dietary Services'.";
        break;
    default:
        role ="You need to enroll first to avail the facility.";    
}

console.log(role);