function Flight({ departure, destination, departureTimes, arrivalTimes }) {
  return <div className="row">
    <div className="col">
      π« {departure}
    </div>
    <div className="col">
      π¬ {destination}
    </div>
    <div className="col">
      {departureTimes}
    </div>
    <div className="col">
      {arrivalTimes}
    </div>
    <div className="col">
      <button>
        μμ½νκΈ°
      </button>
    </div>
  </div>
}

export default Flight