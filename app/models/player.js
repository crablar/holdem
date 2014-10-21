var Player = function(name){
    this.name = name;
    this.chipCount = 100;
}

Player.prototype = {
    setHand : function(hand){
        this.hand = hand;
    }
}