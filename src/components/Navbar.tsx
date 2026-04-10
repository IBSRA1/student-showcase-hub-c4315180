import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const email = localStorage.getItem("readerEmail");
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <nav className="sticky top-0 z-50 h-[70px] flex items-center bg-background/85 backdrop-blur-xl border-b border-white/10 px-8">
      <div className="max-w-[1200px] w-full mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-gradient tracking-tight">
          Story Weaver
        </Link>
        <div className="flex gap-4 items-center">
          {isAdmin ? (
            <>
              <Link to="/admin" className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition-colors hover:bg-white/5">
                👥 Submissions
              </Link>
              <Link to="/admin/blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition-colors hover:bg-white/5">
                📝 Blog Articles
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("adminPassword");
                  window.location.href = "/auth";
                }}
                className="text-sm font-semibold px-5 py-2 rounded-lg bg-destructive/10 text-red-300 border border-destructive/20 hover:bg-destructive/20 transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg transition-colors hover:bg-white/5">
                Blog
              </Link>
              {email ? (
                <button
                  onClick={() => {
                    if (confirm("Log out?")) {
                      localStorage.removeItem("readerEmail");
                      window.location.reload();
                    }
                  }}
                  className="text-sm font-semibold px-5 py-2 rounded-lg btn-brand text-white transition-all"
                >
                  {email.split("@")[0]}
                </button>
              ) : (
                <Link to="/auth" className="text-sm font-semibold px-5 py-2 rounded-lg btn-brand text-white transition-all">
                  Portal Access →
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
