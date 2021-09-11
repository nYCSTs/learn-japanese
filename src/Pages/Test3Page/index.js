import { useEffect, useState } from 'react';
import { getShuffledKanjiList } from '../../Services/Axios/kanjiServices';
import QuestionBox from '../../Components/QuestionBox';
import {
  P, Input, InputField
} from '../../Constants/testStyles';
import { generateTestResults } from '../../Utilities/usefulFunctions';

const Test2Page = () => {
  const [kanjisList, setKanjisList] = useState([]);
  const [question, setQuestion] = useState();

  const [kanjiAnswer, setKanjiAnswer] = useState('');
  const [onyomiAnswer, setOnyomiAnswer] = useState('');
  const [kunyomiAnswer, setKunyomiAnswer] = useState('');

  const verificarResposta = () => {
    const [onyomiCorrect, onyomiWrong] = generateTestResults(onyomiAnswer.split(',').map((v) => v.trim()), question?.onyomi); // valida onyomi
    const [kunyomiCorrect, kunyomiWrong] = generateTestResults(kunyomiAnswer.split(',').map((v) => v.trim()), question?.kunyomi.map((r) => r.reading)); // valida kunyomi

    if (question?.kanji === kanjiAnswer.trim() && !kunyomiWrong.length && !onyomiWrong.length) {
      kanjisList.push(kanjisList.shift());
      alert('Completamento Correto!');
    } else {
      if (kunyomiCorrect.length && onyomiCorrect.length) {
        alert('Parcialmente Correto');
      } else {
        alert('Errado');
      }
      kanjisList.splice(kanjisList.length / 2, 0, kanjisList.shift());
      alert(`Kanji: ${question.kanji}\n\nOnyomi: ${question.onyomi.join(', ')}\n\nKunyomi: ${question.kunyomi.map((r) => `${r.reading}${r.meaning[0] !== '' ? ` (${r.meaning})` : ""}`).join(', ')}\n\nSignificado: ${question.kanjiMeaning.join(', ')}`)
    }
    setKanjiAnswer('');
    setOnyomiAnswer('');
    setKunyomiAnswer('');
    setQuestion(kanjisList[0]);
  }

  useEffect(() => {
    const getShuffledKanjiListFromAPI = async () => {
      await getShuffledKanjiList()
        .then((response) => setKanjisList(response.data));
    };
    getShuffledKanjiListFromAPI();
  }, []);

  useEffect(() => {
    setQuestion(kanjisList[0]);
  }, [kanjisList]);

  return (
    <QuestionBox
      title={question?.kanjiMeaning.join(', ')}
      kanji={question?.kanji}
      buttonText="Confirmar"
      buttonFunction={verificarResposta}
    >
      <InputField>
        <P>Kanji: </P>
        <Input value={kanjiAnswer} onChange={(e) => setKanjiAnswer(e.target.value)} />
      </InputField>
      <InputField>
        <P>Onyomi: </P>
        <Input value={onyomiAnswer} onChange={(e) => setOnyomiAnswer(e.target.value)} />
      </InputField>
      <InputField>
        <P>Kunyomi: </P>
        <Input value={kunyomiAnswer} onChange={(e) => setKunyomiAnswer(e.target.value)} />
      </InputField>
    </QuestionBox >
  );
};

export default Test2Page;