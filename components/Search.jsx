import { SearchOutlined } from "@ant-design/icons"

export default function Search() {
  return (
    <div className="border flex items-center rounded-full px-3 py-1 bg-white">
        <input
        type="text"
        className="text-gray-900 border-none focus:outline-none text-sm"
        placeholder="Buscar..."
        />
        <SearchOutlined className="cursor-pointer text-xl text-gray-900 hover:text-orange-400" />
    </div>
  )
}
