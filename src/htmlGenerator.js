export function createInfoContainer() {
    // document.body.style.backgroundImage = "url('../src/assets/images/battleShip.jpeg')"
    // Create the info container div
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    // Create and append elements inside the info container
    const heading = document.createElement('h1');
    heading.textContent = 'BattleShip';
    infoContainer.appendChild(heading);

    const description1 = document.createElement('p');
    description1.textContent = "Destroy All Enemy's Ship to be Winner";
    infoContainer.appendChild(description1);

    const players = document.createElement('p');
    players.textContent = "Players";
    infoContainer.appendChild(players);

    const playersList = document.createElement('ul');
    const playerItem = document.createElement('li');
    playerItem.textContent = "Player";
    playersList.appendChild(playerItem);
    const computerItem = document.createElement('li');
    computerItem.textContent = "Computer";
    playersList.appendChild(computerItem);
    infoContainer.appendChild(playersList);

    const goal = document.createElement('p');
    goal.textContent = "Goal";
    infoContainer.appendChild(goal);

    const goalDescription = document.createElement('p');
    goalDescription.textContent = "Sink all of your opponents ship";
    infoContainer.appendChild(goalDescription);

    const setUp = document.createElement('p');
    setUp.textContent = "SetUp";
    infoContainer.appendChild(setUp);

    const setUpDescription = document.createElement('p');
    setUpDescription.textContent = "Each Ship will be Randomly Placed";
    infoContainer.appendChild(setUpDescription);

    const rulesHeading = document.createElement('h4');
    rulesHeading.textContent = "Rules";
    infoContainer.appendChild(rulesHeading);

    const rulesList = document.createElement('ul');
    const rule1 = document.createElement('li');
    rule1.textContent = "Each have one chance alternatively given";
    rulesList.appendChild(rule1);
    const rule2 = document.createElement('li');
    rule2.textContent = "If a Ship is hit the grid will be ";
    const rule2Span = document.createElement('span');
    rule2Span.style.color = "red";
    rule2Span.textContent = "Red Color";
    rule2.appendChild(rule2Span);
    rulesList.appendChild(rule2);
    const rule3 = document.createElement('li');
    rule3.textContent = "Missed Means it will be ";
    const rule3Span = document.createElement('span');
    rule3Span.style.color = "#8aeb52";
    rule3Span.textContent = "Green Color";
    rule3.appendChild(rule3Span);
    rulesList.appendChild(rule3);
    const rule4 = document.createElement('li');
    rule4.textContent = "If a Ship is Sunk it will be displayed";
    rulesList.appendChild(rule4);
    const rule5 = document.createElement('li');
    rule5.textContent = "If all ship sunk the game Ends";
    rulesList.appendChild(rule5);
    infoContainer.appendChild(rulesList);

    const startButton = document.createElement('button');
    startButton.classList.add('start');
    startButton.textContent = 'Start';
    infoContainer.appendChild(startButton);

    return infoContainer;
}

export function createGameElements() {

    const isValid = document.querySelector('.info-container')
    if(isValid) {
        isValid.remove()
    }
    // Create the container divs
    const tagDisplay = document.createElement('div');
    tagDisplay.classList.add('tagDisplay');

    const container = document.createElement('div');
    container.classList.add('container');

    const p1Container = document.createElement('div');
    p1Container.classList.add('p1-container');

    const p2Container = document.createElement('div');
    p2Container.classList.add('p2-container');

    const displayWrap = document.createElement('div');
    displayWrap.classList.add('display-wrap');

    const displayMsg = document.createElement('h2');
    displayMsg.classList.add('display-msg');

    // Append elements to their respective parent elements
    container.appendChild(p1Container);
    container.appendChild(p2Container);
    displayWrap.appendChild(displayMsg);

    // Append container divs and display message div to the document
    const body = document.body;
    body.appendChild(tagDisplay);
    body.appendChild(container);
    body.appendChild(displayWrap);


    const player1 = document.querySelector('.tagDisplay')
    const msg = document.createElement('h2')
    const bot = document.createElement('h2')
    msg.textContent = "Player 01"
    player1.appendChild(msg)
    bot.textContent = "Computer"
    player1.appendChild(bot)
}
