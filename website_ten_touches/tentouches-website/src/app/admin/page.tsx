"use client";

import { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

interface Signup {
  key: string;
  name: string;
  email: string;
  mobile: string | null;
  timestamp: string;
  archived?: boolean;
  archivedAt?: string;
}

export default function AdminPage() {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [filter, setFilter] = useState("");
  const [showArchived, setShowArchived] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchSignups = useCallback(async (pass: string, archived = false) => {
    setLoading(true);
    setError("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const url = `/.netlify/functions/admin-signups${archived ? "?archived=true" : ""}`;
      const res = await fetch(url, {
        headers: {
          "X-Admin-Password": pass,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.status === 401) {
        setError("Invalid password");
        setAuthenticated(false);
        return;
      }

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setSignups(data.signups);
      setAuthenticated(true);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setError("Request timed out. Please try again.");
      } else {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (loading || !password) return;
    await fetchSignups(password, showArchived);
  }

  async function handleDelete(key: string) {
    if (!confirm("Are you sure you want to archive this signup? It will be moved to the archive.")) {
      return;
    }

    setDeleting(key);
    setError("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const res = await fetch("/.netlify/functions/admin-signups", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Password": password,
        },
        body: JSON.stringify({ key }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(data.error || "Failed to archive");
      }

      // Remove from list
      setSignups((prev) => prev.filter((s) => s.key !== key));
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setError("Delete request timed out.");
      } else {
        setError(err instanceof Error ? err.message : "Failed to archive signup");
      }
    } finally {
      setDeleting(null);
    }
  }

  function toggleArchivedView() {
    const newValue = !showArchived;
    setShowArchived(newValue);
    if (authenticated) {
      fetchSignups(password, newValue);
    }
  }

  function exportCSV() {
    const headers = showArchived 
      ? ["Name", "Email", "Mobile", "Date", "Archived Date"]
      : ["Name", "Email", "Mobile", "Date"];
    
    const rows = signups.map((s) => {
      const base = [
        s.name,
        s.email,
        s.mobile || "",
        new Date(s.timestamp).toLocaleString("en-GB"),
      ];
      if (showArchived) {
        base.push(s.archivedAt ? new Date(s.archivedAt).toLocaleString("en-GB") : "");
      }
      return base;
    });

    const csv = [headers.join(","), ...rows.map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const suffix = showArchived ? "-archived" : "";
    a.download = `tentouches-signups${suffix}-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filteredSignups = signups.filter(
    (s) =>
      s.name.toLowerCase().includes(filter.toLowerCase()) ||
      s.email.toLowerCase().includes(filter.toLowerCase())
  );

  const stats = {
    total: signups.length,
    withMobile: signups.filter((s) => s.mobile).length,
    thisWeek: signups.filter((s) => {
      const date = new Date(s.timestamp);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date > weekAgo;
    }).length,
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-tt-navy pt-24 pb-12">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-tt-navy via-tt-slate/40 to-tt-navy -z-10" />
        <div className="gradient-orb w-[500px] h-[500px] bg-tt-cyan/15 -top-32 left-1/3" />
        <div className="gradient-orb w-[400px] h-[400px] bg-tt-indigo/15 -bottom-32 right-1/4" />

        <div className="max-w-6xl mx-auto px-6">
          {!authenticated ? (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="glass-card p-8 rounded-2xl w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-tt-cyan/15 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-tt-cyan"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">Admin Access</h1>
                  <p className="text-sm text-white/50">
                    Enter the admin password to view beta signups.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label
                      htmlFor="admin-password"
                      className="block text-sm font-medium text-white/70 mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="admin-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      disabled={loading}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-tt-cyan/50 focus:ring-1 focus:ring-tt-cyan/30 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-tt-error text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !password}
                    className="w-full rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-8 py-4 text-base font-semibold text-white shadow-lg shadow-tt-cyan/25 transition-all hover:shadow-xl hover:shadow-tt-cyan/35 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Verifying...
                      </span>
                    ) : (
                      "Access Dashboard"
                    )}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {showArchived ? (
                      <>
                        Archived <span className="gradient-text">Signups</span>
                      </>
                    ) : (
                      <>
                        Beta <span className="gradient-text">Signups</span>
                      </>
                    )}
                  </h1>
                  <p className="text-white/50">
                    {showArchived 
                      ? "View and manage archived signups."
                      : "Manage and export your early access list."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={toggleArchivedView}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                      showArchived
                        ? "bg-tt-cyan/20 text-tt-cyan border border-tt-cyan/30"
                        : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    {showArchived ? "View Active" : "View Archive"}
                  </button>
                  <button
                    onClick={exportCSV}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-sm text-white/50 mb-1">Total Signups</p>
                  <p className="text-3xl font-bold text-white">{stats.total}</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-sm text-white/50 mb-1">With Mobile</p>
                  <p className="text-3xl font-bold text-tt-cyan">
                    {stats.withMobile}
                  </p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-sm text-white/50 mb-1">This Week</p>
                  <p className="text-3xl font-bold text-tt-success">
                    {stats.thisWeek}
                  </p>
                </div>
              </div>

              {/* Filter */}
              <div className="mb-6">
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Search by name or email..."
                  className="w-full md:w-96 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-tt-cyan/50 focus:ring-1 focus:ring-tt-cyan/30 transition-colors"
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-6 p-4 rounded-xl bg-tt-error/10 border border-tt-error/20">
                  <p className="text-sm text-tt-error">{error}</p>
                </div>
              )}

              {/* Signups Table */}
              {loading ? (
                <div className="glass-card p-12 rounded-2xl text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-tt-cyan border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="text-white/50">Loading signups...</p>
                </div>
              ) : filteredSignups.length === 0 ? (
                <div className="glass-card p-12 rounded-2xl text-center">
                  <p className="text-white/50">
                    {filter ? "No signups match your search." : showArchived ? "No archived signups." : "No signups yet."}
                  </p>
                </div>
              ) : (
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-sm font-medium text-white/50 px-6 py-4">
                            Name
                          </th>
                          <th className="text-left text-sm font-medium text-white/50 px-6 py-4">
                            Email
                          </th>
                          <th className="text-left text-sm font-medium text-white/50 px-6 py-4">
                            Mobile
                          </th>
                          <th className="text-left text-sm font-medium text-white/50 px-6 py-4">
                            Date
                          </th>
                          {showArchived && (
                            <th className="text-left text-sm font-medium text-white/50 px-6 py-4">
                              Archived
                            </th>
                          )}
                          {!showArchived && (
                            <th className="text-right text-sm font-medium text-white/50 px-6 py-4">
                              Actions
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredSignups.map((signup) => (
                          <tr
                            key={signup.key}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                          >
                            <td className="px-6 py-4 text-white font-medium">
                              {signup.name}
                            </td>
                            <td className="px-6 py-4 text-white/70">
                              <a
                                href={`mailto:${signup.email}`}
                                className="hover:text-tt-cyan transition-colors"
                              >
                                {signup.email}
                              </a>
                            </td>
                            <td className="px-6 py-4 text-white/70">
                              {signup.mobile ? (
                                <a
                                  href={`tel:${signup.mobile}`}
                                  className="hover:text-tt-cyan transition-colors"
                                >
                                  {signup.mobile}
                                </a>
                              ) : (
                                <span className="text-white/30">—</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-white/50 text-sm">
                              {new Date(signup.timestamp).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </td>
                            {showArchived && (
                              <td className="px-6 py-4 text-white/50 text-sm">
                                {signup.archivedAt
                                  ? new Date(signup.archivedAt).toLocaleDateString("en-GB", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    })
                                  : "—"}
                              </td>
                            )}
                            {!showArchived && (
                              <td className="px-6 py-4 text-right">
                                <button
                                  onClick={() => handleDelete(signup.key)}
                                  disabled={deleting === signup.key}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-white/60 hover:text-tt-error transition-colors rounded-lg hover:bg-tt-error/10"
                                  title="Archive this signup"
                                >
                                  {deleting === signup.key ? (
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                  ) : (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                  )}
                                  {deleting === signup.key ? "Archiving..." : "Archive"}
                                </button>
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
