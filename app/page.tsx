
"use client";

import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img
            src="/profile.jpg"
            alt="Ben Chan"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-3xl font-bold text-gray-800">Ben Chan</h1>
          <p className="mt-2 text-xl text-gray-600">Explorer, Builder, Believer</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://linkedin.com/in/bencxr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0077B5" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://twitter.com/bencxr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#1DA1F2" viewBox="0 0 24 24">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </svg>
          </a>
          <a href="https://github.com/bencxr" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>

        <p className="mt-6 text-gray-700 text-center">
          Ben Chan here! Previous VP/Head of Eng at <img src="/chainlink-logo.svg" alt="Chainlink Labs" className="-mt-1 inline-block h-5 align-middle mx-1" />Chainlink Labs, and CTO at <img src="/bitgo-logo.svg" alt="Chainlink Labs" className="-mt-1 inline-block h-5 align-middle mx-1" />BitGo. <br />
          This page is a work in progress to explore content creation on the decentralized web.
        </p>

        <div className="my-8 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="mx-4 text-gray-500">•</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <pre className="mt-6 text-gray-700 text-left bg-blue-100 p-4 rounded-lg">
          <div className="whitespace-pre-wrap break-words">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What I&apos;m interested in building / funding</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Better blockchain user experience through social/passkey wallet login, account abstraction, gas sponsorship, secure recovery, intent centric design etc. Meeting the user in the apps they&apos;re already on</li>
              <li>• Bridging the gap between the real world and crypto</li>
              <li>• New uses for micropayments and privacy</li>
              <li>• Security, decentralization, and building applications that remove the middleman and give the users choice</li>
            </ul>
            <div className="p-4"></div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">How to get in touch with me</h3>
            <p className="mb-0">My email is ben at [ensname] dot io.</p>

            {/* <div className="p-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Some of the things I did in the past</h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Head / VP of Engineering at Chainlink Labs</strong>
                <p>Grew a talented engineering team of 250+ building reliable oracle data, scalable automation and cross chain infrastructure. Connected the real world with DeFi, RWAs, NFTs and many decentralized smart contracts.</p>
              </li>
              <li>
                <strong>CTO at BitGo</strong>
                <p>Developed the world's first multisig wallets, wallet SDKs and custodian services powering 15% of global bitcoin tx volume.</p>
              </li>
              <li>
                <strong>Founding member in WBTC</strong>
                <p>We bridged Bitcoin as an asset to Ethereum. Our vision was for it to be inexpensive, transparent with proof of reserves, widely adopted and decentralized. We succeeded in some of those goals. <a href="https://twitter.com/loi_luu/status/1823244566457471012" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Learn more</a></p>
              </li>
              <li>
                <strong>Ether.li</strong>
                <p>The first multi-sig native web wallet project for Ethereum, deprecated in 2018.</p>
              </li>
            </ul> */}

          </div>
        </pre>
      </div>
    </div >
  );
};

export default Home;
