interface AwardsProps {
    awards: string[][][];

}

export default function Awards({ awards }: AwardsProps) {
    return (
      <>
        {awards.map((awardRow, rowIndex) => (
          <div
            key={`awardRow-${rowIndex}`}
            className="flex items-center justify-between w-60vw"
          >
            {awardRow.map((award, awardIndex) => (
              <div
                key={`award-${rowIndex}-${awardIndex}`}
                className={`w-10vw m-[4vw] ${
                  awardIndex === 0 ? 'border-l-2  border-white' : ''
                } ${awardIndex === awardRow.length - 1 ? 'border-r-2 border-orange-600' : ''}`}
              >
                <h2 className={`text-base font-bold ${awardIndex === 0 ? 'ml-[1em]' : 'mr-[1em]'}`}>{award[0]}</h2>
                <p className={`text-sm ${awardIndex === 0 ? 'ml-[1em]' : 'mr-[1em]'}`} >{award[1]}</p>
              </div>
            ))}
          </div>
        ))}
      </>
    );
}