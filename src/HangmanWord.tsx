export function HangmanWord() {
    const word = 'toronto';
    const guessedLetters = ['t', 'o'];

    return (
        <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            fontSize: '6rem', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            fontFamily: 'monospace' 
            }}
        >
            {word.split('').map((letter, index) => (
                <span style={{ borderBottom: '.1em solid black' }} key={index}>
                    <span style={{
                        visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
                    }}>{letter}</span>
                </span>
            ))}
        </div>
    )
};