// "use client";
// import { useEffect, useRef } from "react";
// import Script from "next/script";

// let tvScriptLoadingPromise: any;
// declare var window: Window & typeof globalThis & Record<"TradingView", any>;

// export default function TradingViewWidget() {
//   const onLoadScriptRef = useRef<any>(null);

//   useEffect(() => {
//     onLoadScriptRef.current = createWidget;

//     if (!tvScriptLoadingPromise) {
//       tvScriptLoadingPromise = new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.id = "tradingview-widget-loading-script";
//         script.src = "https://s3.tradingview.com/tv.js";
//         script.type = "text/javascript";
//         script.onload = resolve;

//         document.head.appendChild(script);
//       });
//     }

//     tvScriptLoadingPromise.then(
//       () => onLoadScriptRef.current && onLoadScriptRef.current()
//     );

//     return () => (onLoadScriptRef.current = null);

//     function createWidget() {
//       if (
//         document.getElementById("tradingview_aa4d7") &&
//         "TradingView" in window
//       ) {
//         new window.TradingView.widget({
//           autosize: true,
//           symbol: "CRYPTOCAP:USDT",
//           interval: "24H",
//           timezone: "Etc/UTC",
//           theme: "light",
//           style: "1",
//           locale: "en",
//           enable_publishing: false,
//           allow_symbol_change: true,
//           hide_volume: true,
//           container_id: "tradingview_aa4d7",
//         });
//       }
//     }

//     return createWidget;
//   }, []);

//   return (
//     <div className={`tradingview-widget-container w-full rounded-lg bg-snow `}>
//       <Script
//         src="https://s3.tradingview.com/tv.js"
//         onLoad={onLoadScriptRef.current}
//       />

//       <div
//         id="tradingview_aa4d7"
//         // className="bg-darkblue w-full h-[20rem] md:h-[30rem]"
//         className="h-[20rem] rounded-lg relative"
//       />
//     </div>
//   );
// }
"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

let tvScriptLoadingPromise: any;
declare var window: Window & typeof globalThis & Record<"TradingView", any>;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef<any>(null);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    function createWidget() {
      if (
        document.getElementById("tradingview_aa4d7") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "CRYPTOCAP:USDT",
          interval: "24H",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_volume: true,
          container_id: "tradingview_aa4d7",
        });

        // Wait for the widget to load and then apply styles to the iframe
        setTimeout(() => {
          const iframe = document.querySelector("#tradingview_aa4d7 iframe");
          if (iframe) {
            iframe.style.borderRadius = "12px"; // Adjust as needed
          }
        }, 1000); // Adjust the timeout duration as necessary
      }
    }

    return () => (onLoadScriptRef.current = null);
  }, []);

  return (
    <div className="tradingview-widget-container w-full bg-snow rounded-lg overflow-hidden">
      {" "}
      {/* Add rounded corners and handle overflow */}
      <Script
        src="https://s3.tradingview.com/tv.js"
        onLoad={onLoadScriptRef.current}
      />
      <div
        id="tradingview_aa4d7"
        className="h-[20rem]" // Add height to the container
      />
    </div>
  );
}
