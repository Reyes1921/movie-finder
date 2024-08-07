// import {Button} from "@material-tailwind/react"
// import {Input} from "postcss"
// import {useNavigate} from "react-router-dom"

// export const SearchBar = () => {
//   const navigate = useNavigate()

//   const submit = (event) => {
//     event.preventDefault()
//     const value = event.target[0].value
//     navigate(`/search/${value}`)
//   }

//   return (
//     <div className="hidden items-center gap-x-2 lg:flex">
//       <div className="relative flex w-full gap-2 md:w-max">
//         <form action="" onSubmit={submit}>
//           <Input
//             type="search"
//             placeholder="Search"
//             containerProps={{
//               className: "min-w-[288px]",
//             }}
//             className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300 rounded-xl"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <div className="!absolute left-3 top-[13px]">
//             <svg
//               width="13"
//               height="14"
//               viewBox="0 0 14 15"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
//                 fill="#CFD8DC"
//               />
//               <path
//                 d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
//                 stroke="#CFD8DC"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </form>
//       </div>
//       <Button size="md" className="rounded-lg bg-[#2074F6]" onClick={submit}>
//         Search
//       </Button>
//     </div>
//     // <div className="pt-2 relative mx-auto text-gray-600">
//     //   <form action="" onSubmit={submit}>
//     //     <input
//     //       className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none sm-w-20 md:w-80 lg:96"
//     //       type="search"
//     //       name="search"
//     //       placeholder="Search"
//     //     />
//     //   </form>
//     //   <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 ">
//     //     <svg
//     //       className="text-gray-600 h-4 w-4 fill-current"
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       xmlnsXlink="http://www.w3.org/1999/xlink"
//     //       version="1.1"
//     //       id="Capa_1"
//     //       x="0px"
//     //       y="0px"
//     //       viewBox="0 0 56.966 56.966"
//     //       style={{enableBackground: "new 0 0 56.966 56.966"}}
//     //       xmlSpace="preserve"
//     //       width="512px"
//     //       height="512px"
//     //     >
//     //       <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//     //     </svg>
//     //   </button>
//     // </div>
//   )
// }
