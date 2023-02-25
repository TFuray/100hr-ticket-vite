import { useState } from 'react'

const Table = ({ open, table, seats, handleToggleOpen }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div class='group relative block h-64 sm:h-60 lg:w-72'>
      <span class='absolute inset-0 border-2 border-dashed border-black'></span>

      <div
        onClick={() => handleToggleOpen(table)}
        // onClick={() => setShowModal(true)}
        className={
          open
            ? 'relative flex h-60 transform items-end border-2 bg-green-700 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'
            : 'relative flex h-60 transform items-end border-2 bg-red-500 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'
        }
      >
        <div class='p-4 text-white !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-10 w-10 sm:h-12 sm:w-12'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <h2 class='mt-4 text-xl font-medium sm:text-2xl'>Table: {table}</h2>
          <h3 className="mt-4 text-md font-thin sm:text-2xl">Seats: {seats}</h3>
        </div>

        <div class='absolute p-4 opacity-0 transition-opacity text-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-10 w-10 sm:h-12 sm:w-12'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <h2 class='mt-4 text-xl font-medium sm:text-2xl'>Table: {table}</h2>
          <h3 className="mt-4 text-md font-thin sm:text-2xl">Seats: {seats}</h3>
        </div>
      </div>
      {showModal ? (
        null
      ) : null}
    </div>
  )
}

export default Table
