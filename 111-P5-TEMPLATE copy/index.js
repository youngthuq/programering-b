let client
let info

function setup(){
    info = select('#info')
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', ()=>{
        info.html('connected to nextservices.dk with id' + id)

        client.subscribe('programering')
        client.on('message', (topic, message)=>{
            info.html('modtog besked:' + message + 'på emnet:' + topic)
        })
    })
}
