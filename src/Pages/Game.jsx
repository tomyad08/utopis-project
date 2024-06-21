import React, { useEffect, useRef, useState } from "react";

const GamePesawat = () => {
  const [sign, setSign] = useState(0);
  const [count, setCount] = useState(-10);
  const [pos, setPos] = useState(0);
  const [bullets, setBullets] = useState([]);
  const rocketRef = useRef(null);
  const meteor1Ref = useRef(null);
  const meteor2Ref = useRef(null);
  const meteor3Ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 2;
        if (newCount >= 1500) {
          setPos(Math.floor(Math.random() * 200));
          return -10;
        }
        return newCount;
      });
    }, 20);

    const rocket = rocketRef.current;
    if (rocket) {
      rocket.style.left = sign + "px";
    }

    return () => clearInterval(interval);
  }, [sign, count, pos]);

  const shootBullet = () => {
    const newBullet = {
      left: sign + 35, // posisi awal peluru sesuai dengan posisi pesawat
      bottom: 96, // posisi awal peluru di atas pesawat
    };
    setBullets((prevBullets) => [...prevBullets, newBullet]);
  };

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

  return (
    <div className="flex justify-center">
      <div className="h-screen w-screen bg-black overflow-hidden relative">
        <img
          src="./ufo.png"
          alt="ufo"
          className="w-full -top-40 animate-bounce z-20 absolute"
        />
        {/* background layar */}
        <img
          src="./stars.png"
          alt="stars"
          className="h-screen absolute"
          // id="backgroundLayar"
        />
        {/* --------------- */}
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 ms-10 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - Math.random() * 7)}px`,
            left: `${pos * 5}px`,
          }}
          ref={meteor1Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 ms-10 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - pos - Math.random() * 7)}px`,
            left: `${pos}px`,
          }}
          ref={meteor2Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 right-32 ms-10 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - pos * 8 - Math.random() * 7)}px`,
            right: `${pos}`,
          }}
          ref={meteor3Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 right-0 ms-10 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - pos * 10 - Math.random() * 7)}px`,
            right: `${pos * 2}px`,
          }}
          ref={meteor1Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 left-10 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - pos * 15 + Math.random() * 10)}px`,
            left: `${pos * 3}`,
          }}
          ref={meteor1Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 left-30 absolute animate-pulse"
          style={{
            top: `${Math.floor(count + pos * 2 - Math.random() * 10)}px`,
            left: `${pos * 4}`,
          }}
          ref={meteor1Ref}
        />
        <img
          src="./meteor.png"
          alt="meteor"
          className="w-24 -top-10 left-24 absolute animate-pulse"
          style={{
            top: `${Math.floor(count - pos * 5 + Math.random() * 10)}px`,
            left: `${pos - 10}px`,
          }}
          ref={meteor1Ref}
        />

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
      {/* <div className="absolute bottom-20 z-100 left-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={shootBullet}
        >
          Shoot
        </button>
      </div> */}
    </div>
  );
};

export default GamePesawat;
