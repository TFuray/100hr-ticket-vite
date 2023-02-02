import { useSelector } from 'react-redux'

const PageHeading = ({pageTitle}) => {
  const {user} = useSelector(state => state.auth)

  return (
  <>
    <section className="heading">
      <h1>Welcome {user && user.name}</h1> 
      <p> {pageTitle}</p>
      </section> 
  </>
  )
}

export default PageHeading