import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICETCSE, International Conference, Computer Science, Engineering, Artificial Intelligence, Machine Learning, Cloud Computing, Data Analytics, Cybersecurity, IoT, Big Data, Software Engineering, Computational Models, Emerging Trends, Academic Conference 2025, Technology Innovations, Industry 4.0, Smart Systems, Blockchain, Edge Computing" />
            <meta name="description" content="The International Conference on Emerging Trends in Computer Science & Engineering (ICETCSE 2025) unites researchers, academicians, and industry leaders to explore breakthroughs in AI, cloud computing, cybersecurity, IoT, data analytics, and other cutting-edge technologies shaping the future." />
            <meta name="author" content="ICETCSE Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Emerging Trends in Computer Science & Engineering (ICETCSE)" />
            <meta property="og:description" content="Join ICETCSE 2025 to discover emerging trends and innovative research in computer science and engineering through expert keynotes, technical sessions, and collaborative discussions." />
            <meta property="og:url" content="https://icetcse.com/" />
            <meta property="og:image" content="https://icetcse.com/assets/images/White.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icetcse.com/assets/images/ICETCSE-Fav.png" />
        </Helmet>

    );
}

export default HelmetComponent;
