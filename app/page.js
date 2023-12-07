"use client";
import { useState, useEffect } from "react";
import { AttentionSeeker } from "react-awesome-reveal";

import Image from "next/image";

export default function Home() {
  const workouts = {
    2: [
      {
        title: "Densité de suspension",
        description: [
          "30 secondes de suspension à quatre doigts",
          "4 minutes de repos",
          "Choisis une préhension où tu échoues à 30 secondes",
        ],
      },
      {
        title: "Etirement de la grenouille",
        description: [
          "https://www.youtube.com/watch?v=dUuZLrUOmhU",
          "3 fois 1 minute",
        ],
      },
      {
        title: "Etirement de la crêpe comme Aiden",
        description: ["https://youtu.be/UYsvnlpSLdw?t=315", "3 fois 1 minute"],
      },
    ],
    3: [
      {
        title: "Tractions à la minute",
        description: [
          "Le chrono tourne tout le temps",
          "Tu fais 5-7 tractions à chaque minute",
          "Pendant 5 minutes",
        ],
      },
      {
        title: "Pompes piquées à la minute",
        description: [
          "Le chrono tourne tout le temps",
          "Tu fais 5-7 pompes piquées avec les pieds surélevés à chaque minute",
          "Pendant 5 minutes",
        ],
      },
      {
        title: "Blocage into dynamic",
        description: [
          "Tu bloques à 90° pendant 3 secondes",
          "Tu redescends, et fais une traction dynamique directement",
          "Répète jusqu'à échec",
          "3 séries, 1 minute de repos entre chaque série",
        ],
      },
    ],
    4: [
      {
        title: "Préhensions variées",
        description: [
          "Tu fais 10 secondes de suspension à 4 doigts semi-arqué",
          "Repos 20 secondes",
          "Tu fais 10 secondes de suspension à 3 doigts tendus",
          "Repos 20 secondes",
          "Tu fais 10 secondes de suspension à 3 doigts semi-arqué",
          "Repos 20 secondes",
          "Tu fais 10 secondes de suspension à 3 doigts majeur, annulaire et auriculaire",
          "Tu fais 1 minutes de repos",
          "Tu recommences 3 fois",
        ],
      },
      {
        title: "Plank drag",
        description: [
          "https://www.youtube.com/watch?v=BrD1MzJxY6A",
          "Tu fais 3 séries de 10 répétitions (avec le poids que tu trouves)",
        ],
      },
      {
        title: "Bird dog",
        description: [
          "https://www.youtube.com/watch?v=k2azbhhuKuM",
          "Tu fais 3 séries de 10 répétitions",
        ],
      },
    ],
    5: [
      {
        title: "Pull up Shrugs",
        description: [
          "https://www.youtube.com/shorts/r80W32kushY",
          "10 reps",
          "Leste toi si tu peux",
          "Repos 1 minute",
          "Tu fais 3 séries",
        ],
      },
      {
        title: "Suspension à un bras alterné",
        description: [
          "Tu fais 10 secondes de suspension à un bras tendu en engageant le plus possible le dos",
          "Tu changes de bras sans toucher le sol",
          "Répète 3 fois chaque bras",
          "Repos 1 minute",
          "Tu fais 3 séries",
        ],
      },
      {
        title: "Routine doigts Emil Abrahamsson",
        description: [
          "Tu suis la vidéo c'est tranquille et ça fait du bien",
          "https://www.youtube.com/watch?v=3FNZdixeuZw",
        ],
      },
    ],
    6: [
      {
        title: "7:3",
        description: [
          "Ca va piquer les avants bras aujourd'hui",
          "7 secondes de suspension, 3 secondes de repos",
          "6 fois",
          "Repos 2 minutes",
          "Recommence 4 fois",
        ],
      },
      {
        title: "Flexion des poignets",
        description: [
          "Avec une altere, 6-10kg tu fais 30 secondes de flexion des poignets",
          "Repos 5 secondes pour changer de main",
          "Répète 10 fois en tout",
          "https://www.youtube.com/watch?v=Wh1YOYBWSus",
        ],
      },
      {
        title: "Si tu te sens chaud, extensions des poignets",
        description: [
          "Avec une altere, 4-8kg tu fais 30 secondes d'extension des poignets",
          "Repos 5 secondes pour changer de main",
          "Répète 10 fois en tout",
          "https://www.youtube.com/watch?v=ILTyk1tw6x8",
        ],
      },
    ],
    7: [
      {
        title: "Rotataion externe des épaules",
        description: [
          "https://youtu.be/As_nIl4VcUQ?si=SEi9L3Nz_32jssss&t=436",
          "10 reps, 3 séries sur chaque bras",
          "Repos 30 secondes entre chaque bras",
        ],
      },
      {
        title: "Shoulder press",
        description: [
          "https://www.youtube.com/shorts/eJqjNVmR238",
          "10 reps, 3 séries sur chaque bras",
          "Repos 1 minute entre chaque bras",
        ],
      },
      {
        title: "Etirement de la grenouille",
        description: [
          "https://www.youtube.com/watch?v=dUuZLrUOmhU",
          "3 fois 1 minute",
        ],
      },
      {
        title: "Etirement de la crêpe comme Aidan",
        description: [
          "https://youtu.be/UYsvnlpSLdw?t=315",
          "3 fois 1 minute",
        ],
      },
    ],
  };
  const [workout, setWorkout] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [shake, setShake] = useState(false);

  const revealWorkout = () => {
    setShake(true);
    setTimeout(() => {
      setReveal(true);
      setShake(false);
    }, 1100);
  };
  console.log("shake", shake);
  console.log("reveal", reveal);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const workout = workouts[day];
    setWorkout(workout);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
        {reveal ? (
          <AttentionSeeker effect="tada">
            <div className="flex flex-col ">
              <h1 className="flex flex-col text-center items-center justify-center text-xl font-bold mb-5">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/gift.png"
                  alt="Next.js Logo"
                  width={100}
                  height={37}
                  priority
                />
                Entrainement {new Date().getDate()} décembre
              </h1>
              {workout.map((workout) => (
                <div className="mb-4">
                  <h1 className="text-lg font-semibold">{workout.title}</h1>
                  <ul className="">
                    {workout.description.map((description) =>
                      description.includes("http") ? (
                        <li>
                          <a href={description}>{description}</a>
                        </li>
                      ) : (
                        <li>{description}</li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </AttentionSeeker>
        ) : (
          <button
            type="button"
            className="z-50 cursor-pointer"
            onClick={() => revealWorkout()}
          >
            {shake ? (
              <AttentionSeeker effect="shake">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/gift.png"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </AttentionSeeker>
            ) : (
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/gift.png"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
            )}
          </button>
        )}
      </div>
    </main>
  );
}
