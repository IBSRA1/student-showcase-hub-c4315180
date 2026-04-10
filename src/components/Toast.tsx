import { useState, useEffect, createContext, useContext, useCallback } from "react";

type ToastType = "success" | "error";

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} });

export const useToast2 = () => useContext(ToastContext);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<{ message: string; type: ToastType; visible: boolean }>({
    message: "",
    type: "success",
    visible: false,
  });

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    setToast({ message, type, visible: true });
  }, []);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => setToast((t) => ({ ...t, visible: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className={`fixed bottom-8 right-8 px-6 py-4 rounded-lg border border-white/10 shadow-2xl z-[9999] text-sm max-w-[360px] transition-all duration-300 ${
          toast.visible ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"
        } ${toast.type === "success" ? "border-l-[3px] border-l-green-500" : "border-l-[3px] border-l-red-500"}`}
        style={{ background: "hsl(220, 47%, 9%)" }}
      >
        {toast.message}
      </div>
    </ToastContext.Provider>
  );
};
