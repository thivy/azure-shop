import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Azure Shop</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Azure Shop" />
      <link rel="icon" href="/favicon.ico" />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NL05REEWCG"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-NL05REEWCG');`}
      </Script>
    </>
  );
}
