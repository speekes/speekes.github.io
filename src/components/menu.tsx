import Dropdown from '../components/dropdown'


const Menu = () => {
  return (
    <div className="bg-gray-200 mb-4 p-2">
      <Dropdown name="Cars" items={[]}/>
      <Dropdown name="Motorbikes" items={[]}/>
    </div>
  )
}

export default Menu