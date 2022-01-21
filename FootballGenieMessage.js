const footballTeams = {

    'Real Madrid': {

        players: ['Karim Benzema', 'Vini Jr.', 'Eden Hazard', "Gareth Bale"],
        name: 'Real Marid CF'

    },

    'Barca': {

        players: ['Ousmane Dembele', 'Ansu Fati', 'Ferran Torres', "Memphis Depay"],
        name: 'F.C. Barcelona'

    },

    'Atletico': {

        players: ['Antoine Griezmann', 'Luiz Suarez', 'Joao Felix', "Angel Correa"],
        name: 'Atletico de Madrid'

    },

    'Manchester': {

        players: ['Cristiano Ronaldo', 'Jadon Sancho', 'Marcos Rashford', "Anthony Elanga"],
        name: 'Manchester United F.C.'

    },

    'Liverpool': {

        players: ['Mohamed Salah', 'Takumi Minamino', 'Sadio Mane', "Roberto Firmino"],
        name: 'Liverpool F.C.'

    },

    'Chelsea': {

        players: ['Romeku Lukaku', 'Timo Werner', 'Reece James', "Callum Hudson"],
        name: 'Chelsea F.C.'

    },

    'PSG': {

        players: ['Lionel mesi', 'Neymar Jr.', 'Kylian Mbappe', "Mauro Icardi"],
        name: 'Paris Saint-Germain F.C.'

    },

    'Internazionale': {

        players: ['Alexis Sanchez', 'Lautaro Martinez', 'Edin Dzeko', "Martin Satriano"],
        name: 'Inter Milan'

    },

    'Juventus': {

        players: ['Paulo Dybala', 'Federco Chiesa', "Moise Kean"],
        name: 'Juventus F.C.'

    },

    'Bayern': {

        players: ['Robert Lewandoski', 'Thomas Muller', 'Kingsley Coman', "Leroy Sane"],
        name: 'FC Bayern Munich'

    }

};


const allTeams = [footballTeams['Real Madrid'], footballTeams['Barca'], footballTeams['Atletico'], footballTeams['Manchester'], footballTeams['Liverpool'], footballTeams['Chelsea'], footballTeams['PSG'], footballTeams['Internazionale'], footballTeams['Juventus'], footballTeams['Bayern']];


const randTeams = arr => {

    let gameTeams = [];
    let randNum1 = Math.floor(Math.random() * arr.length);
    let randNum2 = Math.floor(Math.random() * arr.length);

    if (randNum1 === randNum2) randNum2++;

    gameTeams.push(arr[randNum1], arr[randNum2]);

    return gameTeams;


};



const randomPlayers = arr => {

    const pPlayers = [];
    let randNum1 = Math.floor(Math.random() * arr[0].players.length);
    let randNum2 = Math.floor(Math.random() * arr[1].players.length);

    pPlayers.push(arr[0].players[randNum1], arr[1].players[randNum2]);

    return pPlayers;

}


const winner = arr => {

    const bothTeams = [arr[0].name, arr[1].name];
    const goals1 = Math.floor((Math.random() * 5) + 1);
    const goals2 = Math.floor((Math.random() * 5) + 1);

    if(goals1 > goals2) return arr[0].name;
    if(goals1 < goals2) return arr[1].name;
    if(goals1 === goals2) return bothTeams;

};

const bestPlayer = (arr) => {

    const overalScore1 = Math.floor((Math.random() * 100) + 1);
    const overalScore2 = Math.floor((Math.random() * 100) + 1);

    if(overalScore1 === overalScore2)overalScore2++;
    if(overalScore1 > overalScore2) return arr[0];
    if(overalScore1 < overalScore2) return arr[1];
};


const teams = randTeams(allTeams);
const possiblePlayers = randomPlayers(teams);
const winnerTeam = winner(teams);
const winnerPlayer = bestPlayer(possiblePlayers);
const futureYear = Math.floor(Math.random() * 20) + 2022;
const minute = Math.floor(Math.random() * 90);

if(winnerTeam.length == 2){
    console.log(`In the year ${futureYear}, the champions game will result in a draw between ${winnerTeam[0]} and ${winnerTeam[1]}, with the best play being from ${winnerPlayer} who scored in the minute ${minute}.`);
}else {

    console.log(`The winner of ${futureYear} champions game will be ${winnerTeam} with the best play being from ${winnerPlayer} who scored in the minute ${minute}.`);
}