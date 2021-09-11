import { useEffect, useState } from 'react';
import { generateTestResults } from '../../Utilities/usefulFunctions';
import { getShuffledKanjiList } from '../../Services/Axios/kanjiServices';
import {
  P, Input, InputField,
} from '../../Constants/testStyles';
import QuestionBox from '../../Components/QuestionBox';

const Test1Page = () => {
  const [kanji, setKanji] = useState(''); // Kanji da questao
  const [kanjis, setKanjis] = useState([]); // Lista de kanjis
  // Resposta
  const [onyomiReadingAnswer, setOnyomiReadingAnswer] = useState([]); // Leitura onyomi       - Resposta
  const [kunyomiReadingAnswer, setKunyomiReadingAnswer] = useState([]); // Leitura kunyomi    - Resposta
  const [kanjiMeaningAnswer, setKanjiMeaningAnswer] = useState([]); // Significado do kanji   - Resposta
  // Resposta do usuario
  const [onyomiReading, setOnyomiReading] = useState(''); // Leitura onyomi                   - Usuario
  const [kunyomiReading, setKunyomiReading] = useState(''); // Leitura kunyomi                - Usuario
  const [kanjiMeaning, setKanjiMeaning] = useState(''); // Significado do kanji               - Usuario

  const getShuffledKanjiListFromAPI = async () => {
    await getShuffledKanjiList()
      .then((response) => setKanjis(response.data));
  }

  const verificarResposta = async () => {
    // onyomi
    const [onyomiCorrect, onyomiWrong] = generateTestResults(onyomiReading.split(','), onyomiReadingAnswer);
    // kunyomi
    const [kunyomiCorrect, kunyomiWrong] = generateTestResults(kunyomiReading.split(','), kunyomiReadingAnswer);

    if (!onyomiWrong.length && !kunyomiWrong.length && kanjiMeaningAnswer.includes(kanjiMeaning)) {
      kanjis.push(kanjis.shift());
      alert("Completamente correta!");
    } else {
      if (onyomiCorrect.length && kunyomiCorrect.length && kanjiMeaningAnswer.includes(kanjiMeaning)) {
        alert("Parcialmente Correto");
      } else {
        alert("Errada");

      };
      alert(`Kanji: ${kanji}\n\nOnyomi: ${onyomiReadingAnswer.join(', ')}\n\nKunyomi: ${kunyomiReadingAnswer.join(', ')}\n\nSignificado: ${kanjiMeaningAnswer.join(', ')}`)
      kanjis.splice(kanjis.length / 2, 0, kanjis.shift());
    };

    setOnyomiReading('');
    setKunyomiReading('');
    setKanjiMeaning('');
    gerarPergunta();
  };

  const gerarPergunta = () => {
    setKanji(kanjis[0]?.kanji);
    setOnyomiReadingAnswer(kanjis[0]?.onyomi);
    setKunyomiReadingAnswer(kanjis[0]?.kunyomi.map((v) => v.reading));
    setKanjiMeaningAnswer(kanjis[0]?.kanjiMeaning);
  }

  useEffect(() => {
    getShuffledKanjiListFromAPI();
  }, []);

  useEffect(() => {
    gerarPergunta();
  }, [kanjis]);

  return (
    <QuestionBox
      title={kanji}
      kanji={kanji}
      buttonFunction={verificarResposta}
      buttonText="Confirmar"
    >
      <>
        <InputField>
          <P>Leitura Onyomi: ({onyomiReadingAnswer?.length})</P>
          <Input value={onyomiReading} onChange={(e => setOnyomiReading(e.target.value))} />
        </InputField>
        <InputField>
          <P>Leitura Kunyomi: ({kunyomiReadingAnswer?.length})</P>
          <Input value={kunyomiReading} onChange={(e) => setKunyomiReading(e.target.value)} />
        </InputField>
        <InputField>
          <P>Significado: </P>
          <Input value={kanjiMeaning} onChange={(e) => setKanjiMeaning(e.target.value)} />
        </InputField>
      </>
    </QuestionBox>
  )
}

export default Test1Page;