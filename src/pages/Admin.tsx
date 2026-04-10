import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Demo submissions data
const demoSubmissions = [
  { id: "1", fullName: "Ahmed Hassan", groupName: "Alpha", whatsapp: "+20 123 456 789", email: "ahmed@example.com", submittedAt: "2026-04-08T14:30:00Z" },
  { id: "2", fullName: "Sara Mohamed", groupName: "Section B", whatsapp: "+20 987 654 321", email: "sara@example.com", submittedAt: "2026-04-07T10:15:00Z" },
  { id: "3", fullName: "Omar Khalil", groupName: "Alpha", whatsapp: "+20 555 444 333", email: "omar@example.com", submittedAt: "2026-04-06T16:45:00Z" },
  { id: "4", fullName: "Nour Ali", groupName: "Section A", whatsapp: "+20 111 222 333", email: "nour@example.com", submittedAt: "2026-04-05T09:00:00Z" },
];

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminPassword")) {
      navigate("/auth");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Student <span className="text-gradient">Submissions</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-2">{demoSubmissions.length} submissions total</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm font-semibold px-5 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-muted-foreground hover:bg-white/[0.07] hover:text-foreground transition-all"
            >
              ↻ Refresh
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {["Date", "Name", "Group", "WhatsApp", "Email", "Files"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground bg-white/[0.02] border-b border-white/7 whitespace-nowrap text-left">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {demoSubmissions.map((sub) => {
                  const d = new Date(sub.submittedAt);
                  return (
                    <tr key={sub.id} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 border-b border-white/5 text-sm">
                        {d.toLocaleDateString()}{" "}
                        <span className="text-muted-foreground">{d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                      </td>
                      <td className="px-6 py-4 border-b border-white/5 font-semibold text-sm">{sub.fullName}</td>
                      <td className="px-6 py-4 border-b border-white/5 text-sm">{sub.groupName}</td>
                      <td className="px-6 py-4 border-b border-white/5 text-sm">{sub.whatsapp}</td>
                      <td className="px-6 py-4 border-b border-white/5 text-sm text-accent">{sub.email}</td>
                      <td className="px-6 py-4 border-b border-white/5 text-sm">
                        <button className="text-xs font-semibold px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-muted-foreground hover:bg-white/[0.07] transition-all">
                          📥 Download
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
