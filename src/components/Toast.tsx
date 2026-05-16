import { useEffect } from "react";
import { useCartStore } from "../store/useCartStore";

export default function Toast() {
  const toastMessage = useCartStore((state) => state.toastMessage);
  const clearToast = useCartStore((state) => state.clearToast);

  useEffect(() => {
    if (toastMessage) {
      // Piilotetaan ilmoitus automaattisesti 3 sekunnin kuluttua
      const timer = setTimeout(() => {
        clearToast();
      }, 3000);

      // Siivotaan ajastin, jos tuotteita klikkaillaan nopeasti peräkkäin
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  // Jos viestiä ei ole, ei piirretä mitään ruudulle
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-all duration-300 transform scale-100 opacity-100">
      <div className="bg-gray-950 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-gray-850 max-w-sm md:max-w-md">
        
        {/* Pyöreä vihreä Check-ikoni taustalla */}
        <div className="flex-shrink-0 bg-green-500/20 p-1.5 rounded-full">
          <svg 
            className="w-5 h-5 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Ilmoitusteksti */}
        <p className="text-sm font-semibold tracking-wide pr-1">
          {toastMessage}
        </p>

        {/* Pieni sulkemisraksi, jos käyttäjä haluaa klikata ilmoituksen heti pois */}
        <button 
          onClick={clearToast}
          className="text-gray-400 hover:text-white transition-colors ml-auto p-1 rounded-md hover:bg-gray-800"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>
    </div>
  );
}