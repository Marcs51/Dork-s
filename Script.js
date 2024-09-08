// Get the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Add event listeners to each grid item
gridItems.forEach((item) => {
  item.addEventListener('click', handleItemClick);
});

function handleItemClick(event) {
  const item = event.target;
  const randomNumber = Math.random();

  // 20% chance of a bomb, 80% chance of a gem
  if (randomNumber < 0.2) {
    // Bomb!
    item.innerHTML = '<i class="fas fa-bomb"></i>';
    item.style.background = 'red';
    const mineRisk = document.querySelector('.mine-risk');
    mineRisk.textContent = 'Mine risk: 20%';
  } else {
    // Gem!
    item.innerHTML = '<i class="fas fa-gem"></i>';
    item.style.background = 'green';
    const gemsLeft = document.querySelector('.gems-left');
    const openedTiles = document.querySelector('.opened-tiles');
    gemsLeft.textContent = `Gems left: ${parseInt(gemsLeft.textContent.split(': ')[1]) + 1}`;
    openedTiles.textContent = `Opened tiles: ${parseInt(openedTiles.textContent.split('/')[0]) + 1}/${openedTiles.textContent.split('/')[1]}`;
  }
}
