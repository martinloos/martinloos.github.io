function discover(id) 
{
  let container = document.getElementById(id)
  container.classList.remove('-hidden')
}

export function birdFindsDestination() 
{
  let nest = window.location.pathname;
  if (nest !== '/') {
    let container = document.getElementById('home')
    container.classList.add('-hidden')
  }
  if (nest.includes('big-nest')) 
  {
    discover('big-nest')
  } 
  else if (nest.includes('nest-one'))
  {
    discover('nest-one')
  }
}