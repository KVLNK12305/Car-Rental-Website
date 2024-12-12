const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    signUp: (userDetails) => ipcRenderer.send('sign-up', userDetails),
    onSignUpResponse: (callback) => ipcRenderer.on('sign-up-response', (event, response) => callback(response)),
    signIn: (email, password) => ipcRenderer.send('sign-in', email, password),
    onSignInResponse: (callback) => ipcRenderer.on('sign-in-response', (event, response) => callback(response)),
});
