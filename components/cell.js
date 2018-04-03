const Cell = ({ color = 'white' }) => (
  <div>
    <style jsx>{`
      div {
        width: 10px;
        height: 10px;
        background-color: ${color};
        border: 1px solid green;
        display: inline-block;
      }
    `}</style>
  </div>
)

export default Cell
