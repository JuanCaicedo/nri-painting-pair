import Grid from '../components/grid'

const Page = () => (
  <div>
    <Grid
      numberOfRows={5}
      numberOfColumns={10}
      colors={['red', 'blue', 'black']}
      numberOfColoredCells={5}
    />
  </div>
)

export default Page
