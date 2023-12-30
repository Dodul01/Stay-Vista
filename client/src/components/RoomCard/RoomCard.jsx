const RoomCard = ({ room }) => {
    const { title, image , price} = room;

    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                >
                    <img
                        className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                        src={`${image}`}
                        alt='Room'
                    />
                    <div
                        className='
              absolute
              top-3
              right-3
            '
                    >
                        {/* <HeartButton /> */}
                    </div>
                </div>
                <div className='font-semibold text-lg'>{title}</div>
                <div className='font-light text-neutral-500'>
                    5 nights . June 19 - 26
                </div>
                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>$ {price}</div>
                    <div className='font-light'>night</div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard