function bestTeam(player1, player2) {
    if (typeof player1 !== 'object' || typeof player2 !== 'object') {
        return 'Invalid';
    }
    const score1 = player1.foul + player1.cardY + player1.cardR;
    const score2 = player2.foul + player2.cardY + player2.cardR;

    if (score1 < score2) {
        return player1.name;
    }
    else if (score2 < score1) {
        return player2.name;
    }
    else {
        return 'Tie';
    }
}
const output1 = bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(output1);
