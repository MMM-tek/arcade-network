namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Speciall = SpriteKind.create()
    export const Render = SpriteKind.create()
}
function Desktop () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Speciall)
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    scene.setBackgroundImage(assets.image`DesktopWindows`)
    Chrome = sprites.create(assets.image`ChromeLogo`, SpriteKind.Button)
    Norton = sprites.create(assets.image`NortonLogo`, SpriteKind.Button)
    Chrome.setPosition(12, 12)
    Norton.setPosition(34, 12)
}
function nortonError () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    scene.setBackgroundImage(assets.image`Norton`)
    Ok = sprites.create(img`
        b b b b b b b b b b b b b b b b b b b b 
        b 1 1 1 1 1 c c c c 1 c 1 c 1 1 1 1 1 b 
        b 1 1 1 1 1 c 1 1 c 1 c 1 c 1 1 1 1 1 b 
        b 1 1 1 1 1 c 1 1 c 1 c c 1 1 1 1 1 1 b 
        b 1 1 1 1 1 c 1 1 c 1 c 1 c 1 1 1 1 1 b 
        b 1 1 1 1 1 c c c c 1 c 1 c 1 1 1 1 1 b 
        b b b b b b b b b b b b b b b b b b b b 
        `, SpriteKind.Button)
    Ok.setPosition(80, 95)
}
function newTab () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    scene.setBackgroundImage(assets.image`Google`)
    Search = sprites.create(assets.image`SearchBar`, SpriteKind.Button)
    Search.setPosition(65, 50)
    x_button()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Speciall, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Click()
    }
})
function startSearch (txt: string) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    scene.setBackgroundImage(assets.image`Wifi`)
    x_button()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Click()
    }
})
function x_button () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Speciall)
    x = sprites.create(assets.image`x`, SpriteKind.Speciall)
    x.setStayInScreen(true)
    x.setPosition(160, 0)
}
function Click () {
    if (mySprite.overlapsWith(Chrome)) {
        newTab()
    } else if (mySprite.overlapsWith(Search)) {
        startSearch(game.askForString("SEARCH ENTER A URL"))
    } else if (mySprite.overlapsWith(Norton)) {
        nortonError()
    } else if (mySprite.overlapsWith(x) || mySprite.overlapsWith(Ok)) {
        Desktop()
    }
}
let x: Sprite = null
let Search: Sprite = null
let Ok: Sprite = null
let Norton: Sprite = null
let Chrome: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
Desktop()
mySprite = sprites.create(img`
    f f . . . . . . . . 
    f f . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Cursor`, SpriteKind.Render)
mySprite2.z = 1000
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setFlag(SpriteFlag.Invisible, true)
controller.moveSprite(mySprite, 70, 70)
game.onUpdate(function () {
    mySprite2.setPosition(mySprite.x, mySprite.y)
})
