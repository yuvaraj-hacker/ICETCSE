import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICACSIT, International Conference, Computer Science, Information Technology, AI, Machine Learning, Big Data, Cloud Computing, Software Engineering, Computational Models, Data Analytics, Smart Systems, Emerging Trends, Academic Conference 2025, CS Research, IT Innovations, Advanced Algorithms, IoT, Cybersecurity" />
            <meta name="description" content="The International Conference on Advances in Computer Science and Information Technology (ICACSIT 2025) brings together researchers, scholars, and professionals to discuss innovations in computer science, information technology, artificial intelligence, data analytics, and more." />
            <meta name="author" content="ICACSIT Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Advances in Computer Science and Information Technology (ICACSIT)" />
            <meta property="og:description" content="Join ICACSIT 2025 to explore the latest trends and research in computer science, IT, AI, and more through expert sessions and technical papers." />
            <meta property="og:url" content="https://icacsit.com/" />
            <meta property="og:image" content="https://icacsit.com/assets/images/White.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icacsit.com/assets/images/ICACSIT-Fav.png" />
        </Helmet>
    );
}

export default HelmetComponent;
