function discover(id) 
{
  let container = document.getElementById(id)
  container.classList.remove('-hidden')
}

export function birdFindsDestination(nest) 
{
  if (nest !== '') {
    let container = document.getElementById('home')
    container.classList.add('-hidden')
  }
  if (nest.includes('nest-one'))
  {
    discover('nest-one')
  }
}