const crypto = require('crypto');

function generateSessionCode() {
    const sessionCodeLength = 8; // You can adjust the length of the session code as per your requirements
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sessionCode = '';

    for (let i = 0; i < sessionCodeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        sessionCode += characters[randomIndex];
    }

    return sessionCode;
}

// ...
// Existing code
// ...
async function deleteThisUser(userId, sessionCode) {
    try {
        const user = await db.collection('users').doc(userId).get();

        if (!user.exists) {
            return {error: 'User not found!'};
        }

        const sessionCodes = user.data().sessionCodes;

        if (!sessionCodes.includes(sessionCode)) {
            return {error: 'Invalid session code!'};
        }

        // ...
        // Existing code
        // ...
    } catch (error) {
        console.log(error);
        return {error: 'Something went wrong!'};
    }
}