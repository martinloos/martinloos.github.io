import { birdFindsDestination } from './bird';

function getContainer(id) 
{
  let container = document.getElementById(id)
  return container
}

birdFindsDestination()

window.onload = function() {
if (!getContainer('big-nest').classList.contains('-hidden')) 
{
    console.log('discovered big nest')
}

if (!getContainer('nest-one').classList.contains('-hidden')) 
{
    console.log('discovered nest one')
}
}