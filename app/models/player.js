var Player = function(name){
    this.name = name;
    this.chipCount = 200;
}

Player.prototype = {
    setHand : function(hand){
        this.hand = hand;
    }
}