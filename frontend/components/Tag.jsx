const Tag = ({ title }) => {
  const getColor = () => {
    let color;
    switch (title.toLowerCase()) {
        case "travel":
            color = "rgb(210,138,138)";
            break;
        case "holiday":
            color = "rgb(169,210,138)";
             break; 
        case "sea":
             color = "rgb(138,173,138)"
        default:
            color = "rgb(61, 159, 224)";
    }
    return color;
  }
  return (
    <div style={{backgroundColor: getColor()}} className="tag">{ title }</div>
  )
}

export default Tag