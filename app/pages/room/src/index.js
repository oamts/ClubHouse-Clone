import {constants} from "../../_shared/constants.js"
import RoomSocketBuilder from "./util/roomSocket.js";
import RoomController from "./controller.js";
import View from "./view.js";
import PeerBuilder from "../../_shared/peerBuilder.js";
import RoomService from "./service.js";
import Media from "../../_shared/media.js";
import UserDb from "../../_shared/userDb.js";

const urlParams = new URLSearchParams(window.location.search)
const keys = ['id', 'topic']
const urlData = keys.map(key => [key, urlParams.get(key)])

const user = Object.keys(UserDb.get()).length
    ? UserDb.get()
    :   {
        img: 'https://cdn4.iconfinder.com/data/icons/toys-childhood-12/60/robot__face__toy__kids__play-256.png',
        username: 'guest ' + Date.now()
    }

const roomInfo = {
    room: {...Object.fromEntries(urlData)},
    user
}

const peerBuilder = new PeerBuilder({
    peerConfig: constants.peerConfig
})

const socketBuilder = new RoomSocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const roomService = new RoomService({
    media: Media
})

const dependencies = {
    view: View,
    socketBuilder,
    roomInfo,
    roomService,
    peerBuilder
}

RoomController.initialize(dependencies)
.catch(error =>{
    alert(error.message)
})