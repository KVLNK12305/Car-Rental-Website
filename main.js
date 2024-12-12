const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.on('ready', createWindow);

// Helper function to read users from file
function readUsersFromFile() {
    const usersFilePath = path.join(__dirname, 'users.txt');
    let users = {};

    if (fs.existsSync(usersFilePath)) {
        try {
            const data = fs.readFileSync(usersFilePath, 'utf-8');
            users = data ? JSON.parse(data) : {};
        } catch (error) {
            console.error('Error reading or parsing users file:', error);
        }
    }

    return users;
}

// Helper function to write users to file
function writeUsersToFile(users) {
    const usersFilePath = path.join(__dirname, 'users.txt');
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

// Handle sign-up
ipcMain.on('sign-up', (event, userDetails) => {
    let users = readUsersFromFile();
    console.log("main.js----",users);   

    // Check if user already exists
    if (users[userDetails.email]) {
        event.reply('sign-up-response', 'User already exists');
        return;
    }

    // Save user details
    users[userDetails.email] = {
        email: userDetails.email,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName
    };

    writeUsersToFile(users);

    event.reply('sign-up-response', 'User registered successfully');
});

// Handle sign-in
ipcMain.on('sign-in', (event, email, password) => {
    let users = readUsersFromFile();
    console.log(users[email]);
    if (!users[email]) {
        event.reply('sign-in-response', 'User not found, please sign up first');
        return;
    }
    if (users[email].password === password) {
        event.reply('sign-in-response', `Welcome back, ${users[email].firstName} ${users[email].lastName}`);
    } else {
        event.reply('sign-in-response', 'Invalid email or password');
    }
});
