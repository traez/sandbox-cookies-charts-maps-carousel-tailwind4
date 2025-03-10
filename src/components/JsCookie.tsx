"use client";
import { useState } from "react";
import Cookies from "js-cookie";

const JsCookie = () => {
  const [theme, setTheme] = useState(Cookies.get("theme") || "light");
  const [cookieName, setCookieName] = useState("foo");
  const [expirationValue, setExpirationValue] = useState(2);
  const [expirationUnit, setExpirationUnit] = useState("minutes");
  const [feedback, setFeedback] = useState("");
  const [cookieStatus, setCookieStatus] = useState("");
  const [lastGeneratedValue, setLastGeneratedValue] = useState("");

  // Function to generate a truly random cookie value using crypto
  const generateComplexValue = () => {
    let randomValue = "";

    // Use the Web Crypto API (browser equivalent of Node's crypto module)
    if (typeof window !== "undefined" && window.crypto) {
      // Create a new array of 32 random bytes (similar to crypto.randomBytes(32))
      const randomBytes = new Uint8Array(32);
      window.crypto.getRandomValues(randomBytes);

      // Convert to hex string (similar to .toString('hex'))
      randomValue = Array.from(randomBytes)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    } else {
      // Fallback if crypto is not available (should rarely happen)
      const characters = "0123456789abcdef";
      for (let i = 0; i < 64; i++) {
        // 32 bytes = 64 hex chars
        randomValue += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    }

    setLastGeneratedValue(randomValue);
    return randomValue;
  };

  // Function to set a cookie with custom expiration and random value
  const storeCookie = () => {
    if (!cookieName.trim()) {
      const message = "Cookie name cannot be empty!";
      console.log(message);
      setFeedback(message);
      setCookieStatus("error");
      return;
    }

    // Calculate expiration in milliseconds
    const multiplier =
      expirationUnit === "minutes" ? 60 * 1000 : 60 * 60 * 1000;
    const expiresAt = new Date(
      new Date().getTime() + expirationValue * multiplier
    );

    // Generate a new random complex value
    const complexValue = generateComplexValue();

    Cookies.set(cookieName, complexValue, { expires: expiresAt });

    const message = `Cookie "${cookieName}" stored with a complex random value! Expires in ${expirationValue} ${expirationUnit}.`;
    console.log(message);
    console.log(`Generated value: ${complexValue}`);
    setFeedback(message);
    setCookieStatus("active");
  };

  // Function to retrieve a cookie value
  const fetchCookie = () => {
    if (!cookieName.trim()) {
      const message = "Cookie name cannot be empty!";
      console.log(message);
      setFeedback(message);
      setCookieStatus("error");
      return;
    }

    const retrievedValue = Cookies.get(cookieName);

    let message;
    if (retrievedValue) {
      message = `Retrieved cookie "${cookieName}"`;
      setLastGeneratedValue(retrievedValue);
      setCookieStatus("active");
    } else {
      message = `No cookie named "${cookieName}" found.`;
      setLastGeneratedValue("");
      setCookieStatus("inactive");
    }

    console.log(message);
    if (retrievedValue) console.log(`Value: ${retrievedValue}`);
    setFeedback(message);
  };

  // Function to remove a cookie
  const removeCookie = () => {
    if (!cookieName.trim()) {
      const message = "Cookie name cannot be empty!";
      console.log(message);
      setFeedback(message);
      setCookieStatus("error");
      return;
    }

    Cookies.remove(cookieName);

    const message = `Cookie "${cookieName}" removed!`;
    console.log(message);
    setFeedback(message);
    setCookieStatus("inactive");
    setLastGeneratedValue("");
  };

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 30 });
  };

  return (
    <div
      className={`p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">JsCookie Page</h1>

      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-4">Cookie Controls</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2">Cookie Name:</label>
            <input
              type="text"
              value={cookieName}
              onChange={(e) => setCookieName(e.target.value)}
              className={`w-full p-2 border rounded ${
                theme === "dark" ? "bg-gray-700 text-white" : "text-black"
              }`}
              placeholder="Enter cookie name"
            />
            <p className="text-sm mt-1 opacity-70">
              You choose the name, we will generate a secure value
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Expiration:</label>
              <input
                type="number"
                min="1"
                value={expirationValue}
                onChange={(e) =>
                  setExpirationValue(Math.max(1, parseInt(e.target.value) || 1))
                }
                className={`w-full p-2 border rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : "text-black"
                }`}
              />
            </div>

            <div>
              <label className="block mb-2">Unit:</label>
              <select
                value={expirationUnit}
                onChange={(e) => setExpirationUnit(e.target.value)}
                className={`w-full p-2 border rounded ${
                  theme === "dark" ? "bg-gray-700 text-white" : "text-black"
                }`}
              >
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            onClick={storeCookie}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Cookie
          </button>

          <button
            onClick={fetchCookie}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Get Cookie
          </button>

          <button
            onClick={removeCookie}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Remove Cookie
          </button>
        </div>
      </div>

      {lastGeneratedValue && (
        <div className="mb-8 p-4 border rounded bg-gray-100 text-black">
          <h3 className="font-semibold mb-2">Cookie Value:</h3>
          <div className="bg-white p-3 rounded border overflow-x-auto">
            <code>{lastGeneratedValue}</code>
          </div>
          <p className="text-sm mt-2 opacity-70">
            This complex value follows security best practices by being
            unpredictable and unique.
          </p>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
        <div className="flex items-center gap-4">
          <span>Current Theme: {theme}</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Toggle Theme
          </button>
        </div>
      </div>

      {feedback && (
        <div
          className={`p-4 mb-6 rounded ${
            cookieStatus === "active"
              ? "bg-green-100 text-green-800"
              : cookieStatus === "inactive"
              ? "bg-yellow-100 text-yellow-800"
              : cookieStatus === "error"
              ? "bg-red-100 text-red-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default JsCookie;
