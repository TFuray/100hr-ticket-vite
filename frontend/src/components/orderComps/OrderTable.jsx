const OrderTable = () => {

  

  return (
    <div className="container bg-secondary-content backdrop-blur-md rounded-lg  max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-secondary border-b border-gray-200"
                  >
                    Table
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-secondary border-b border-gray-200"
                  >
                   Created At
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-secondary border-b border-gray-200"
                  >
                   order
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-secondary border-b border-gray-200"
                  >
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 text-sm bg-secondary border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="relative block"
                        >
                          <img
                            alt="profil"
                            src="/images/person/8.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 primarybg-secondaryspace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-secondary border-b border-gray-200">
                    <p className="text-gray-900 primarybg-secondaryspace-no-wrap">Admin</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-secondary border-b border-gray-200">
                    <p className="text-gray-900 primarybg-secondaryspace-no-wrap">
                      12/09/2020
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-secondary border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderTable
