var Game = function(future){
    this.future = future;
}

Game.prototype = {
    dealFlop: function(){
        return future.flop;
    },
    dealTurn: function(){
        return future.turn;
    },
    dealRiver: function(){
        return future.river;
    }
}