const footballTeams = {  // Creating a object containing all teams, with there mvp players and names. Date of writing Jan/2022

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

// Array that will cotain all teams for easier access.

const allTeams = [footballTeams['Real Madrid'], footballTeams['Barca'], footballTeams['Atletico'], footballTeams['Manchester'], footballTeams['Liverpool'], footballTeams['Chelsea'], footballTeams['PSG'], footballTeams['Internazionale'], footballTeams['Juventus'], footballTeams['Bayern']];



const randTeams = arr => {// Chooses  2 random teams from the array and stores them in a new array

    let gameTeams = [];
    let randNum1 = Math.floor(Math.random() * arr.length);
    let randNum2 = Math.floor(Math.random() * arr.length);

    if (randNum1 === randNum2) randNum2++;

    gameTeams.push(arr[randNum1], arr[randNum2]);

    return gameTeams;


};



const randomPlayers = arr => { // Chooses two random players from the passed arrays

    const pPlayers = [];
    let randNum1 = Math.floor(Math.random() * arr[0].players.length);
    let randNum2 = Math.floor(Math.random() * arr[1].players.length);

    pPlayers.push(arr[0].players[randNum1], arr[1].players[randNum2]);

    return pPlayers;

}


const winner = arr => { //Chooses a random amount of goals and assigns it to one of the two teams. 

    const bothTeams = [arr[0].name, arr[1].name];
    const goals1 = Math.floor((Math.random() * 5) + 1);
    const goals2 = Math.floor((Math.random() * 5) + 1);

    if(goals1 > goals2) return arr[0].name; // If team 1 has more goals than team 2 then return that team.
    if(goals1 < goals2) return arr[1].name; // Same as before.
    if(goals1 === goals2) return bothTeams; // If both teams have the same amount of goals return both teams.

};

// Gives a score to both playes, the player with the most score wins.

const bestPlayer = (arr) => {

    const overalScore1 = Math.floor((Math.random() * 100) + 1);
    const overalScore2 = Math.floor((Math.random() * 100) + 1);

    if(overalScore1 === overalScore2)overalScore2++;
    if(overalScore1 > overalScore2) return arr[0];
    if(overalScore1 < overalScore2) return arr[1];
};

// Calling all functions


function genieMessage(){

    const teams = randTeams(allTeams);
    const possiblePlayers = randomPlayers(teams);
    const winnerTeam = winner(teams);
    const winnerPlayer = bestPlayer(possiblePlayers);
    const futureYear = Math.floor(Math.random() * 20) + 2022;
    const minute = Math.floor(Math.random() * 90);



    if(winnerTeam.length == 2){
        document.getElementById('pText').innerHTML = `In the year ${futureYear}, the champions game will result in a draw between ${winnerTeam[0]} and ${winnerTeam[1]}, with the best play being from ${winnerPlayer} who scored in the minute ${minute}.`;

    }else {

        document.getElementById('pText').innerHTML = `The winner of ${futureYear} champions game will be ${winnerTeam} with the best play being from ${winnerPlayer} who scored in the minute ${minute}.`
        
    }

}