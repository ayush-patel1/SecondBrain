
import Button from "./components/Button"
import Card from "./components/Card"
import PlusIcon from "./icons/PlusIcon"
import ShareIcon from "./icons/ShareIcon"

function App() {
  return (
    <>
      <div className="p-4">
        <div className="flex justify-end gap-3">
        <Button text="Share brain" variant="secondary" startIcon={<ShareIcon/>} />
        <Button text="Add Content" variant="primary" startIcon={<PlusIcon/>}/>
        </div>
        <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/narendramodi/status/1877634175693656344" title="first tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=XqBRnHT9sLA" title="my first tutorial"/>
        </div>
      </div>
    </>
  )
}

export default App
