import * as R from 'ramda'
import Cell from './cell'

const Row = ({ children }) => (
  <div>
    <style jsx>{`
      display: flex;
    `}</style>
    {children}
  </div>
)

const generateColoredCells = (
  numberOfRows,
  numberOfColumns,
  colors,
  numberOfColoredCells
) => {
  const colorIndex = Math.floor(Math.random() * colors.length)
  const color = colors[colorIndex]
  const rowPosition = Math.floor(Math.random() * numberOfRows)
  const columnPosition = Math.floor(Math.random() * numberOfColumns)
  return R.range(0, numberOfColoredCells).map(() => ({
    rowPosition, // between 0 and numberOfRows
    columnPosition,
    color,
    matchesCell: isColoredCell(),
  }))
}

const isColoredCell = (rowPosition, columnPosition) =>
  R.allPass([
    R.propEq('rowPosition', rowPosition),
    R.propEq('columnPosition', columnPosition),
  ])

const Grid = ({
  numberOfRows,
  numberOfColumns,
  colors = [],
  numberOfColoredCells,
}) => {
  const coloredCells = generateColoredCells(
    numberOfRows,
    numberOfColumns,
    colors,
    numberOfColoredCells
  )
  return (
    <div>
      {R.range(0, numberOfRows).map(() => (
        <Row>
          {R.range(0, numberOfColumns).map(() => {
            return <Cell color={color} />
          })}
        </Row>
      ))}
    </div>
  )
}

export default Grid
