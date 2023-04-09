import {tags, languages} from "../app/info";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TagSidebar () {
  const router = useRouter();
  const { filter } = router.query;

  let AllComponent = (<input type="checkbox" className="form-checkbox" />)
  if (filter === undefined) {
    AllComponent = <input type="checkbox" className="form-checkbox" checked />
  }

  return (
    <div className="flex flex-col bg-white rounded-md h-full w-72 p-2 lg:border-r">
      {/* Filter title */}
      <h2 className="font-medium text-lg py-4 px-4">Filter</h2>

      {/* Filter options */}
      <div className="flex-1 overflow-y-auto py-4 px-4">
        {/* Option group */}
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Tags</h3>
          <ul>
            {
              tags.map((item, index) => {
                if (filter && item === filter) {
                  return (
                    <li key={index}>
                      <Link href={`../projects?filter=${encodeURIComponent(item)}`}>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox" checked />
                          <span className="ml-2">{item}</span>
                        </label>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link href={`../projects?filter=${encodeURIComponent(item)}`}>
                        <label className="inline-flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2">{item}</span>
                        </label>
                      </Link>
                    </li>
                  );
                }
              }
            )}
            {/* more options... */}
          </ul>
        </div>

        {/* Another option group */}
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2">Languages</h3>
          <ul>
            {languages.map((item, index) => {
              if (filter && item === filter) {
                return (
                  <li key={index}>
                    <Link href={`../projects?filter=${encodeURIComponent(item)}`}>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" checked />
                        <span className="ml-2">{item}</span>
                      </label>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link href={`../projects?filter=${encodeURIComponent(item)}`}>
                      <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2">{item}</span>
                      </label>
                    </Link>
                  </li>
                );
              }
            })}
            {/* more options... */}
          </ul>
        </div>

        <div className="mb-4">
          <Link href={`../projects`}>
            <label className="inline-flex items-center">
              {AllComponent}
              <span className="ml-2">All</span>
            </label>
          </Link>
        </div>
      </div>
    </div>
  )
}