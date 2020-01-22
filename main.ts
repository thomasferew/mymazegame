function villain () {
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
`, SpriteKind.Enemy)
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
}
function doSomething () {
	
}
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
// when enemy overlaps with the player you destroy the
// enemy and you lose
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    othersprite.destroy()
    game.over(false)
})
function projectile () {
    projectile2 = sprites.createProjectileFromSprite(img`
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
`, othersprite, 50, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    ball.destroy()
    villian.destroy()
    info.changeScoreBy(1)
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
    villian.vy = 80
})
let mySprite2: Sprite = null
let projectile2: Sprite = null
let ball: Sprite = null
let othersprite: Sprite = null
let villian: Sprite = null
hero()
villain()
projectile()
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
