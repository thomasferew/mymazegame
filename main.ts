namespace SpriteKind {
    export const enemy2 = SpriteKind.create()
}
function hero () {
    othersprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . . 2 . . . 2 . . . . . . 
. . . . 2 2 . . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    othersprite.y = 150
    controller.moveSprite(othersprite, 100, 0)
    othersprite.setFlag(SpriteFlag.StayInScreen, true)
    info.startCountdown(50)
    info.setLife(1)
}
function say () {
    game.splash("dodge enemy and press A to shoot")
}
// when enemy overlaps with the player you destroy the
// enemy and you lose
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    villian.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    ball.destroy()
    villian.destroy()
    info.changeLifeBy(-1)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
})
// it creates a sprite to shoot when press a
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . 9 9 9 9 9 9 9 9 9 9 . . . . 
. . . 9 9 9 9 9 9 9 9 . . . . . 
. . . . 9 9 9 9 9 9 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, othersprite, 0, -50)
})
// set position and movement of enemy.
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    // set villian image
    villian.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 . . . . . . . 
. . . 3 3 3 3 3 3 3 . . . . . . 
. . 3 3 a 3 3 a 3 3 . . . . . . 
. . 3 3 3 3 3 3 3 3 3 . . . . . 
. . 3 3 3 3 a 3 3 a 3 . . . . . 
. 3 3 . 3 3 3 3 3 3 . . . . . . 
3 3 . . . 3 3 3 3 . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . 3 3 . . . . . . . . . . 
. . . . 3 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    villian.y = Math.randomRange(0, 120)
    villian.vy = 0
})
let mySprite2: Sprite = null
let ball: Sprite = null
let villian: Sprite = null
let othersprite: Sprite = null
hero()
say()
game.onUpdateInterval(500, function () {
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . 3 3 f 3 f 3 3 . . . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . 3 3 f f f 3 3 . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . 3 3 3 3 3 . . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.enemy2)
    villian.setPosition(63, 31)
    villian.setVelocity(Math.randomRange(0, 100), Math.randomRange(0, 100))
})
// set villain velocity forever
forever(function () {
    villian = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    villian.setPosition(0, Math.randomRange(0, 100))
    villian.vy = 70
    pause(500)
})
