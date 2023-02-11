const randomiseArray = (array) =>{
  let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

const Slider = ({ title, data }) => {
  // Randomise videos
  const videos = data && randomiseArray(data);
  return (
    <div>
      <h3>{title}</h3>
      <div style={{ display: "flex", overflowX: "scroll", height: "100px" }}>
        {videos &&
          videos.map((item, key) => {
            return (
              <img
                src={`https://img.youtube.com/vi/${item?._id}/mqdefault.jpg`}
                alt="Featured video"
                style={{ padding: "10px" }}
                key={key}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Slider;
