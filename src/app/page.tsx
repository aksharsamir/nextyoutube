import Youtube from './componant/youtube.svg'
import Navbar from "./componant/Navbar"
import Offcanvas from './componant/Offcanvas'
import Category from './componant/Category'
import Main_content from './componant/Main_content'


export default function App() {

  return (
    <>

      <Navbar logo={Youtube} />
      {
        console.log(Youtube)
      }

      <div>

        <div className='w-[20%] float-left'>
          <Offcanvas />
        </div>

        <div className='mt-3  w-[79%] float-right'>
          <section><Category /> </section>
          <section><Main_content /></section>
        </div>

      </div>

    </>
  )
}
