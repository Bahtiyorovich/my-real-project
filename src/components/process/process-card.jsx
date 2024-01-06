
const ProcessCard = ({item}) => {
  return (
    <div 
      className="border-[3px] border-pink-500 h-[200px] p-4">
      <h4 className="font-bold">{item.id < 10 ? '0' + item.id : item.id}</h4>
      <h2 className="text-pink-500 font-bold text-xl my-[10px]">{item.name}</h2>
      <p className="text-slate-500">lorem30</p>
    </div>
  )
}

export default ProcessCard