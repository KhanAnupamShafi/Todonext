import { CardData } from './AppointLists';

const AppointCard = ({ cardData }: { cardData: CardData }) => {
  return (
    <div className="p-2">
      <div className="flex rounded-lg rounded-l-2xl border border-[#FDDAD6] bg-[#FFF5F5]">
        <div className="flex h-[100px] flex-col items-center justify-center rounded-l-2xl rounded-r-2xl border border-r-2 border-[#EDEBEB] bg-white p-3 text-[#384449]">
          <p className="text-xs font-medium text-[#b6b0b0]">22</p>
          <p className="text-2xl font-semibold ">13</p>
          <p className="text-2xl font-medium text-[#b6b0b0]">Sep</p>
        </div>
        <div className="flex-1  p-1.5">
          <h2 className="font-semibold text-dark">{cardData.name}</h2>
          <p className="pb-2 text-sm font-light">{cardData.specialization}</p>
          <div>
            <span className="text-type-3 mr-4 rounded-md bg-white p-1">
              Slot: <span className="text-[#384449]">{cardData.slot}</span>
            </span>
            <span className="text-type-3 rounded-md bg-white p-1">
              Time: <span className="text-[#384449]">{cardData.time}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointCard;
