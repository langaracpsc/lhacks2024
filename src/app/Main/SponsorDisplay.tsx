import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

interface Sponsor {
    name: string;
    logo: string;
    link: string;
    size: string;
    row: number;
}

const sponsorsData = {
    current: [
        {
            name: 'Langara College',
            logo: require("../../../assets/sponsors/langara_logo.jpg"),
            link: "https://langara.ca/",
            size: 'w-48 h-48',
            row: 1
        }
        // { name: 'AoPS', logo: require('../../../assets/sponsors/microserve-logo.svg'), size: 'w-24 h-24', row: 1 },
        // { name: '1Password', logo: '/path/to/1password-logo.png', size: 'w-24 h-24', row: 1 },
        // { name: 'Interview Cake', logo: '/path/to/interview-cake-logo.png', size: 'w-24 h-24', row: 2 },
        // { name: '.xyz', logo: '/path/to/xyz-logo.png', size: 'w-24 h-24', row: 2 },
    ],
    past: [
        {
            name: 'Microserve',
            logo: require('../../../assets/sponsors/microserve_logo.svg'),
            link: "https://www.microserve.ca/",
            size: 'w-48 h-48',
            row: 1
        },
        {
            name: 'MLH',
            logo: require("../../../assets/sponsors/mlh_logo.png"),
            link: "https://mlh.io/",
            size: 'w-48 h-48',
            row: 1
        },
        {
            name: 'Langara College',
            logo: require("../../../assets/sponsors/langara_logo.jpg"),
            link: "https://langara.ca/",
            size: 'w-48 h-48',
            row: 1
        }
    ],
};

const SponsorDisplay: React.FC = () => {
    const renderSponsors = (sponsors: Sponsor[]) => {
        const rows: { [key: number]: Sponsor[] } = {};

        sponsors.forEach(sponsor => {
            if (!rows[sponsor.row]) {
                rows[sponsor.row] = [];
            }
            rows[sponsor.row].push(sponsor);
        });

        return Object.keys(rows).map(row => (
            <div key={row} className="flex justify-center gap-10 space-x-4 mb-4">
                {rows[parseInt(row)].map(sponsor => (
                    <div key={sponsor.name} className={sponsor.size}>
                        <Link href={sponsor.link} target='_blank'>
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                className={`w-[96] h-[96]`}
                            />
                        </Link>


                    </div>
                ))}
            </div>
        ));
    };

    return (
        <div className="container mx-auto p-4 justify-center text-center">



            {/* HIDDEN UNTIL SPONSORS ARE CONFIRMED */}
            {/* <h2 className="text-2xl font-bold mb-4 text-center">Sponsors</h2>
            {renderSponsors(sponsorsData.current)} */}

            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Past Sponsors</h2>
            {renderSponsors(sponsorsData.past)}

            <div className="flex justify-center items-center h-full">
                <a href="mailto:langaracompsciclub@gmail.com" className="text-base px-[1em] m-[1em] border-2 border-orange-600 py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300">
                    Interested in sponsoring? Reach out!
                </a>
            </div>


        </div>
    );
};

export default SponsorDisplay;