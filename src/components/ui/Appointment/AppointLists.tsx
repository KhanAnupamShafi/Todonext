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
    <div className="rounded-md bg-white p-4 large:max-w-[452px]">
      <h1 className="font-medium text-dark">Upcoming Appointments</h1>
      <ul className="pt-4">
        {dataArray.map((item) => (
          <li key={item} className="">
            <AppointCard cardData={cardData} />
          </li>
        ))}
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
