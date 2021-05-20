import SocketBuilder from "../../../_shared/SocketBuilder.js";
import {constants} from "../../../_shared/constants.js";

export default class LobbySocketBuilder extends SocketBuilder{
    constructor({socketUrl, namespace}) {
        super({socketUrl, namespace})
        this.onLobbyUpdated = () => { }
    }

    setOnLobbyUpdated(fn){
        this.onLobbyUpdated = fn

        return this
    }


    build(){
        const socket = super.build()

        socket.on(constants.events.LOBBY_UPDATED, this.onLobbyUpdated)

        return socket;
    }

}