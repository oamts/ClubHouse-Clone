import {constants} from "../../_shared/constants.js"
import RoomSocketBuilder from "./util/roomSocket.js";
import RoomController from "./controller.js";
import View from "./view.js";

const urlParams = new URLSearchParams(window.location.search)
const keys = ['id', 'topic']
const urlData = keys.map(key => [key, urlParams.get(key)])

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-trinity-256.png',
    username: 'mts ' + Date.now()
}

const roomInfo = {
    room: {...Object.fromEntries(urlData)},
    user
}

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const dependencies = {
    view: View,
    socketBuilder,
    roomInfo
}

await RoomController.initialize(dependencies)