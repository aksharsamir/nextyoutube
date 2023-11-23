export default function Navbar(props) {
  return (
    <section className='pt-[7px]'>
      <div className='columns-3'>
        <div className='flex item-center'>
          <div className='inline self-center'>
            <button className='ml-3 '>
              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false" >
                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
              </svg>
            </button>
          </div>
          <div className='inline'>
            <img src={props.logo} className="logo inline" alt="Logo" />
            {/* <img sr className="logo inline" alt="Logo" /> */}
          </div>
        </div>

        <div className='' >
          <div className='flex items-center ' >
            <div>
              <input type="text" className="border outline-none w-[25em] px-4 rounded-l-full p-[6.70px]" placeholder='Search....'/>
            </div>
            <div >
              <button  className="border rounded-r-full p-[5px] pr-[10px]" placeholder="Search.." ><svg height="26" viewBox="0 0 24 24" width="24" ><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg></button>
            </div>

            <div className="px-2">
              <button  className="border rounded-full p-2" placeholder="Search.." ><svg height="24" width="24" focusable="false" ><path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path></svg></button>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='text-end'>
            <button className="border p-2 rounded-full me-3" >
              <svg height="24" className='inline' viewBox="0 0 24 24" width="24" >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z" fill='#065fd4'></path>
              </svg> Sign In</button>
          </div>
        </div>

      </div>
    </section>
  )
}