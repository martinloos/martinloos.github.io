import { birdFindsDestination } from './bird.js';

function getContainer(id) 
{
  let container = document.getElementById(id)
  return container
}

const searchParam = window.location.search
birdFindsDestination(searchParam)

window.onload = function() {
if (!getContainer('nest-one').classList.contains('-hidden')) 
{
    console.log('discovered nest one')
}
}