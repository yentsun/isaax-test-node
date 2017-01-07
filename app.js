var cmd = require('node-cmd');
var InfiniteLoop = require('infinite-loop');


var il = new InfiniteLoop;

function cpuData() {
    cmd.get("top -bn2 | grep '%Cpu' | tail -1 | grep -P  '(....|...) id,' ", function(data) {
        console.log(data);
    });
}

il
    .add(cpuData)
    .onError(function(error) {
        console.log('ERROR: ', error.message);
    })
    .setInterval(5000)
    .run();