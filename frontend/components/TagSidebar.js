import {tags, languages} from "../app/info";
import Link from "next/link";

export default function TagSidebar () {
  return (
    <div className="flex flex-col bg-white rounded-md h-full w-full lg:w-72 lg:border-r lg:pr-4">
      {/* Filter title */}
      <h2 className="font-medium text-lg py-4 px-2 lg:px-4">Filter</h2>

      {/* Filter options */}
      <div className="flex-1 overflow-y-auto py-4 px-2 lg:px-4">
        {/* Option group */}
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Tags</h3>
          <ul>
            {tags.map((item, index) => (
              <li key={index}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">{item}</span>
                </label>
              </li>
            ))}
            {/* more options... */}
          </ul>
        </div>

        {/* Another option group */}
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Languages</h3>
          <ul>
            {languages.map((item, index) => (
              <li key={index}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">{item}</span>
                </label>
              </li>
            ))}
            {/* more options... */}
          </ul>
        </div>
      </div>
    </div>
  )
}