import './OneCard.css'

const OneCard = ({project}) => {
  return (
    <div className='OneCard'>
      <div className="top">
        <span className="cardTitle">{project.title}</span>
      </div>
      <div className="bottom">
      <img src={`/images/${project.img}`} alt="" className="image" />
      </div>
    </div>
  )
}

export default OneCard