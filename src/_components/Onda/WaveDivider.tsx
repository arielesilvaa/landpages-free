// components/WaveDivider.tsx
export default function WaveDivider() {
    return (
      <div className="relative overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"  // Mantendo a altura reduzida
          className="w-full fill-yellow-300"  // Usando a classe Tailwind para a cor amarela
        >
          <path
            d="M0,48L48,42C96,36,192,24,288,16C384,8,480,4,576,16C672,28,768,48,864,54C960,60,1056,54,1152,48C1248,42,1344,36,1392,32H1440V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    );
  }
  