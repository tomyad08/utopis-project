import React, { useEffect, useRef, useState } from "react";

const GamePesawat = () => {
  const [sign, setSign] = useState(0);
  const [count, setCount] = useState(0);
  const [bullets, setBullets] = useState([]);
  const [points, setPoints] = useState(0);
  const [meteors, setMeteors] = useState([]);
  const rocketRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 2);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const spawnMeteor = () => {
      const newMeteor = {
        id: Math.random(),
        left: Math.floor(Math.random() * (window.innerWidth - 50)),
        top: -50,
      };
      setMeteors((prevMeteors) => [...prevMeteors, newMeteor]);
    };

    const meteorInterval = setInterval(spawnMeteor, 2000);

    return () => clearInterval(meteorInterval);
  }, []);

  useEffect(() => {
    const updateMeteors = () => {
      setMeteors((prevMeteors) =>
        prevMeteors.map((meteor) => ({
          ...meteor,
          top: meteor.top + 2,
        }))
      );
    };

    const interval = setInterval(updateMeteors, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets
          .map((bullet) => ({
            ...bullet,
            bottom: bullet.bottom + 10,
          }))
          .filter((bullet) => bullet.bottom < window.innerHeight)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

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
      left: sign + 35,
      bottom: 96,
    };
    setBullets((prevBullets) => [...prevBullets, newBullet]);
  };

  useEffect(() => {
    const detectCollisions = () => {
      setBullets((prevBullets) => {
        const newBullets = [];
        const updatedMeteors = [];

        prevBullets.forEach((bullet) => {
          let hit = false;

          meteors.forEach((meteor) => {
            if (
              bullet.left > meteor.left &&
              bullet.left < meteor.left + 24 &&
              bullet.bottom > meteor.top &&
              bullet.bottom < meteor.top + 24
            ) {
              setPoints((prevPoints) => prevPoints + 1);
              hit = true;
            }
          });

          if (!hit) {
            newBullets.push(bullet);
          }
        });

        meteors.forEach((meteor) => {
          if (
            !bullets.some(
              (bullet) =>
                bullet.left > meteor.left &&
                bullet.left < meteor.left + 24 &&
                bullet.bottom > meteor.top &&
                bullet.bottom < meteor.top + 24
            )
          ) {
            updatedMeteors.push(meteor);
          }
        });

        setMeteors(updatedMeteors);
        return newBullets;
      });
    };

    const collisionInterval = setInterval(detectCollisions, 20);

    return () => clearInterval(collisionInterval);
  }, [bullets, meteors]);

  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-black overflow-hidden relative">
        <img
          src="./ufo.png"
          alt="ufo"
          className="w-full -top-40 animate-bounce z-10 absolute"
        />

        <img src="./stars.png" alt="stars" className="h-screen absolute" />
        {meteors.map((meteor) => (
          <img
            key={meteor.id}
            src="./meteor.png"
            alt="meteor"
            className="w-24 absolute animate-pulse"
            style={{
              top: `${meteor.top}px`,
              left: `${meteor.left}px`,
            }}
          />
        ))}

        {bullets.map((bullet, index) => (
          <div
            key={index}
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
        <div className="absolute top-5 left-5 bg-white p-2 rounded-xl z-40 text-blue-800 text-2xl">
          Points: {points}
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
        className="absolute bottom-5 z-90 right-5"
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
      <div className="absolute bottom-5 z-100 left-5" onClick={shootBullet}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="red"
          className="bi bi-circle-fill"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
    </div>
  );
};

export default GamePesawat;
