const month = '04';
const day = '18';
const year = '2017';
const mets = 'nynmlb';
const opponent = 'phimlb';
const full_date = `${year}_${month}_${day}`;

const boxScore = fetch(`http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/gid_${full_date}_${opponent}_${mets}_1/boxscore.json`)
let bottomOrTop;
  boxScore
    .then(data => data.json())
    .then(data => {
      console.log(data.data.boxscore.home_fname)
        if (data.data.boxscore.home_fname === 'New York Mets') {
          bottomOrTop = 'bottom';
        }
        else bottomOrTop = 'top';
        let scoreDiv = document.querySelector('.score');
        if (bottomOrTop === 'bottom') {
          scoreDiv.innerHTML = `
            <div>Final score</div>
            <div>New York Mets: ${data.data.boxscore.linescore.home_team_runs}</div>
            <div>${data.data.boxscore.away_fname}: ${data.data.boxscore.linescore.away_team_runs}</div>
          `
        }
        else if (bottomOrTop === 'top') {
          scoreDiv.innerHTML = `
            <div>Final score</div>
            <div>New York Mets: ${data.data.boxscore.linescore.away_team_runs}</div>
            <div>${data.data.boxscore.home_fname}: ${data.data.boxscore.linescore.home_team_runs}</div>
          `
        }
    })
    .catch(err => console.error(err));

const gameEvent = fetch(`http://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/gid_${full_date}_${opponent}_${mets}_1/game_events.json`)
gameEvent
  .then(data => data.json())
  .then(data => data.data.game.inning.map(e => e[bottomOrTop].atbat))
  .then(at_bats_per_inning_bottom => {
    console.log(at_bats_per_inning_bottom)
    return at_bats_per_inning_bottom.map(at_bat_appearances => {
      return at_bat_appearances.map(at_bat_appearance => {
        console.log(at_bat_appearance.des)
        return at_bat_appearance.des
      })
    })
  })
  .then(events_per_inning => {
    Object.keys(events_per_inning).forEach(inning => {
      events_per_inning[inning].unshift(`<h5>inning ${Number(inning) + 1}</h5>`)
    });
    return events_per_inning.reduce((events, event) => {
      return events.concat(event)
    }, []);
  })
  .then(events => {
    console.log('events', events)
    let div = document.getElementById('list');
    let strikeouts = events.filter(e => {
      if (e === "Strikeout") return true;
    })
    events.map(e => {
      div.innerHTML += `<div class="batter-events">${e}</div>`
    })
  })
  .catch(err => {
    console.error(err);
  })
