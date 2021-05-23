import LobbySocketBuilder from "./util/lobbySocketBuilder.js";
import {constants} from "../../_shared/constants.js";
import LobbyController from "./controller.js";
import View from "./view.js";
import UserDb from "../../_shared/userDb.js";

const user = Object.keys(UserDb.get()).length
    ? UserDb.get()
    :   {
        img: 'https://cdn4.iconfinder.com/data/icons/toys-childhood-12/60/robot__face__toy__kids__play-256.png',
        username: 'guest ' + Date.now()
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

LobbyController.initialize(dependencies)
.catch(error =>{
    alert(error.message)
})