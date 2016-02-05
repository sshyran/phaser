/* global Phaser:true */
/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

/**
* @namespace Phaser
*/
var Phaser = Phaser || {

    /**
    * The Phaser version number.
    * @constant
    * @type {string}
    */
    VERSION: '2.5.0-dev',

    /**
    * An array of Phaser game instances.
    * @constant
    * @type {array}
    */
    GAMES: [],

    /**
    * AUTO renderer - picks between WebGL or Canvas based on device.
    * @constant
    * @type {integer}
    */
    AUTO: 0,

    /**
    * Canvas Renderer.
    * @constant
    * @type {integer}
    */
    CANVAS: 1,

    /**
    * WebGL Renderer.
    * @constant
    * @type {integer}
    */
    WEBGL: 2,

    /**
    * Headless renderer (not visual output)
    * @constant
    * @type {integer}
    */
    HEADLESS: 3,

    /**
    * Direction constant.
    * @constant
    * @type {integer}
    */
    NONE: 0,

    /**
    * Direction constant.
    * @constant
    * @type {integer}
    */
    LEFT: 1,

    /**
    * Direction constant.
    * @constant
    * @type {integer}
    */
    RIGHT: 2,

    /**
    * Direction constant.
    * @constant
    * @type {integer}
    */
    UP: 3,

    /**
    * Direction constant.
    * @constant
    * @type {integer}
    */
    DOWN: 4,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    SPRITE: 0,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    BUTTON: 1,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    IMAGE: 2,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    GRAPHICS: 3,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    TEXT: 4,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    TILESPRITE: 5,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    BITMAPTEXT: 6,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    GROUP: 7,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    RENDERTEXTURE: 8,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    TILEMAP: 9,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    TILEMAPLAYER: 10,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    EMITTER: 11,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    POLYGON: 12,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    BITMAPDATA: 13,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    CANVAS_FILTER: 14,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    WEBGL_FILTER: 15,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    ELLIPSE: 16,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    SPRITEBATCH: 17,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    RETROFONT: 18,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    POINTER: 19,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    ROPE: 20,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    CIRCLE: 21,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    RECTANGLE: 22,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    LINE: 23,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    MATRIX: 24,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    POINT: 25,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    ROUNDEDRECTANGLE: 26,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    CREATURE: 27,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    VIDEO: 28,

    /**
    * Game Object type.
    * @constant
    * @type {integer}
    */
    PENDING_ATLAS: -1,

    blendModes: PIXI.BLEND_MODES,
    scaleModes: PIXI.SCALE_MODES

};
