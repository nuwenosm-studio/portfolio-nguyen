import { keyArr, normalLetters } from "../../data/PuzzleData";

const PuzzleSearch = () => {

  return (
    <div className="word_puzzle">

        {keyArr.map((word) => (
            <div 
                className={`word_group word_key word_${word.keyWord}`} 
                key={word.keyWord}
            >
                {word.letterArr.map((letter, index) => (
                    <div className="letter" key={index}>
                        {letter}
                    </div>
                ))}

                <div className="word_popUp">
                    <div className="word_img">
                        <img src={word.keyImg} alt="" />
                    </div>
                </div>

            </div>
        ))}

        {normalLetters.map((word) => (
            <div 
                className={`word_group word_${word.keyWord}`} 
                key={word.keyWord}
            >
                {word.letterArr.map((letter, index) => (
                    <div className="letter" key={index}>
                        {letter}
                    </div>
                ))}
            </div>
        ))}

    </div>
  );
};

export default PuzzleSearch;
