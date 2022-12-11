// function cake(input) {
//   let index = 0;

//   let width = Number(input[index]);
//   index++;
//   let length = Number(input[index]);
//   index++;
//   let piecesTaken = input[index];
//   index++;

//   let actualSize = width * length;
//   let piecesLeft = 0;

//   while (piecesTaken !== "Stop") {
//     piecesTaken = Number(piecesTaken);
//     piecesTaken++;

//     piecesLeft = actualSize - piecesTaken;

//     if (piecesLeft < 0) {
//       piecesLeft = Math.abs(piecesLeft);
//       console.log(`No more cake left! You need ${piecesLeft} pieces more.`);
//       return;
//     }
//   }

// }

function cake(input) {
    let width = Number(input.shift());
    let lenght = Number(input.shift());
    let volume = width * lenght;
    let total = 0;
    while (volume >= total) {
        let current = input.shift();
        if (current === "STOP") {
            break;
        }
        let piece = Number( current );
        total += piece;
    }
    if (total > volume) {
        let need = total - volume;
        console.log(`No more cake left! You need ${need} pieces more.`);
    } else{
        let left = volume - total;
        console.log(`${left} pieces are left.`);
    }
}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"])
