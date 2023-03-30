import { useState } from "react"
import { BookOpenIcon } from "@heroicons/react/24/outline"
import { XMarkIcon} from '@heroicons/react/24/outline'

const Table = ({ open, table, seats, handleToggleOpen }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div class="group relative block h-64 sm:h-60 lg:w-72 ">
      <span class="absolute inset-0 border-2 border-dashed border-black"></span>

      <div
        onClick={() => handleToggleOpen(table)}
        // onClick={() => setShowModal(true)}
        className={
          open
            ? "relative flex h-60 transform items-end border-2 bg-green-700 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            : "relative flex h-60 transform items-end border-2 bg-red-500 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        }
      >
       
        <div class="p-4 text-white !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <BookOpenIcon className="h-12 w-12" />

          <h2 class="mt-4 text-xl font-medium sm:text-2xl">Table: {table}</h2>
          <h3 className="mt-4 text-md font-thin sm:text-2xl">Seats: {seats}</h3>
        </div>

        <div class="absolute p-4 opacity-0 transition-opacity text-white group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <BookOpenIcon className="h-12 w-12" />
          <h2 class="mt-4 text-xl font-medium sm:text-2xl">Table: {table}</h2>
          <h3 className="mt-4 text-md font-thin sm:text-2xl">Seats: {seats}</h3>
        </div>
      </div>
    </div>
  )
}

export default Table
