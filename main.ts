sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let hero = sprites.create(img`
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
hero.x += 150
controller.moveSprite(hero, 100, 100)
hero.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(10)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c . . . . . . . 
. . . . . c c c c c c . . . . . 
. . . c c . c c c c c . . . . . 
. . c c . c c c c c c c c c c . 
. . c c c c c c . . . . c . . c 
. . c . . . c . . . . c c . c . 
. . c c c . . . . . . c c . c . 
. . . . . c c c c c c c c c c . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
