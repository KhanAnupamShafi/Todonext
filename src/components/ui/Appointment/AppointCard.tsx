import { CardData } from './AppointLists';

const AppointCard = ({ cardData }: { cardData: CardData }) => {
  return (
    <div className="list-item ">
      <div className="flex gap-1 rounded-lg rounded-l-2xl border border-[#FDDAD6] bg-[#FFF5F5] dark:bg-opacity-10">
        <div className="flex h-[100px] flex-col items-center justify-center rounded-l-2xl rounded-r-2xl border border-r-2 border-[#EDEBEB] bg-white p-3">
          <p className="text-xxs font-medium text-[#b6b0b0] large:text-xs">
            22
          </p>
          <p className="text-xl font-medium text-[#384449] large:text-2xl">
            13
          </p>
          <p className="text-xl font-medium text-[#b6b0b0] large:text-2xl">
            Sep
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-1.5">
          <h2 className="text-xxs font-semibold text-dark dark:text-white medium:text-xs large:text-base">
            {cardData.name}
          </h2>
          <p className="text-sm font-light text-dark dark:text-white">
            {cardData.specialization}
          </p>
          <div>
            <span className="text-xxs mr-4 rounded-md bg-white p-1 text-type-3 large:text-xs">
              Slot: <span className="text-[#384449]">{cardData.slot}</span>
            </span>
            <span className="text-xxs rounded-md bg-white p-1 text-type-3 large:text-xs">
              Time: <span className="text-[#384449]">{cardData.time}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointCard;
