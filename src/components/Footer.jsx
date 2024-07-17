export const Footer = () => {
  return (
    <footer
      className="bg-white border-gray-200 fixed bottom-0 w-full"
      style={{backgroundColor: "#0F172A"}}
    >
      <div className="grid grid-cols-2 max-w-screen-xl items-center justify-center mx-auto p-4 ">
        <div className="flex justify-center ">
          <h3 className="text-stone-50">Powered By &nbsp;</h3>
          <img
            src="/themoviedb.svg"
            alt="themoviedb logo"
            className="w-5/12 lg:w-4/12 md:w-4/12 "
          />
        </div>
        <h3 className="text-stone-50 flex justify-center">© Reyes Rondón</h3>
      </div>
    </footer>
  )
}
