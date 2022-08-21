import JobApplication from '../components/JobApplication';
import SectionHeader from '../components/SectionHeader'

function TestPage () {
    console.log('testpage test')
    return (
      <div>
      <h1> Section Header Test</h1>
      <div className='job_category_dashboard'>
        <div>
          <SectionHeader />
        </div>
        <div>
          <JobApplication />
          <JobApplication />
          <JobApplication />
        </div>
      </div>
      </div>
    )
  }

  export default TestPage;