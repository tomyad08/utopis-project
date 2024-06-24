import React, { useEffect, useRef, useState } from "react";

const GamePesawat = () => {
  const [sign, setSign] = useState(0);
  const [bullets, setBullets] = useState([]);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState("Easy");
  const [numb, setNumb] = useState(4);
  const [speed, setSpeed] = useState(2);
  const [meteors, setMeteors] = useState([]);
  const [ufos, setUfos] = useState([]);
  const [ufoHits, setUfoHits] = useState({});
  const [timeProduce, setTimeProduce] = useState(2000);
  const [gameOver, setGameOver] = useState(false);
  const [rocketTop, setRocketTop] = useState(24); // new state to control rocket top position
  const rocketRef = useRef(null);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setMeteors((prevMeteors) => {
        return prevMeteors.map((meteor) => ({
          ...meteor,
          top: meteor.top + speed,
        }));
      });

      setUfos((prevUfos) => {
        return prevUfos.map((ufo) => ({
          ...ufo,
          top: ufo.top + speed,
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
      handleUfoOutOfScreen();
    }, 50);

    return () => clearInterval(gameLoop);
  }, [bullets, meteors, ufos, speed]);

  useEffect(() => {
    if (points >= 10 && points <= 30) {
      setLevel("Medium");
      setNumb(6);
      setSpeed(4);
    } else if (points > 30 && points <= 50) {
      setLevel("Hard");
      setNumb(8);
      setSpeed(6);
    } else if (points > 50 && points <= 80) {
      setLevel("Middle-Hard");
      setNumb(55);
      setTimeProduce(200);
      setSpeed(2);
    } else if (points > 80 && points <= 200) {
      setMeteors([]);
      setLevel("UFO Attack");
      setUfos((prevUfos) => {
        if (prevUfos.length < 4) {
          const newUfo = {
            id: Math.random(),
            type: Math.random() > 0.5 ? "UFO1" : "UFO2",
            left: Math.floor(Math.random() * (window.innerWidth - 50)),
            top: -50,
          };
          return [...prevUfos, newUfo];
        }
        return prevUfos;
      });
    } else if (points >= 200 && !gameOver) {
      setGameOver(true);
      setUfos([]);
      setPoints(200); // Ensure points do not increase after game over
    }

    const spawnMeteor = () => {
      if (points < 70) {
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
      }
    };

    const meteorInterval = setInterval(spawnMeteor, timeProduce);

    return () => clearInterval(meteorInterval);
  }, [points, level, numb, timeProduce, gameOver]);

  useEffect(() => {
    if (gameOver) {
      const rocketMoveInterval = setInterval(() => {
        setRocketTop((prevTop) => {
          if (prevTop >= window.innerHeight) {
            clearInterval(rocketMoveInterval);
            return prevTop;
          }
          return prevTop + 5;
        });
      }, 50);
    }
  }, [gameOver]);

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

  const removeUfo = (ufoId) => {
    setUfos((prevUfos) => prevUfos.filter((ufo) => ufo.id !== ufoId));
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

    setUfos((prevUfos) => {
      const remainingUfos = [];
      prevUfos.forEach((ufo) => {
        let hit = false;
        setBullets((prevBullets) => {
          const newBullets = prevBullets.filter((bullet) => {
            const bulletHitUfo =
              bullet.left >= ufo.left &&
              bullet.left <= ufo.left + 40 &&
              bullet.top >= ufo.top &&
              bullet.top <= ufo.top + 40;

            if (bulletHitUfo) {
              hit = true;
              setPoints((prevPoints) => prevPoints + 1);
              setUfoHits((prevHits) => {
                const newHits = {
                  ...prevHits,
                  [ufo.id]: (prevHits[ufo.id] || 0) + 1,
                };
                if (newHits[ufo.id] >= 5) {
                  removeUfo(ufo.id);
                }
                return newHits;
              });
            }

            return !bulletHitUfo;
          });
          return newBullets;
        });
        if (!hit) {
          remainingUfos.push(ufo);
        }
      });
      return remainingUfos;
    });
  };

  const handleMeteorOutOfScreen = () => {
    setMeteors((prevMeteors) => {
      const remainingMeteors = [];
      prevMeteors.forEach((meteor) => {
        if (meteor.top < window.innerHeight) {
          remainingMeteors.push(meteor);
        } else {
          setPoints((prevPoints) => prevPoints - 5);
        }
      });
      return remainingMeteors;
    });
  };

  const handleUfoOutOfScreen = () => {
    setUfos((prevUfos) => {
      const remainingUfos = [];
      prevUfos.forEach((ufo) => {
        if (ufo.top < window.innerHeight) {
          remainingUfos.push(ufo);
        } else {
          setPoints((prevPoints) => prevPoints - 10);
        }
      });
      return remainingUfos;
    });
  };

  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-black overflow-hidden relative">
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center">
            <div className="text-white text-3xl text-center p-2 font-bold">
              Congratsss!! You've accomplished.
            </div>
          </div>
        )}

        <img
          src="./ufo.png"
          alt="ufo"
          className="w-full -top-40 animate-bounce z-20 absolute"
        />
        {/* gambar UFO 1 */}
        {meteors.map((meteor) => (
          <img
            key={meteor.id}
            src="./meteor.png"
            className="w-12 absolute animate-pulse"
            style={{
              top: `${meteor.top}px`,
              left: `${meteor.left}px`,
            }}
          />
        ))}

        {ufos.map((ufo) => (
          <img
            key={ufo.id}
            src={`./${ufo.type}.png`}
            alt={ufo.type}
            className="w-12 absolute"
            style={{
              top: `${ufo.top}px`,
              left: `${ufo.left}px`,
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
          className={`w-20 z-10 absolute  transition-all ${
            gameOver ? "animate-rocket-up" : ""
          }`}
          ref={rocketRef}
          style={{
            left: `${sign}px`,
            bottom: gameOver ? `${rocketTop}px` : "90px",
          }}
        />
        <img
          src="./earth.png"
          alt="earth"
          className="w-full bottom-0 absolute animate-pulse"
        />
        <div className="absolute top-5 z-30 bg-red-200 p-2 border border-2 border-white rounded-xl font-semibold left-5 text-red-600 text-sm">
          Points: {points}
        </div>
        <div className="absolute right-5 top-5 z-30 bg-red-200 border border-2 border-white p-2 rounded-xl font-semibold text-red-600 text-sm">
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
