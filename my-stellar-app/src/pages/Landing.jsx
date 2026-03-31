import React, { useState } from "react";
import { checkConnection } from "../lib/stellar.js";

export default function Landing({ onConnected }) {
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState("");

    const handleConnect = async () => {
        setIsConnecting(true);
        setError("");
        try {
            const user = await checkConnection();
            if (user && user.publicKey) {
                onConnected(user.publicKey);
            } else {
                setError("Wallet not found. Please install Freighter and try again.");
            }
        } catch (err) {
            setError(err?.message || "Connection failed. Please try again.");
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <div className="landing-page">
            {/* Background overlay */}
            <div className="landing-overlay" />

            {/* Nav */}
            <nav className="landing-nav">
                <span className="landing-nav-brand">🚚 Tracking</span>
                <button
                    id="landingConnectBtn"
                    className={`landing-connect-btn ${isConnecting ? "connecting" : ""}`}
                    onClick={handleConnect}
                    disabled={isConnecting}
                >
                    {isConnecting ? (
                        <>
                            <span className="btn-spinner" />
                            Connecting…
                        </>
                    ) : (
                        <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                            Connect Wallet
                        </>
                    )}
                </button>
            </nav>

            {/* Hero Content */}
            <main className="landing-main">
                <div className="landing-card">
                    <div className="landing-badge">Stellar Blockchain</div>
                    <h1 className="landing-title">Shipment Tracking<br />on the Chain</h1>
                    <p className="landing-subtitle">
                        Create, track, and verify shipments in real-time — secured by the Stellar network.
                        Connect your Freighter wallet to get started.
                    </p>

                    {error && (
                        <div className="landing-error" id="landingError">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                            {error}
                        </div>
                    )}

                    <button
                        id="landingMainConnectBtn"
                        className={`landing-main-btn ${isConnecting ? "connecting" : ""}`}
                        onClick={handleConnect}
                        disabled={isConnecting}
                    >
                        {isConnecting ? (
                            <>
                                <span className="btn-spinner" />
                                Connecting to Freighter…
                            </>
                        ) : (
                            <>
                                Connect Freighter Wallet
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </>
                        )}
                    </button>

                    <div className="landing-features">
                        <div className="feature-chip">📦 Create Shipments</div>
                        <div className="feature-chip">📍 Add Checkpoints</div>
                        <div className="feature-chip">✅ Mark Delivered</div>
                        <div className="feature-chip">🔍 Query On-Chain</div>
                    </div>
                </div>
            </main>
        </div>
    );
}
