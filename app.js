$(document).ready(function() {
  const month = '04';
  const day = '11';
  const year = '2017';
  const mets = 'nynmlb';
  const opponent = 'phimlb';
  const metsHome = false;
  const fullDate = `${year}_${month}_${day}`;

//   const url = metsHome ?
//     `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/gid_${fullDate}_${opponent}_${mets}_1` :
//     `http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/gid_${fullDate}_${mets}_${opponent}_1`
//
//   const boxScore = fetch(`${url}/boxscore.json`);
//   let bottomOrTop;
//     boxScore
//       .then(data => data.json())
//       .then(data => {
//         console.log(data.data.boxscore.home_fname)
//           if (data.data.boxscore.home_fname === 'New York Mets') {
//             bottomOrTop = 'bottom';
//           }
//           else bottomOrTop = 'top';
//           if (bottomOrTop === 'bottom') {
//             var opposingTeam = data.data.boxscore.away_fname;
//             $('.score').html(`
//               <div>Final score</div>
//               <div>${data.data.boxscore.away_fname}: ${data.data.boxscore.linescore.away_team_runs}</div>
//               <div>New York Mets: ${data.data.boxscore.linescore.home_team_runs}</div>
//             `)
//           }
//           else if (bottomOrTop === 'top') {
//             var opposingTeam = data.data.boxscore.home_fname;
//             $('.score').html(`
//               <div>Final score</div>
//               <div>New York Mets: ${data.data.boxscore.linescore.away_team_runs}</div>
//               <div>${data.data.boxscore.home_fname}: ${data.data.boxscore.linescore.home_team_runs}</div>
//             `);
//           }
//           $('.title').html(`<div class="title">Outcome of every New York Mets at bat on ${fullDate} vs ${opposingTeam}</div>`)
//       })
//       .catch(err => console.error(err));
//
//   const gameEvent = fetch(`${url}/game_events.json`);
//   gameEvent
//     .then(data => data.json())
//     .then(data => data.data.game.inning.map(e => e[bottomOrTop].atbat))
//     .then(at_bats_per_inning => {
//       console.log(at_bats_per_inning)
//       return at_bats_per_inning.map(at_bat_appearances => {
//         return at_bat_appearances.map(at_bat_appearance => {
//           console.log(at_bat_appearance.des)
//           return at_bat_appearance.des
//         });
//       });
//     })
//     .then(events_per_inning => {
//       Object.keys(events_per_inning).forEach(inning => {
//         events_per_inning[inning].unshift(`<h5>inning ${Number(inning) + 1}</h5>`)
//       });
//       return events_per_inning.reduce((events, event) => {
//         return events.concat(event)
//       }, []);
//     })
//     .then(events => {
//       console.log('events', events)
//       let homer = events.filter(e => {
//         if (e.includes('homers')) return true;
//       })
//       console.log(homer);
//       // homer.map(e => {
//       //   $('.list').append(`<div class="batter-events">${e}</div>`)
//       // })
//       events.map(e => {
//         $('.list').append(`<div class="batter-events">${e}</div>`);
//       })
//     })
//     .catch(err => {
//       console.error(err);
//     })

const scoreBoard = fetch('http://gd2.mlb.com/components/game/mlb/year_2017/month_04/day_26/miniscoreboard.json');
  scoreBoard
    .then(data => data.json())
    .then(data => {
      console.log(data.data.games.game)
      data.data.games.game.map(game => console.log(
        `${game.away_team_city}: ${game.away_team_runs} vs ${game.home_team_city}: ${game.home_team_runs} status: ${game.status}`
        // I also would want to grab: the link to the game, outs, inning, bottom or top, runs hits errors
      ))
    })


})
