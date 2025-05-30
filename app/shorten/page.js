"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const page = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");

        console.log(result);
        alert(result.message || "URL shortened successfully");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          🔗 Shorten
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Use this page to shorten your URLs.
        </p>

        <div>
          <input
            type="text"
            value={url}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition rounded-lg p-3 w-full mb-4"
            placeholder="Enter your URL"
            onChange={(e) => seturl(e.target.value)}
          />

          <input
            type="text"
            value={shorturl}
            className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition rounded-lg p-3 w-full mb-4"
            placeholder="Shortened URL Key"
            onChange={(e) => setshorturl(e.target.value)}
          />

          <button
            onClick={generate}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Shorten
          </button>
        </div>
        {generated && (
          <>
            <span className="text-gray-600 font-bold">Your Link:</span>
            <code>
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
