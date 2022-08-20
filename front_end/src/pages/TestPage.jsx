import SectionHeader from '../components/SectionHeader'

function TestPage () {
    console.log('testpage test')
    return (
      <div className="App">
        <h1> Section Header Test</h1>
        <div>
          <SectionHeader />
        </div>
      </div>
    )
  }

  export default TestPage;