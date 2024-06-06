import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
    document.title = "RBB Quick Score";

    const [test1, setTest1] = useState(0);
    const [test2, setTest2] = useState({
        english_test: 0,
        learning_agility: 0,
        total: 0,
    });
    const [finalScore, setFinalScore] = useState(0);
    const [isDetail, setIsDetail] = useState(false);

    const handleTest1 = (e) => {
        setTest1(Number(e.target.value));
    };

    const handleTest2 = (e) => {
        let target = e.target;
        let value = Number(target.value);

        setTest2((prevTest2) => ({
            ...prevTest2,
            [target.name]: value,
        }));
    };

    useEffect(() => {
        let test2Result =
            (test2.english_test / 677) * 100 * 0.8 +
            (test2.learning_agility / 3) * 0.2;

        setTest2((prevTest2) => ({
            ...prevTest2,
            total: test2Result,
        }));
    }, [test2.english_test, test2.learning_agility]);

    useEffect(() => {
        let finalResult = (test1 * 0.6 + test2.total * 0.4).toFixed(2);
        setFinalScore(Number(finalResult));
    }, [test1, test2.total]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-slate-800">
                <div className="flex-col w-4/5 lg:w-1/3">
                    <div className="mt-4 bg-white p-2 rounded-lg shadow-lg mb-4">
                        <h1 className="font-bold text-center text-cyan-700">
                            RBB Quick Score
                        </h1>
                        <small>
                            <p className="text-center">
                                Semoga Sukses Fren! Semangat!
                            </p>
                        </small>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 font-semibold">
                                    Nilai Test Online 1
                                </label>
                                <input
                                    type="number"
                                    value={test1}
                                    onChange={handleTest1}
                                    className="border-2 rounded-lg p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">
                                    Bahasa Inggris
                                </label>
                                <input
                                    type="number"
                                    value={test2.english_test}
                                    onChange={handleTest2}
                                    name="english_test"
                                    className="border-2 rounded-lg p-2 w-full"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">
                                    Learning Agility
                                </label>
                                <input
                                    type="number"
                                    value={test2.learning_agility}
                                    onChange={handleTest2}
                                    name="learning_agility"
                                    className="border-2 rounded-lg p-2 w-full"
                                />
                            </div>
                        </form>

                        <div className="flex bg-slate-300 mt-8 p-4 rounded-lg">
                            <p className="font-bold">
                                Nilai Akhir: {finalScore}
                            </p>
                            <button
                                onClick={() => setIsDetail(!isDetail)}
                                className="ml-auto text-cyan-700 hover:text-cyan-600"
                            >
                                {isDetail == true
                                    ? "Tutup Detail"
                                    : "Lihat Detail"}
                            </button>
                        </div>

                        {isDetail ? (
                            <div className="bg-slate-300 mt-4 px-4 rounded-lg">
                                <div class="grid grid-cols-1 divide-y">
                                    <div className="py-4">
                                        <p className="font-bold">
                                            Nilai Test online 1: {test1} (60% ={" "}
                                            {test1 * 0.6})
                                        </p>
                                    </div>
                                    <div className="py-4">
                                        <p className="font-bold">
                                            Nilai Test online 2:{" "}
                                            {test2.total.toFixed(2)} (40% ={" "}
                                            {(test2.total * 0.4).toFixed(2)})
                                        </p>
                                        <p>
                                            Bahasa Inggris: <br />
                                            {test2.english_test.toFixed(2)} /
                                            677 x 100 ={" "}
                                            {(
                                                (test2.english_test / 677) *
                                                100
                                            ).toFixed(2)}{" "}
                                            ( 80% ={" "}
                                            {(
                                                (test2.english_test / 677) *
                                                100 *
                                                0.8
                                            ).toFixed(2)}
                                            )
                                        </p>
                                        <p>
                                            Learning Agility: <br />
                                            {test2.learning_agility.toFixed(
                                                2,
                                            )}{" "}
                                            / 300 x 100 ={" "}
                                            {(
                                                (test2.learning_agility / 300) *
                                                100
                                            ).toFixed(2)}{" "}
                                            ( 20% ={" "}
                                            {(
                                                (test2.learning_agility / 300) *
                                                100 *
                                                0.2
                                            ).toFixed(2)}
                                            )
                                        </p>
                                    </div>
                                    <div className="py-4">
                                        <p className="font-bold">
                                            Nilai Akhir: {finalScore} (
                                            {test1.toFixed(2) * 0.6} +{" "}
                                            {(test2.total * 0.4).toFixed(2)})
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="my-4">
                        <p className="text-white text-center">
                            Created by{" "}
                            <a
                                className="text-cyan-700"
                                href="https://github.com/anfahrul"
                            >
                                Fahrul
                            </a>{" "}
                            © 2024 <br /> References:&nbsp;
                            <a
                                className="text-cyan-700"
                                href="https://riandadesign.github.io/skor-rbb/"
                            >
                                https://riandadesign.github.io/skor-rbb/
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
