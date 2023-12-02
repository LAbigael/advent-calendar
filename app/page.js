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
        description: ["https://www.youtube.com/watch?v=dUuZLrUOmhU"],
      },
      {
        title: "Etirement de la crêpe comme Aiden",
        description: ["https://youtu.be/UYsvnlpSLdw?t=315"],
      },
    ],
    3: [
      {
        title: "Tractions à la minute",
        description: [
          "Le chrono tourne tout le temps",
          "Tu fais 5 tractions à chaque minute",
          "Pendant 5 minutes",
        ],
      },
      {
        title: "Pompes piquées à la minute",
        description: [
          "Le chrono tourne tout le temps",
          "Tu fais 5 pompes piquées avec les pieds surélevés à chaque minute",
          "Pendant 5 minutes",
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
        title: "Plank drag",
        description: [
          "https://www.youtube.com/watch?v=BrD1MzJxY6A",
          "Tu fais 3 séries de 10 répétitions (avec le poids que tu trouves, Manon ?)",
        ],
        title: "Bird dog",
        description: [
          "https://www.youtube.com/watch?v=k2azbhhuKuM",
          "Tu fais 3 séries de 10 répétitions",
        ],
      },
    ],
  };
  const [workout, setWorkout] = useState(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const workout = workouts[day];
    setWorkout(workout);
  }, []);

  return (
    <main
      onClick={() => setReveal(true)}
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {reveal ? (
          <AttentionSeeker effect="tada">
            <div className="flex flex-col ">
              {workout.map((workout) => (
                <div className="mb-4">
                  <h1 className="text-2xl font-bold">{workout.title}</h1>
                  <ul className="font-semibold">
                    {workout.description.map((description) => (
                      <li>{description}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AttentionSeeker>
        ) : (
          <button
            type="button"
            className="z-50 cursor-pointer"
            onClick={() => setReveal(true)}
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/gift.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </button>
        )}
      </div>
    </main>
  );
}
