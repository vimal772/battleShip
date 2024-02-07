export const Grid = (container, player, gameBoard) => {
    const list = gameBoard.objList

    const displayGrid = () => {
        for(let i=0;i<100;i++) {
            const cell = document.createElement('div')
            cell.classList.add('cell')

            if(list[i].ship != null && list[i].attacked === null) {
                cell.classList.add('ship')
            }else if(list[i].ship != null && list[i].attacked === true) {
                cell.classList.add('hit-ship')
            }else if(list[i].skip === null && list[i].attacked === true) {
                cell.classList.add('hit-missed')
            }

            if(player.activeTurn === false ) {
                cell.classList.remove('inActive')
                cell.classList.add('active')
            } else {
                cell.classList.add('inActive')
                cell.classList.remove('active')
            }
        }
    }
}

//ToDo: create 10*10 board in website & return fn 