import {useEffect, useState} from "react"

export const PersonInfo = ({info}) => {
  const [personInfo, setPersonInfo] = useState(info)

  useEffect(() => {
    setPersonInfo(info)
  }, [])

  return (
    <div>
      <h3 className=" text-white text-2xl mb-5 mt-5 font-bold text-center md:text-left">
        Personal Info
      </h3>
      <div className="p-2">
        <h2 className="text-left text-white text-lg font-bold">Birthday</h2>
        <p className="text-gray-400 text-base">{personInfo.birthday}</p>
      </div>
      <div className={`p-2 ${personInfo.deathday ? "inline-block" : "hidden"}`}>
        <h2 className="text-left text-white text-lg font-bold">
          Date of Death
        </h2>
        <p className="text-gray-400 text-base">{personInfo.deathday}</p>
      </div>
      <div className="p-2">
        <h2 className="text-left text-white text-lg font-bold">
          Place of Birth
        </h2>
        <p className="text-gray-400 text-base">{personInfo.place_of_birth}</p>
      </div>
      <div className="p-2">
        <h2 className="text-left text-white text-lg font-bold">Gender</h2>
        <p className="text-gray-400 text-base">
          {personInfo.gender === 2 ? "Male" : "Female"}
        </p>
      </div>
    </div>
  )
}
