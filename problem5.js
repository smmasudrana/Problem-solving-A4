// function resultReport(marks) {
//     if (!Array.isArray(marks)) {
//         return "Invalid";
//     }

//     if (marks.length === 0) {
//         return { finalScore: 0, pass: 0, fail: 0 };
//     }

//     let sum = 0;
//     let pass = 0;
//     let fail = 0;

//     for (const num of marks) {
//         sum += num;
//         if (num >= 40) {
//             pass++;
//         } else {
//             fail++;
//         }
//     }
//     let finalScore = Math.round(sum / marks.length);
//     return { finalScore, pass, fail };
// }


// const output = resultReport([98, 87, 67, 91, 92, 33, 87]);
// console.log(output);



function resultReport(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let sum = 0;
    let pass =[];
    let fail =[];

    for (const num of marks) {
        sum = sum + num;
        if (num >= 40) {
            pass.push(num)
        } else {
            fail.push(num)
        }
    }
    let finalScore = Math.round(sum / marks.length);
    return { finalScore, pass: pass.length, fail: fail.length };
}

const output = resultReport([]);
console.log(output);