import Title from '../components/Title';

function About() {
    return (
        <>
            About work
            <div className="">
                <Title main="Animall World" sub="About as" />

                <div className=" d-flex p-3 mx-5">
                    <p>
                        Lorem ipsum dolor sit,<br></br>
                        amet consectetur adipisicing elit.<br></br>
                        Nobis repudiandae nulla assumenda, <br></br>
                        maiores incidunt aliquid suscipit <br></br>
                        consequatur similique quis dolor qui! Odio<br></br>
                        ea natus earum possimus! Error <br></br>
                        ut beatae explicabo?
                    </p>

                    <div className="card  p-2 m-2 m-auto ">
                        <img src="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445" className="card-img-top" alt="..." />
                        <div className="card-body p-2  m-2">
                            <h5 className="card-title">
                                Animal <i className="fas fa-dragon "></i> World
                            </h5>
                            <p className="card-text">Special Livestock Sales </p>
                            <p className="card-text">+972548029393 </p>
                            <a href="#" className="btn btn-primary">
                                Call me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
