

const getLibrary = async() =>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = response.json()
    return data;
}

const LibrarySection = async() => {

    const libraryData = await getLibrary()
    console.log(libraryData);
    

    return (
        <>
        <div className='w-[96%] mx-auto mb-5 '>
            <h2 className='text-[#FFFFFF] text-3xl font-bold'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
        </div>
    
        <div>
            {
                
            }
        </div>
        </>
    );    
};

export default LibrarySection;