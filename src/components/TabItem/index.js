// Write your code here
import './index.css'

const TabItem = props => {
  const {category, selection} = props
  const {tabId, displayText} = category
  const UpdateSelection = () => {
    selection(tabId)
  }

  return (
    <div>
      <div className="styleTab">
        <div>
          <p onClick={UpdateSelection}>{displayText}</p>
        </div>
      </div>
    </div>
  )
}

export default TabItem
