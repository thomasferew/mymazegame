controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 . . . . . . . . 
. . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 50, 100)
})
info.onCountdownEnd(function () {
    game.splash("")
    game.over(true)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let projectile2: Sprite = null
let hero: Sprite = null
game.splash("")
hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f f f f f f . . . . . 
. . . f f f f f f f f . . . . . 
. . . f f f f f f f f f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . . f . . . f . . . . . . 
. . . . f f . . . f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
hero.x += 150
controller.moveSprite(hero, 100, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(10)
forever(function () {
    mySprite = sprites.create(img`
. . . 7 7 7 7 7 7 7 7 . . . . . 
. . . 7 7 2 2 7 2 2 7 . . . . . 
. . . 7 7 2 4 7 4 2 7 . . . . . 
. f f 7 7 7 7 7 7 7 7 f f . . . 
. f f 7 2 1 1 1 1 7 7 f f . . . 
. f f 7 7 2 2 2 2 7 7 f f . . . 
f f f f f 7 7 7 7 f f f f f . . 
f f f f f f f f f f f f f f . . 
f f f f f f f f f f f f f f . . 
f f f . f f f f f f . f f f . . 
f f f . f f f f f f . f f f . . 
f f f . f f f f f f . f f f . . 
f 7 f . f f f f f f . f 7 f . . 
7 7 7 . f f . . f f . 7 7 7 . . 
. . . . f f . . f f . . . . . . 
. . . f f f . . f f f . . . . . 
`, SpriteKind.Enemy)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . c c c c c c . . . . . . 
. . c c c 2 c c c c . . . . . . 
. . 1 1 c c c c c c c . c c c c 
. . c c c c c c c c . c c . . . 
. . . c c . . c c . . . . . . . 
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
