import './scss/index.scss'
import Header from './components/header'
import JobsContainer from './components/jobs-container'
import FilterSidebar from './components/filter-sidebar'

function App() {
  return (
    <>
      <div className='app'>
        <div className='container'>
          <h1 className='logo'>
            <span>Github</span> Jobs
          </h1>
          <Header />
          <div className='jobs-container'>
            <FilterSidebar />
            <JobsContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
