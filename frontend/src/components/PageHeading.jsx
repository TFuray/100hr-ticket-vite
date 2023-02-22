import { useSelector } from 'react-redux'

const PageHeading = ({pageTitle}) => {
  const {user} = useSelector(state => state.auth)

  return (
  <>
    <section className="heading text-center mb-5">
      <h1 className='text-3xl font-bold'>Welcome {user && user.name}</h1> 
      <p className='text-2xl font-bold'> {pageTitle}</p>
      </section> 
  </>
  )
}

export default PageHeading