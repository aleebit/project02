const Addition = (props) => {
    return(
        <h2>
            {props.firstNumber} + {props.secondNumber} = {props.firstNumber + props.secondNumber}
        </h2>
    );
};

export default Addition;