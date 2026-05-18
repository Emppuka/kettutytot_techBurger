import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      {/* Vihreä onnistumisikoni animaatiolla */}
      <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6 animate-bounce">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-950 mb-2">Kiitos ostoksestasi!</h1>
      <p className="text-gray-600 max-w-sm mb-8">
        Tilauksesi on vastaanotettu onnistuneesti ja se siirtyy seuraavaksi keittiön puolelle valmistettavaksi.
      </p>

      {/* Painike, jolla pääsee takaisin selaamaan tuotteita */}
      <button
        onClick={() => navigate("/")}
        className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-sm active:scale-95"
      >
        Takaisin etusivulle
      </button>
    </div>
  );
}