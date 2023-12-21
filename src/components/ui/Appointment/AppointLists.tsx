import AppointCard from './AppointCard';

const AppointLists = () => {
  const cardData: CardData = {
    name: 'Dr. Muhammad Abdul Hussein',
    specialization: 'Cardiologist',
    slot: 'Morning',
    time: '10.00 AM',
  };
  const dataArray = Array.from({ length: 4 }, (_, index) => index);
  return (
    <div className="rounded-md bg-white  p-4 dark:bg-opacity-10 large:max-w-[452px]">
      <h1 className="text-sm font-medium text-dark dark:text-white medium:text-base">
        Upcoming Appointments
      </h1>
      <ul className="list-wrapper pt-4">
        <div className="grey-line"></div>

        {dataArray.map((item, index) => {
          let colorClass;

          switch (index % 4) {
            case 0:
              colorClass = '!bg-[#FF9898]';
              break;
            case 1:
              colorClass = '!bg-[#FFF598]';
              break;
            case 2:
              colorClass = '!bg-[#98FFC1]';
              break;
            case 3:
              colorClass = '!bg-[#98C7FF]';
              break;
            default:
              colorClass = '!bg-[#FFF598]';
          }
          return (
            <li key={item} className="list-item-wrapper">
              <div className={`list-bullet ${colorClass}`}></div>
              <AppointCard cardData={cardData} />
              {index === dataArray.length - 1 && (
                <div className="white-line"></div>
              )}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppointLists;

export interface CardData {
  name: string;
  specialization: string;
  slot: string;
  time: string;
}
