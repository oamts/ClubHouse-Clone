export default class Attendee{
    constructor({id, username, img, isSpeaker, roomId, peerId}) {
        this.id = id
        //this.img = `https://picsum.photos/seed/${id}/75/75`
        this.img = imgn
        this.isSpeaker = isSpeaker
        this.roomId = roomId
        this.peerId = peerId

        const name = username || 'Usuário Anônimo'
        this.username = name

        const [firstName, lastName] = name.split(/\s/)
        //this.firstName = (new Chance(id).name({ nationality: 'it' }))
        this.firstName = firstName
        this.lastName = lastName
    }
}