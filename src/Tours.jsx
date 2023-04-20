import SingleTour from "./SingleTour";

const Tours = ({ tours, removeTour }) => {
    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((singleTour) => {
                    return (
                        <SingleTour
                            key={singleTour.id}
                            {...singleTour}
                            removeTour={removeTour}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Tours;
