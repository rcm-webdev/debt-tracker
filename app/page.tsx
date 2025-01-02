export default function Home() {
  const symbols = [
    {
      symbol: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9" />
            <path d="M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0" />
          </g>
        </svg>
      ),
      color: "neutral-900",
      key: "circle",
    },
    {
      symbol: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9" />
            <path d="M8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
          </g>
        </svg>
      ),
      color: "red-500",
      key: "square",
    },
    {
      symbol: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9" />
            <path d="M7.5 15h9L12 7z" />
          </g>
        </svg>
      ),
      color: "neutral-100",
      key: "triangle",
    },
  ];
  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-col items-center p-4 ">
        <h1 className="text-6xl font-bold">
          {" "}
          <span className="text-[#f44786]">Debt</span> Tracker{" "}
        </h1>

        <div className="flex flex-row items-center space-x-2 ">
          <p className="font-semibold">
            Inspired by <span className="text-[#249f9c]">Squid Games</span>{" "}
          </p>
          {symbols.map((symbol) => (
            <div className={` rounded-lg w-5 h-5  `} key={symbol.key}>
              {symbol.symbol}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
