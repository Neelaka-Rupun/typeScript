"use strict";
// // function log(message) {
// //     console.log(message);
// // }
// // var message = 'Hellow Neelaka';
Object.defineProperty(exports, "__esModule", { value: true });
// // log(message)
// import{ Point} from './point'
// let point = new Point(1, 2);
// let x =  point.x;
// point.x = 10;
// point.drow();
// // let drowPoint = (point : Point )=>{
// // }
// // drowPoint({
// //     X: 1,
// //     Y :2
// // })
var like_componet_1 = require("./like.componet");
var componet = new like_componet_1.LikeComponent(10, true);
componet.onClick();
console.log("likeCount:" + componet.likeCount + ", isSelected: " + componet.isSelected);
