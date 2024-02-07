export const Grid = (container, player, gameBoard) => {
    const list = gameBoard.objList

    const displayGrid = (isValid) => {
        for(let i=0;i<100;i++) {
            const cell = document.createElement('div')
            const name = isValid ? 'p2-cell' : 'p1-cell'
            cell.classList.add(name)

            // if(list[i].ship != null && list[i].attacked === null) {
            //     cell.classList.add('ship')
            // }else if(list[i].ship != null && list[i].attacked === true) {
            //     cell.classList.add('hit-ship')
            // }else if(list[i].skip === null && list[i].attacked === true) {
            //     cell.classList.add('hit-missed')
            // }

            // if(player.activeTurn === false ) {
            //     cell.classList.remove('inActive')
            //     cell.classList.add('active')
            // } else {
            //     cell.classList.add('inActive')
            //     cell.classList.remove('active')
            // }
            
            const rowIndex = Math.floor(i/10)
            const colIndex = i%10
            cell.dataset.row = rowIndex
            cell.dataset.col = colIndex
            container.appendChild(cell)
        }
    }

    const refreshGrid = (isPlayer) => {
        const name = isPlayer ? '.p1-cell' : '.p2-cell'
        const cellList = container.querySelectorAll(name);
        cellList.forEach((cell, index) => {
            const cellState = list[index];
            const className = isPlayer ? 'ship' : 'hidden-ship'
            if (cellState.ship !== null && cellState.attacked === null) {
                cell.classList.add(className);
            } else if (cellState.ship !== null && cellState.attacked === true) {
                cell.classList.add('hit-ship');
            } else if (cellState.ship === null && cellState.attacked === true) {
                cell.classList.add('hit-missed');
            }

            if (player.activeTurn === false) {
                cell.classList.remove('inActive');
                cell.classList.add('active');
            } else {
                cell.classList.add('inActive');
                cell.classList.remove('active');
            }
        });
    }

    return { displayGrid,refreshGrid }
}

//ToDo: create 10*10 board in website & return fn 