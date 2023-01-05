export default function Result({ setCategory, countCorrectAnswers }) {
    return (
        <>
            <p>
                You got <strong>{countCorrectAnswers}</strong> correct!
            </p>
            <p>Thank you for playing!</p>
            <a href='/Quiz-app' class='btn btn-success stretched-link'>
                Return To Home Page
            </a>

        </>
    );
}
