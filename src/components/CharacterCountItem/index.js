import './index.css'

const CharacterCountItem = props => {
  const {eachCharacterCounts} = props
  const {name} = eachCharacterCounts
  return (
    <li>
      <p className="output-heading">
        {name}: {name.length}
      </p>
    </li>
  )
}

export default CharacterCountItem
