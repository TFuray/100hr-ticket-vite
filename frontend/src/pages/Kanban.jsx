import { useState } from 'react'
import Board, { moveCard } from '@asseinfo/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'

const initialBoard = {
  columns: [
    {
      id: 1,
      title: 'To-Do',
      cards: [
        {
          id: 1,
          title: 'Write post',
          description: 'Write a new post for blog.'
        },
        {
          id: 2,
          title: 'Cook dinner',
          description: 'Cook an awesome dinner.'
        }
      ]
    },
    {
      id: 2,
      title: 'Done',
      cards: [
        {
          id: 3,
          title: 'Fix car',
          description: 'Fix my car problem'
        }
      ]
    }
  ]
}

const Kanban = () => {
  const [board, setBoard] = useState(initialBoard)

  function onCardMove (card, source, destination) {
    // Callback function implementaiton
    const updatedBoard = moveCard(board, source, destination)
    setBoard(updatedBoard)
    console.log('---------')
    console.log(card)
    console.log(source)
    console.log(destination)
    console.log(updatedBoard)
  }

  return (
    <Board onCardDragEnd={onCardMove} disavleColumnDrag>
      {board}
    </Board>
  )
}

export default Kanban
