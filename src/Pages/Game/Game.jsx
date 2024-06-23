import React, { useEffect, useRef, useState } from "react";

const GamePesawat = () => {
  const [sign, setSign] = useState(0);
  const [bullets, setBullets] = useState([]);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState("Easy");
  const [numb, setNumb] = useState(4);
  const [speed, setSpeed] = useState(2);
  const [meteors, setMeteors] = useState([]);
  const [timeProduce, setTimeProduce] = useState(2000);
  const rocketRef = useRef(null);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setMeteors((prevMeteors) => {
        return prevMeteors.map((meteor) => ({
          ...meteor,
          top: meteor.top + speed,
        }));
      });

      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({
            ...bullet,
            top: window.innerHeight - bullet.bottom - 10,
            bottom: bullet.bottom + 10,
          }))
          .filter((bullet) => bullet.bottom < window.innerHeight)
      );

      detectCollisions();
      handleMeteorOutOfScreen();
    }, 50);

    return () => clearInterval(gameLoop);
  }, [bullets, meteors, speed]);

  useEffect(() => {
    if (points >= 10 && points <= 30) {
      setLevel("Medium");
      setNumb(6);
      setSpeed(4);
    } else if (points > 30 && points <= 50) {
      setLevel("Hard");
      setNumb(8);
      setSpeed(6);
    } else if (points === 51) {
      setLevel("Middle-Hard");
      setNumb(14);
      setTimeProduce(200);
      setSpeed(2);
    }

    const spawnMeteor = () => {
      setMeteors((prevMeteors) => {
        if (prevMeteors.length < numb) {
          const newMeteor = {
            id: Math.random(),
            left: Math.floor(Math.random() * (window.innerWidth - 50)),
            top: -50,
          };
          return [...prevMeteors, newMeteor];
        }
        return prevMeteors;
      });
    };

    const meteorInterval = setInterval(spawnMeteor, timeProduce);

    return () => clearInterval(meteorInterval);
  }, [points, level, numb, timeProduce]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        shootBullet();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sign]);

  const shootBullet = () => {
    const newBullet = {
      id: Math.random(),
      left: sign + 35,
      bottom: 96,
      top: window.innerHeight - 96 - 10,
    };
    setBullets((prevBullets) => [...prevBullets, newBullet]);
  };

  const removeMeteor = (meteorId) => {
    setMeteors((prevMeteors) =>
      prevMeteors.filter((meteor) => meteor.id !== meteorId)
    );
  };

  const detectCollisions = () => {
    setMeteors((prevMeteors) => {
      const remainingMeteors = [];
      prevMeteors.forEach((meteor) => {
        let hit = false;
        setBullets((prevBullets) => {
          const newBullets = prevBullets.filter((bullet) => {
            const bulletHitMeteor =
              bullet.left >= meteor.left &&
              bullet.left <= meteor.left + 40 &&
              bullet.top >= meteor.top &&
              bullet.top <= meteor.top + 40;

            if (bulletHitMeteor) {
              hit = true;
              setPoints((prevPoints) => prevPoints + 1);
              removeMeteor(meteor.id);
            }

            return !bulletHitMeteor;
          });
          return newBullets;
        });
        if (!hit) {
          remainingMeteors.push(meteor);
        }
      });
      return remainingMeteors;
    });
  };

  const handleMeteorOutOfScreen = () => {
    setMeteors((prevMeteors) => {
      const remainingMeteors = [];
      prevMeteors.forEach((meteor) => {
        if (meteor.top < window.innerHeight) {
          remainingMeteors.push(meteor);
        } else {
          setPoints((prevPoints) => prevPoints - 1);
        }
      });
      return remainingMeteors;
    });
  };

  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-black overflow-hidden relative">
        <img
          src="./ufo.png"
          alt="ufo"
          className="w-full -top-40 animate-bounce z-20 absolute"
        />

        <img src="./stars.png" alt="stars" className="h-screen absolute" />
        {meteors.map((meteor) => (
          <img
            key={meteor.id}
            src="./meteor.png"
            alt="meteor"
            className="w-12 absolute animate-pulse"
            style={{
              top: `${meteor.top}px`,
              left: `${meteor.left}px`,
            }}
          />
        ))}

        {bullets.map((bullet, index) => (
          <div
            key={bullet.id}
            className="w-2 h-4 bg-red-500 absolute"
            style={{ left: bullet.left + "px", bottom: bullet.bottom + "px" }}
          ></div>
        ))}

        <img
          src="./rocket.png"
          alt="rocket"
          className="w-20 z-10 bottom-24 absolute"
          ref={rocketRef}
          style={{ left: `${sign}px` }}
        />
        <img
          src="./earth.png"
          alt="earth"
          className="w-full bottom-0 absolute animate-pulse"
        />
        <div className="absolute top-5 z-30 bg-red-200 p-2 rounded-xl font-semibold left-5 text-red-600 text-2xl">
          Points: {points}
        </div>
        <div className="absolute right-5 top-5 z-30 bg-red-200 p-2 rounded-xl font-semibold text-red-600 text-2xl">
          Level: {level}
        </div>
      </div>
      <div
        className="absolute bottom-24 z-30 right-5"
        onClick={() => setSign(sign - 20)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="white"
          className="bi bi-arrow-left-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-5 z-30 right-5"
        onClick={() => setSign(sign + 20)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="white"
          className="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
          />
        </svg>
      </div>
      <div
        className="absolute w-24 h-24 bg-red-600 flex justify-center items-center border border-2 border-white rounded-full bottom-5 z-30 left-5"
        onClick={shootBullet}
      >
        <p className="text-center text-xl font-bold text-white">PUSH</p>
      </div>
    </div>
  );
};

export default GamePesawat;
