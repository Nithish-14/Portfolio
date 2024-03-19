import React from 'react';

const StructuredData = () => {
  return (
    <script type="application/ld+json">
      {`
      {
        "@context": "http://schema.org",
        "@type": "Person",
        "name": "Nithish Kumar",
        "jobTitle": "Web Developer",
        "url": "https://nithishm.vercel.app",
        "sameAs": [
            "https://www.linkedin.com/in/nithishkumarm/",
            "https://github.com/Nithish-14",
            "https://twitter.com/Nithish__M"
        ]
      }
      `}
    </script>
  );
};

export default StructuredData;
