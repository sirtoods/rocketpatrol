// class Rocket extends Phaser.GameObjects.Sprite {
//     constructor(scene, x, y, texture) {
//         super(scene, x, y, texture);
//         scene.add.existing(this);
//         this.firing = false;
//         this.moveSpeed = 2;
//         this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx

//     }

// update() {
//     if (!this.firing) {
//             if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
//                 this.x -= this.moveSpeed;
//             } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
//                 this.x += this.moveSpeed;
//             }
//         }

//     if (Phaser.Input.Keyboard.JustDown(keyF) && !this.firing) {
//         this.firing = true;
//         this.sfxRocket.play();
//     }

//     if (this.firing && this.y >= borderUISize * 3 + borderPadding) {
//         this.y -= this.moveSpeed;
//     }

//     if (this.y <= borderUISize * 3 + borderPadding) {
//         this.reset();
//     }
// }

// reset() {
//     this.y = game.config.height - borderUISize - borderPadding;
//     this.firing = false;
// }
// }
// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isFiring = false;      // track rocket's firing status
        this.moveSpeed = 2;         // pixels per frame
        this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
