export default function loadState() {
    return {
        preload: function () {
            this.game.load.image('player', 'img/ship.png');
            this.game.load.image('star', 'img/star2.png');
            this.game.load.image('baddie', 'img/space-baddie.png');
            this.game.load.atlas('lazer', 'img/laser.png', 'img/laser.json');
        },
        create: function () {
            this.game.state.start('play');
        }
    }
}