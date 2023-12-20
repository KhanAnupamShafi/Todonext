import AppointLists from './Appointment/AppointLists';
import Hero from './Hero';
import Stats from './Stats';
import TodoList from './TodoList/TodoList';

const Landing = () => {
  return (
    <div className="grid grid-flow-col grid-cols-1 gap-4 medium:grid-cols-2 medium:grid-rows-3 large:col-auto large:grid-rows-6 large:gap-x-[120px]">
      <div className="col-span-full medium:col-span-2 medium:row-span-1 large:col-span-1 large:row-span-3">
        <Hero />
      </div>
      <div className="col-span-full medium:col-span-1 medium:row-span-1 large:row-span-3">
        <TodoList />
      </div>
      <div className="col-span-full medium:col-span-1  medium:row-start-2 medium:row-end-3 large:row-span-4">
        <AppointLists />
      </div>
      <div className="col-span-full medium:col-start-1 medium:row-start-3 large:col-span-1  large:row-span-2">
        <Stats />
      </div>
    </div>
  );
};

export default Landing;

// <div className="grid grid-flow-col grid-rows-3 gap-4">
//   <div className="col-span-4  large:col-span-1 large:row-span-1">
//     <Hero />
//   </div>
//   <div className="cpl-span-2 row-span-2 row-start-2  row-end-4 large:col-span-1 large:row-span-2">
//     <Hero />
//   </div>
//   <div className=" large:row-span-1">
//     <AppointLists />
//   </div>
//   <div className="row-span-1  large:row-span-1">
//     <AppointLists />
//   </div>
// </div>
