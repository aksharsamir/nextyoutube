import Image from "./images/image.webp"
import Logo from "./images/motorcycle.jpg"


export default function Main_content() {
    return (
        <div className='mt-2 flex flex-wrap justify-around '>

            <div>
                <div>
                    {/* <img src={Image} className='w-[300px] rounded-3xl' alt="logo" /> */}
                </div>
                <div className='mt-4'>
                    <div className='w-[25%] float-left pr-2'>
                        {/* <img src={Logo} className='w-[5em] rounded-[50%]' alt="logo" /> */}
                    </div>
                    <div className='w-auto text-left'>
                        <div>Title</div>
                        <div>Channel Name</div>
                    </div>
                </div>
            </div>

        </div>
    )
}