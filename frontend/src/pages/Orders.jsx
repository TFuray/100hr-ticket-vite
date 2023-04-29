import OrderTable from "../components/orderComps/OrderTable"

const Orders = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl text-center font-bold w-1/2">Orders:</h2>
      </div>
      <div className="flex justify-center">
        <OrderTable />
      </div>
    </>
  )
}

export default Orders
