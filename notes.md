// Add jsdoc?

// function Game(width, height) {
//     this.width = width;
//     this.height = height;
// }

// Game.prototype = {

//   // Needs:
//   // "age" needs to be an integer and between 10 - 20
//   // "name" needs to be a string and max length 128
//   // "email" needs to be present and contain one @
//   setWidth: function(age, name, email) {
//     Need.intBetween(age, 10, 20);
//     // Need.intBetweenGroup([age1, age2, age3], 10, 20); // returns all

//     console.log("all ok...");
//     console.log(age);
//     console.log(name);
//     console.log(email);

//     /*
//     if (typeof age !== "number" || age < 10 || age > 20) {
//       throw new Error("age needs to be a number between 10 - 20");
//     }
//     if (typeof name !== "string" || name.length > 3) {
//       throw new Error("name needs to be a string and with a max length 3");
//     }
//     if (typeof email !== "string" || email.indexOf("@") === -1) {
//       throw new Error("email needs to be a string, and contain one @ mark");
//     }
//     */
//   }
// }

// var game = new Game(100, "100");
// game.setWidth(10, "sjo", "asds@dd.fi");

/*
var width = v.int(640).val();
var width = v.int(640).between(420, 230);
var width = v.int(200).range(30, 20)
var width = v.str("ju").match("/mauno/").val();
var width  = v.int(200);
var height = v.int(400);
var lol = v.isInt();
var lols = v.isInt().isBetween();
var je = v.int().isEq(300)
var lol = v.int().isLg()
var name  = valid.str("mauno");
var sexy  = valid.bool(true);

Tsekkaa että annettu arvo on int 400 ja väliltä 640 - 320

var width = valid().int(width);
var width = valid(width).intBetween(20, 40);
var width = valid(width).intEq(300);

valid(width).isInt();
valid(width).isIntBetween();

// Best API:

name:

types
strict-types
valid
solid

var width = type.int(width);
var width = type.intBetween(width, 20, 40);
var width = type.intEq(width, 200);

IntException
IntBetweenException
IntEqException

TypeIntException
TypeIntBetweenException

type.isInt();
type.isIntBetween();
type.isIntEq();
*/



- Make a library which provides following functionality:

this.width  = et.Integer(640, "640");
this.height = st.Integer(640);
this.yes    = st.Boolean(false, 0, "1", "0");
this.yay    = st.String("asd");
this.lol    = st.Double(20.0);
this.lol    = st.Number();
this.lol    = st.Hash(value);

- E.g. it allows to raise exception when value is different than the type.
- Make possibility to take optional parameters or silent the raised error
- Raise errors based on type e.g. IntegerException
- Use previous duckey validator so that you can do lang.isInteger() checks as well..


var Integer = function(value) {
  return value;
};

module.exports = EInteger;

JInteger
JString
JBoolean
JFloat

var lang = require("/strict-lang");

ELang.Integer // good

Elang.EInteger // bad

Elang.Integer.valid()

Elang.isInteger();

var lang = require("extra-lang");
var { EString } = require("extra-lang");

lang.Integer()
lang.String()