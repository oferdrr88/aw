// import './title.css';

interface Props {
    main: string;
    sub: string;
}

function Title({ main, sub }: Props) {
    return (
        <h2 className="text-center my-3 text-light">
            {main}
            <br />
            <small className="">{sub}</small>
        </h2>
    );
}

export default Title;
