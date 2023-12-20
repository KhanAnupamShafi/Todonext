import Image from 'next/image';

const Stats = () => {
  return (
    <div className="rounded-md bg-white p-4 px-5 py-2 large:max-w-[452px]">
      <div className="flex justify-between py-2">
        <h2 className="text-sm font-semibold text-dark">Covid-19 Updates</h2>
        <div>
          <h2 className="text-sm font-semibold text-dark">10 September 2022</h2>
          <p className="text-sm text-type-1">Thursday 10:00:00 AM</p>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-between gap-14 medium:flex-row large:gap-0">
        <div className="relative h-[228px] w-[228px] ">
          <Image
            className="p-1.5"
            fill
            src={'/images/svg-sample-2.svg'}
            alt=""
          />
        </div>
        <div className="grid flex-1 gap-4 gap-y-5 rounded-md bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] px-6 py-2 medium:grid-cols-2 large:grid-cols-1">
          {allStats.map((stats, index) => (
            <div
              key={stats.title}
              className={` w-[120px] ${
                index >= allStats.length - 2 ? 'block large:hidden' : ''
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-1 font-semibold text-white">
                <p className="whitespace-nowrap text-sm">{stats.title}</p>
                <h2 className="text-4xl">{stats.value}</h2>
              </div>
            </div>
          ))}

          {/* <div className="block bg-gray-200 p-4 large:hidden">Item 3</div>
          <div className="block bg-gray-200 p-4 large:hidden">Item 4</div> */}
        </div>
      </div>
    </div>
  );
};

export default Stats;

const allStats = [
  { title: 'Infection Number', value: '500' },
  { title: 'Infection Rate', value: '500' },
  { title: 'Total Infection', value: '500' },
  { title: 'Number of Death', value: '500' },
];
