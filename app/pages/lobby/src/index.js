import LobbySocketBuilder from "./util/lobbySocketBuilder.js";
import {constants} from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import View from "./view.js";

const user = {
    img: 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-trinity-256.png',
    username: 'mts ' + Date.now()
}

const socketBuilder = new LobbySocketBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.lobby
})

const dependencies = {
    socketBuilder,
    user,
    view: View
}

await LobbyController.initialize(dependencies)