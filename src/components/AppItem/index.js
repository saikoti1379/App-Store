// // Write your code here
// // Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl, category} = appItem

  return (
    <>
      <div className="mainContainer">
        <div className="style">
          <img className="imgSize" src={imageUrl} alt={appName} />
          <p>{appName}</p>
          <p>{category}</p>
        </div>
      </div>
    </>
  )
}

export default AppItem
