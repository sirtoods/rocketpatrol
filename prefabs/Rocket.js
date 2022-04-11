class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.firing = false;
        this.moveSpeed = 2;
    }

update() {
        if (this.firing) {
            this.y -= 10;
            if (this.y < 0) {
                this.reset();
            }
        }
    }

reset() {
    this.y = 431;
    this.firing = false;
}
}