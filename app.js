const gameEvent = fetch('http://gd2.mlb.com/components/game/mlb/year_2017/month_04/day_18/gid_2017_04_18_phimlb_nynmlb_1/game_events.json')
gameEvent
  .then(data => data.json())
  .then(data => data.data.game.inning.map(e => e.bottom.atbat))
  .then(at_bats_per_inning_bottom => {
    return at_bats_per_inning_bottom.map(at_bat_appearances => {
      return at_bat_appearances.map(at_bat_appearance => {
        console.log(at_bat_appearance.event)
        return at_bat_appearance.event
      })
    })
  })
  .then(events_per_inning => {
    return events_per_inning.reduce((events, event) => {
      return events.concat(event)
    }, []);
  })
  .then(events => {
    console.log('events', events)
    let div = document.getElementById('divID');
    let strikeouts = events.filter(e => {
      if (e === "Strikeout") return true;
    })
    events.map(e => {
      div.innerHTML += `<div class="batter_events">${e}</div>`
    })
  })
