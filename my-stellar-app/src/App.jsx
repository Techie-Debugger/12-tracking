import React, { useState } from "react";
import Landing from "./pages/Landing.jsx";
import Profile from "./pages/Profile.jsx";

export default function App() {
    const [walletKey, setWalletKey] = useState(null);

    const handleConnected = (publicKey) => {
        setWalletKey(publicKey);
    };

    const handleDisconnect = () => {
        setWalletKey(null);
    };

    if (walletKey) {
        return <Profile walletKey={walletKey} onDisconnect={handleDisconnect} />;
    }

    return <Landing onConnected={handleConnected} />;
}