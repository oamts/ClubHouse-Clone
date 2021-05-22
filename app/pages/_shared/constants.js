export const constants = {
    socketUrl: 'http://localhost:3000',
    socketNamespaces: {
        room: 'room',
        lobby: 'lobby'
    },
    peerConfig: Object.values({
        id: undefined,
        /*config: {
            port: 9000,
            host: 'localhost',
            path: '/'
        }*/
    }),
    pages: {
        lobby: '/pages/lobby',
        login: '/pages/login',
    },
    events: {
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',

        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'lobbyUpdated',
        UPGRADE_USER_PERMISSION: 'upgradeUserPermission',

        SPEAK_REQUEST: 'speakRequest',
        SPEAK_ANSWER: 'speakAnswer',
    },
    firebaseConfig: {
        apiKey: "AIzaSyDEzcQlJZhXD_wnuklNmMjSVW-CWyte298",
        authDomain: "clubhouse-clone-99624.firebaseapp.com",
        projectId: "clubhouse-clone-99624",
        storageBucket: "clubhouse-clone-99624.appspot.com",
        messagingSenderId: "941233484036",
        appId: "1:941233484036:web:8c6d334c2c105db7832051",
        measurementId: "G-1105NHW83G"
    },
    storageKey: 'jsexpert:storage:user'
}