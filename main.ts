namespace SpriteKind {
    export const hoop = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 . . . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.hoop, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................3............................................................................................................................
    ...................................3............................................................................................................................
    ...................................3............................................................................................................................
    ...................................3......................................................................3.....................................................
    ...................................3......................................................................3.....................................................
    ...................................3......................................................................3.....................................................
    ...................................3......................................................................3.....................................................
    ...................................3.....................................................................33.....................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3.....................................................................3......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................3....................................................................3.......................................................
    ...................................33...................................................................3.......................................................
    ....................................3...................................................................3.......................................................
    ....................................3...................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3..................................................................3.......................................................
    .....................................3.................................................................33.......................................................
    ....................................3..................................................................3........................................................
    ....................................3..................................................................3........................................................
    ....................................3.................................................................33........................................................
    ....................................33...............................................................33.........................................................
    ......................................333...........................................................33..........................................................
    ........................................33333333333.......................................3333333333............................................................
    ..................................................333333333333333333333................333......................................................................
    .......................................................................3333333333333333.........................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.setPosition(63, 98)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 . . . . 3 . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hoop)
mySprite2.setPosition(71, 23)
