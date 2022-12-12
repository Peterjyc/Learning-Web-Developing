// define game variables
let gold = 0;
let wood = 0;
let food = 0;
let workers = 0;
let tools = 0;
let farms = 0;

// define functions to update the game state
function updateResources() {
  document.getElementById('gold').innerHTML = gold;
  document.getElementById('wood').innerHTML = wood;
  document.getElementById('food').innerHTML = food;
}

function updateActions() {
  document.getElementById('mine-gold').disabled = (gold >= 100);
  document.getElementById('chop-wood').disabled = (wood >= 100);
  document.getElementById('gather-food').disabled = (food >= 100);
}

function updateUpgrades() {
    if (gold < 0) {
      document.getElementById('hire-workers').disabled = true;
      document.getElementById('buy-tools').disabled = true;
      document.getElementById('build-farms').disabled = true;
    } else {
      document.getElementById('hire-workers').disabled = (gold >= 100);
      document.getElementById('buy-tools').disabled = (wood >= 100);
      document.getElementById('build-farms').disabled = (food >= 100);
    }
  }
// define functions to handle player actions
function mineGold() {
    gold += 1 * (1 + workers);
    updateResources();
    updateActions();
    updateUpgrades();
  }

  function chopWood() {
    wood += 1 * (1 + workers);
    updateResources();
    updateActions();
    updateUpgrades();
  }

  function gatherFood() {
    food += 1 * (1 + workers);
    updateResources();
    updateActions();
    updateUpgrades();
  }

  // define functions to handle player upgrades
  function hireWorkers() {
    let workerPrice = 100 * Math.pow(1.5, workers);
    gold -= workerPrice;
    workers += 1;
    updateResources();
    updateActions();
    updateUpgrades();
  }

  function buyTools() {
    wood -= 100;
    tools += 1;
    updateResources();
    updateActions();
    updateUpgrades();
  }
  function buildFarms() {
    let farmPrice = 100 * Math.pow(1.5, farms);
    food -= farmPrice;
    farms += 1;
    updateResources();
    updateActions();
    updateUpgrades();
  }

  // attach event listeners to the action buttons
  document.getElementById('mine-gold').addEventListener('click', mineGold);
  document.getElementById('chop-wood').addEventListener('click', chopWood);
  document.getElementById('gather-food').addEventListener('click', gatherFood);

  // attach event listeners to the upgrade buttons
  document.getElementById('hire-workers').addEventListener('click', hireWorkers);
  document.getElementById('buy-tools').addEventListener('click', buyTools);
  document.getElementById('build-farms').addEventListener('click', buildFarms);

  // update the game state when the page loads
  updateResources();
  updateActions();
  updateUpgrades();
