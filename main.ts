
// // function log(message) {
// //     console.log(message);
// // }
// // var message = 'Hellow Neelaka';

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

import { LikeComponent } from './like.componet';

let componet = new LikeComponent(10, true);
componet.onClick();
console.log(`likeCount:${componet.likeCount}, isSelected: ${componet.isSelected}`)

