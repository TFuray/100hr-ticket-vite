import { useSelector } from 'react-redux'

const PageHeading = ({pageTitle}) => {
  const {user} = useSelector(state => state.auth)

  return (
    <>
      <section className="heading text-center mb-5">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {" "}
          {pageTitle}
        </h1>
      </section>
    </>
  )
}

export default PageHeading