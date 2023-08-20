import './index.css'

const HistoryItem = props => {
  const {historyItemsList, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemsList

  const onClickDelete = () => {
    deleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
